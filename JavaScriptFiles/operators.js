 /*
 
 Operators in JS:
 ----------------

 -> used to perform some operation on data 

 */

// * Arithematic Operators (+, -, *, /, %, **)

let a = 5;
let b = 2;

console.log("a = ", a, " b = ", b);
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);
console.log("a**b=", a**b); // pow(a, b)

// * uniary operators (++, --)

console.log("a = ", a, " a++ = ", a++, " after a++, a = ", a); //post increment
console.log("a = ", a, " ++a = ", ++a, " after ++a, a = ", a); //pre increment
console.log("a = ", a, " a-- = ", a--, " after a--, a = ", a); //post decrement
console.log("a = ", a, " --a = ", --a, " after --a, a = ", a); //pre decrement

// * assignment operators (=, +=, -=, *=, %=, **=)

console.log("a = ", a, " b = ", b);
a=b;
console.log("a = ", a);
a+=b; //a = a + b
console.log("a = ", a);
a-=b; // a = a - b
console.log("a = ", a);
a*=b; //a = a * b
console.log("a = ", a);
a/=b; // a = a / b
console.log("a = ", a);
a**=b; // a = a ** b
console.log("a = ", a);
a%=b; // a = a % b
console.log("a = ", a);

// * Relational operators (==, ===, !=, !==, >, >=, <, <=)
a = 5;
b = "5";

console.log("a = ", a, "typeof a = ", typeof a);
console.log("b = ", b, "typeof b = ", typeof b);

console.log("a==b ", a==b); // a equal to b
console.log("a===b", a===b); // a equal to and type b
console.log("a!=b ", a!=b); // a not equal to b
console.log("a!==b", a!==b); // a not equal to and type b
console.log("a>b ", a>b);
console.log("a>=b ", a>=b);
console.log("a<b ", a<b);
console.log("a<=b ", a<=b);

// Logical Operators (&&, ||, !)

console.log("a>b && a==5 ", (a>b && a==5));
console.log("a>b || a==5 ", (a>b || a==5));
console.log("!(a>b) ", !(a>b));

// Ternary Operatoe (: ?)

let age = 19;
console.log(age>18?"adult":"not adult"); // condition ? true statement : false statement