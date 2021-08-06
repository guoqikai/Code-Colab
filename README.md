# Code Colab

A web application where users can practice and discuss technical questions. Users can write code, test their solution on the application, and see the feedback in real-time.   

The ultimate goal of this application is to create a forum where people can discuss technical questions in 'show me the code' style. Users can post programming questions and answer questions by posting their solution (along with the comment, if they want). If a user believes there is a problem with a solution, he can add new test cases and see whether the solution passes these test cases. If not, he can comment on the solution with a link to failed test cases.   

Users can upvote/downvote questions, solutions, and test cases. If they think a test case does not make any sense, he can skip that test case and downvote it. Similarly, if they think a question is poorly worded or a solution is incorrect, he can downvote them as well.    

## Go to
[Sand box environment for running user's code](#Sandbox-Environment)   
[How does this thing work?](#How-This-Whole-Thing-Works)   
[POC V1](#About-POC-V1) (Completed and deployed on Heroku so you can try it out!)   
[POC V2](#About-POC-V2) (Currently developing)

## Browser as Sandbox Environment
Most web applications that allow users to execute code (like Leetcode, GeekforGeek) works in the following way: 
  * When users click the run button, the server will create a sandbox environment for the particular user.  
  * User's solution will then be executed in the sandbox environment
  * Console output will be sent back to the user via WebSocket
  * When the execution is completed, the server will destroy the sandbox and free all resources

A major drawback of this approach is that creating a fully isolated sandbox is too expensive. Hence we can only create lightweight sandboxes (like docker container) that share some resources like kernel and file system. Since we cannot trust the content(i.e user's solution) in the sandbox, we must be very careful when a sandbox requires some shared resource. As the result, only very limited types of operations can be executed on the platform. In addition, the cost for creating a lightweight sandbox is still high and the server can only provide limited computing resources to a particular user([unless you are Google](https://colab.research.google.com/)).

What if we can somehow manage to execute the user's solution in a sandbox environment hosted on his browser?   
* Users can do whatever they want and we do not need to worry about user's code break our server 
* Users can utilize all available computing recourses on their device, which would be far more than what we can give for free 
* It is still a plug-and-play experience for the user since it is still in a sandbox environment

For the project, we would like to see if it's possible to move the heavy job to the client-side using [WebAssembly(Wasm)](https://webassembly.org/), which is an open standard that defines a portable binary-code format for executable programs in browser and other environments; it's supported in all major browsers. 
### Related Articles/Documentations:
[Wasm security](https://webassembly.org/docs/security/)   
[Can Wasm become the new Docker?](https://adlrocha.substack.com/p/adlrocha-can-wasm-become-the-new)   
[List of language that currently compiles to Wasm](https://github.com/appcypher/awesome-wasm-langs)

## How This Whole Thing Works
In this section, I'll explain how the application works at a higher level and some design decisions. 

### Implementation Challenges

The major implementation challenge is to not only make the same test case executable across all supported programming languages but also keep the process of adding test cases straightforward and in addition, support more complicate test cases/test scripts for advanced users.

Another challenge is to avoid unnecessary recompilation since code is compiled on the server side. Users' code should only be recompiled when they modify the code but neither when users add new test cases nor execute existing test cases.

### The Code Execution/Testing Framework
To decouple test cases from a specific programming language, and avoiding recompilation when new test cases are added, the application comes with a simple, strict typed language called [CotLang](./cotlang) for writing test script and an interpreter that can execute the language in the browser.

When user posts a question, he'll need to specify entry points of the question, that is, functions the testing framework may invoke. For each entry point, user needs to specify the number of inputs, input types, and return types. He might also include files, helper functions, specifying programming language, adding starter code, configuring the compiler, and so on. The process can be done by filling out a form but it will ultimately convert to an XML file that stores all the configuration (I'll call it `configuration file` in this section).

Similarly, users can add test cases by either writing a CotLang script directly or filling out a form, which will later be transpiled to a CotLang script as well. Before user submits a test case, the application will perform semantic analysis to make sure all types are matched and functions are called in the correct way using the configuration file.

User's code along with the configuration file will be compiled into a WebAssembly program that has the following functions:
* `var_create(name:str, type:str, value:str)`: Create a variable.  
* `invoke(function_name:str, arguments:[str]):str`: Invoke a function, the function must be a entry point that user specify in the configuration file, arguments can contain either variable names or primitive values.
* `var_val(name:str);str`: get the value of a variable in string format
* `reset()`: reset the environment, clear all declared variables

When user executes a test script, the interpreter keeps all declared variables in its environment. When an entry point is invoked, the interpreter will copy required variables to the WebAssembly program's environment, invoke the function, and copy the updated value back to its own environment.  

## About POC V1
* It is called Letcode for an obvious reason
* Instead of a complete language, it has a parser written in TypeScript for parsing input/output value only
* Originally I planned to support Python and C/C++ but only I had time for Python implementation(exams were coming..)

* POC V1 is [Deployed on Heroku](https://let-code.herokuapp.com/. Since the application is deployed on Heroku, it takes longer to load if it has not been accessed for a period.

### Type Definition
As mentioned, the app has a parser that parse test case input to Python or C syntax. The input string should be in the following format:  
* int: A decimal integer, no leading zero
* float: A decimal float, could be .xx or a int
* string: "`<value>`" or '`<value>`'
* bool: one of `true`, `True`, `false`, `False`
* list<`type`>: `[<value>, <value>, ...]`
* dict<`key_type`, `value_type`>: `{key: value, key: value...}`


### Navigate the app

After landing on the main page of the application. Users can click **Sign in/Sign up** button to log in or create a new account. Enter the information and sign up for an account. (sign-up)

Users can add a question by clicking on the **New Question** button, and then enter the name, description, function name, input parameters, and output. Nested generic type declaration is supported, including for the input parameters and return value. There is no restriction on the depth of data structures. (add-question)

On the second page, users are asked to create test cases for the question. The test case input parameters and output must match the data structure provided on the previous page. Mismatches and syntax errors will be detected on submission. After creating the question and test cases, the question will appear at the bottom of the question list. (add-test-case)

Users can explore and answer questions by clicking on the question cards. On the question details page, the question description, answers from other users, and test cases are shown. Users can add a new test case to the question by clicking on the **Add** button on the **Test cases** page. They can write their solution by clicking on the **Add Answers** button on **Answers** page, which will open the editor. In this version, only Python is supported. Users can select the test cases they want to run, and then click (question-page)

There are two types of errors, syntax error and runtime error. (code-error)

When tests are completed, users can check their passing and failing tests with the actual outputs and expected outputs. They can also check out any of their history versions of code. After submitting answers, they will be returned to the **Answers** page of the question. (passing-and-failing-test-case)

## About POC V2
I decide to rewrite/restructure the whole application because of the following reasons:
* There are too many global components in V1. It's getting hard to maintain them without using redux.
* Writing a parser for a language (even a simple one) without using any library seems quite difficult and the code runner in V1 is based on that handwritten parser.
* Backend of V1 is poorly written.
* The old project name is kinda funny and a more 'serious' name is needed.

## Current Progress

* Finished:
    * Rename the project (Letcode -> Code Colab)
    * Logo design 
    * CotLang gramma
    * Main page 
    * Toaster
    * Pagination
    * Comment card
    * Voting
* Currently Working on:
    * Question detail page
    * Editor page
    * Login page
    * Post question page
    * Migrate from react-codemirror-2 to codemirror.next
    * CotLang parser for static type check
    * Interpreter for CotLang
    * support Python, C 

* Haven't start:
    * User profile page
    * My profile page
    * support C++, Rust, Java
    * support JavaScript
    * all services...
    * and more ...

## If You Are Interested in Working on The Project with Me
Let me know! My email is guosidney@gmail.com

