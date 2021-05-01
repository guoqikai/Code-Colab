grammar CotLang;

tokens { INDENT, DEDENT }

/*
 * Parser Rules
 */

prog : (NEWLINE | stmt)* ;

stmt 
    : simple_stmt 
    | compound_stmt 
    ;

simple_stmt : line_stmt (SEMI line_stmt)* SEMI? NEWLINE;

line_stmt 
    : assign 
    | mock_assign 
    | break_stmt 
    | exit_stmt 
    | expect_stmt
    | trace_stmt 
    | expr 
    ;

break_stmt : BREAK ;

exit_stmt : EXIT ;

expect_stmt : EXPECT comparison (BECAUSE STRING)?;

trace_stmt : TRACE prop;

compound_stmt 
    : for_stmt 
    | while_stmt 
    | cond_stmt 
    ;

for_stmt : FOR ID (COMMA ID)* (IN | FROM) expr scope;

while_stmt : WHILE expr scope;

cond_stmt : if_stmt else_if_stmt* else_stmt?;

if_stmt : IF expr scope;

else_if_stmt : ELSE IF expr scope;

else_stmt : ELSE scope;

scope : COLON (simple_stmt | INDENT stmt* DEDENT);

assign : prop assign_op expr ;

assign_op 
    : ASSIGN 
    | ADD_AS 
    | SUB_AS 
    | MULT_AS 
    | MOD_AS 
    | POW_AS
    ; 

mock_assign : (prop | func_call) ARROW expr ;

expr 
    : func_call
    | comparison
    | prop
    | list_dcl
    | dict_dcl
    | stream
    | arith_expr
    | bool_expr
    | atom
    ;

comparison : expr comp_op expr;

comp_op
    : LT
    | GT
    | EQ
    | GE
    | LE
    | NEQ
    | IN
    | NOT IN
    ;

func_call : prop ('<' ID '>')? LPAREN (expr (COMMA expr)*)? RPAREN ;

prop = ID | expr DOT ID | expr LBRACK expr RBRACK;

atom
    : STRING
    | CHAR
    | bool
    | float
    | integer
    ;

bool : TRUE | FALSE ;

list_dcl : LBRACK expr+ RBRACK;

dict_dcl : LBRACE pair (COMMA pair)* RBRACK ;

pair : immutable_atom COLON expr;

stream :  expr (ELLIPSIS | UNTIL | TO) expr;

arith_expr : ;

bool_expr : ;



/*
 * lexer rules
 */

OR        : 'or' ;
AND       : 'and' ;
NOT       : 'not' ;
IF        : 'if' ;
ELSE      : 'else';
IN        : 'in' ;
FOR       : 'for' ;
WHILE     : 'while' ;
FROM      : 'from';
TO        : 'to';
UNTIL     : 'until';
EXPECT    : 'expect' ;
TRACE     : 'trace' ;
MOCK      : 'mock' ;
TRUE      : 'true' ;
FALSE     : 'false' ;
EXIT      : 'exit' ;
BREAK     : 'break' ;
BECAUSE   : 'because';
ID        : ([a-zA-Z] | '_') ([a-zA-Z] | '_' | DIGIT)* ;
NEWLINE   : ( '\r'? '\n' | '\r' ) SPACES? ;

ELLIPSIS  : '...' ;
ARROW     : '->' ;
ADD_AS    : '+=' ;
SUB_AS    : '-=' ;
MULT_AS   : '*=' ;
MOD_AS    : '%=' ;
POW_AS    : '^=' ;
DSLASH    : '//' ;
SLASHSTAR : '/*' ;
STARSLASH : '*/' ;
EQ        : '==' ;
NEQ       : '!=' ;
GE        : '>=' ;
LE        : '<=' ;

GT        : '>' ;
LT        : '<' ;
PLUS      : '+' ;
MINUS     : '-' ;
POWER     : '^' ;
STAR      : '*' ;
LPAREN    : '(' ;
RPAREN    : ')' ;
LBRACE    : '{' ;
RBRACE    : '}' ;
LBRACK    : '[' ;
RBRACK    : ']' ;
PCT       : '%' ;
ASSIGN    : '=' ;
DOT       : '.' ;

COMMA     : ',' ;
COLON     : ':' ;
SEMI      : ';';
SLASH     : '/' ;
CHAR      : '\'' [\u0000-\u0127] '\''
STRING: '"' ( ESC | ~[\\"] )* '"' ;

DECIMAL_INTEGER : NON_ZERO_DIGIT DIGIT* | '0'+ ;
FLOAT_NUMBER: POINT_FLOAT | EXPONENT_FLOAT ;

SKIP_ : ( SPACES | COMMENT | LINE_COMMENT | LINE_ESCAPE ) -> skip ;
UNKNOWN_CHAR : . ;

/*
 * fragments
 */

fragment NON_ZERO_DIGIT : [1-9] ;
fragment DIGIT : [0-9] ;
fragment POINT_FLOAT : INT_PART? FRACTION | INT_PART '.' ;
fragment EXPONENT_FLOAT : ( INT_PART | POINT_FLOAT ) EXPONENT ;
fragment INT_PART : DIGIT+ ;
fragment FRACTION : '.' DIGIT+ ;
fragment EXPONENT : [eE] [+-]? DIGIT+ ;

fragment SPACES: [ \t]+ ;
fragment COMMENT: '/*' .*? '*/' ;
fragment LINE_COMMENT: '//' ~[\r\n]* ;
fragment LINE_ESCAPE: '\\' '\r'? '\n';

fragment ESC : '\\' (["\\bfnrt] | ) ;