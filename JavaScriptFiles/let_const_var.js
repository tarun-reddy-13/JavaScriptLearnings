/*

let, const and var
------------------

var: Variable can be re-declared & updated. A global scope variable.
let: Variable cannot be re-declared but can be updated. A block scope variable
const: Variable cannot be re-declared or updated. A block scope variable.

*/

//let

let name = "Tarun";
console.log(name);

/*

if uncommented, gives error, as using let name is declared above, below we are trying
to redeclare, gives error.

let name = 123;
console.log(name);

SyntaxError: Identifier 'name' has already been declared

*/

//const
const pi = 3.14;
console.log(pi);

/*

if reassigned, we get error at run time.

TypeError: Assignment to constant variable.

pi = 3.56;
console.log(pi);

*/

//var
//not recommended
var age = 24;
var age = 59;
var age = "abc";
console.log(age);

/*

recommended to use let, const.

*/

//let and const have block scope block ---> {code enclosed in these braces}
//block 1
{
    let a = 5; // scope of a is limited to current block (block 1)
    console.log(a);
}
//block 2
{
    let b=10; //a from block 1 is not accessable here.
    console.log(b);

    let a = 15; //a in block 2 is different from a in block 1
}