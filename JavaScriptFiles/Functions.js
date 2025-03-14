/*

Functions in JS:
----------------
    *  Block of code that performs specific task, can be invoked whenever needed

    Syntax:
    -------

    function definition:

    function functionName(){
    
        // do some work 

    }

    function functionName(param1, param2,...){
    
        // do some work
    
    }

    * Scope of function parameters is restricted to the function block

    function call:
    --------------

    functionName();
    
    Arrow functions:
    ----------------

    * compact way of writing a function

    const functionName = (param1, param2,...) => {
        
            // do some work

        }

*/

// Function without paramaters
function greet(){

    console.log("Welcome...");
    console.log("we are learning JavaScript");

}

// Function with parameters
function sayHi(name){

    console.log(`Hi ${name}`);

}

// Function with parameters without return value
function add(num1, num2){

    console.log(num1+num2);

}

// Function with parameters with return value
function sum(num1, num2){

    return num1+num2;

}

// Function call without arguments
greet();

// Function call with arguments
let name = "Tarun";
sayHi(name);

// Function call with arguments, returns nothing.
add(1, 2);

// Function call with arguments, returns nothing.
let res = sum(1, 2);
console.log(res);

// Arrow function
const mul = (a, b) => {

    return a*b;

}

console.log(mul(2, 3));

/*

Method:
-------

* A function associated with an object is called method.
  eg:
        * forEach is a array method used to iterate array elements. 
        * toUpperCase() in strings
        * toLowerCase in strings.
        etc..
*/

/*

forEach Loop in Arrays:
-----------------------

    Syntax: Array.forEach(callBackFunction)
    CallbackFunction: function passed as an argument to another function.

*/

let numbers = [10, 20, 30, 40];
numbers.forEach(
    // Here, it is a function to execute fro each element in the array.
    (val) => { // val, idx, arr (parameters can be passed)
        console.log(val);
    }
);
numbers.forEach(
    (val) => {
        if(val%3==0)
            console.log(val);
    }
);

/*

What are higher order functions/methods?

* functions/methods which takes another function as a parameter or returns a function.

*/
/*

Map in arrays:
--------------
 
* Creates a new array with the results of some operation.
  The value its callback returns are used to form a new array

  Syntax:

  arr.map(callback(val, ind, arr));

*/
// numbers declared above
numbers = [10, 20, 30, 40];
let squareNumbers = numbers.map((val) => {
        return val**2;
});
console.log(numbers, squareNumbers);

/* 

Filter in arrays:
-----------------

* Creates a new array of elements that give true for a condition/filter.
  eg: to filter all odd numbers.

*/
// numbers declared above
numbers = [10, 20, 30, 40];
let oddNumbers = numbers.filter((val)=>val%2==1); // if only return stmt in arrow function, can use this syntax. 
console.log(numbers, oddNumbers);

/*

Reduce in arrays:
-----------------

* Performs some operations & reduces the array to a single value.
  It returns that single value.

*/
// numbers declared above
numbers = [10, 20, 30, 40];
const result=0;
const sumArray = numbers.reduce((result, current)=>result+current);
console.log(numbers, sumArray);

const initial = numbers[0];
const max = numbers.reduce((initial, current)=>initial>current?initial:current);
console.log(max);