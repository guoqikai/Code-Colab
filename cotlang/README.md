# CotLang - A Script Language for Code Testing

## Introduction
CotLang is designed for writing testing script that could be applied to all languages supported by Code Colab. The language has a Python like, very readable syntax while only support a relatively small subset of features. 

## Features 
CotLang supports 6 primitive types: char, int, float, double, bool, and string.
```Java
//primitive types
is_true = false
my_str = "hello!"
my_char = '1'
i = 1 //int
c = char(1) //char
f = 1. //float
d = double(1) //double
```
There are two built-in container types
```Java
//bulit-in containers
int_list = [1, 2, 3]
range_list = [from 0 to 2] //[0, 1, 2]
copy_list = int_list * 2 //[1, 2, 3, 1, 2, 3]
empty_int_list = list<int>()

len = int_list.len //3
first = int_list[0] //1

int_dict = {1:2, 2:3, 3:4}
empty_int_dict = dict<int, int>()
```
Loops and conditions:
```Java
// print 0, 1, 2
for i from 0 to 2:
    print(i)
//or
i = 0
while i < 3:
    print (i)
    i += 1

// loop over a list:
l = [1, 2, 3]
for i in l:
    print(i)
//or
for i from 0 to l.len - 1:
    print(l[i])

// loop over a dict:
dict = {1:2, 2:3}
for k, v in dict:
    print("k:" + k + "v" + v)
//or
for k in dict.keys:
    print("k:" + k + "v" + dict[k])

//conditions:
if l == [1,2,3]:
    print(1)
else if l == [2, 3, 4]:
    print(2)
else:
    print(3)
```

Function definition is not supported, user can import functions and classes they declared in the configuration file. 
```Java
//Objects import from user's code
user_defined_obj = MyObject()
user_defined_container_obj = MyContainer<MyObject>()
print(user_defined_container.someMethod())
``` 
There are three keywords for debugging and tracking user's code: print, trace, and expect. The following example demonstrate some use cases of them. Let's say the user is writing a program that computes sum of two number. The program is written in python:
```Python
def my_sum(num1, num2):
    if num2 == 2:
        return num1
    return num1 + num2
```
Clearly the user made a non-sense mistake. The user then run a test script submitted by another user:
```Java
for num1 from 0 to 999:
    for num2 from 0 to 999:
        trace(num1, num2)
        print("current sum:" + (num1 + num2))
        expect my_sum(num1, num2) == num1 + num2 
```
Then when user run the test script, console output is:
```
current sum: 0
current sum: 1
current sum: 0
Error! Expect 2, got 0
```
The test output is:
```Java
for num1 from 0 to 999:
    for num2 from 0 to 999:
        trace num1
        trace num2
        print("current sum:" + (num1 + num2))
        --------------------------------------
        Expect 2, got 0
        Traced Variables:
        int num1: 0
        int num2: 2
        --------------------------------------
        expect my_sum(num1, num2) == num1 + num2 
```

CotLang is a strongly typed, lexical scope language, following operations will cause compile-time error
```Java
// empty container without specifying contain type
l = [] 
d = {}

// reassign a variable to a different type
i = 1
i = 1.3

// declear a variable without initial value
obj

// access a variable decleared in inner scope from outter scope
if i == 0:
    b = "hello!"
print(b)
```

