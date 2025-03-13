/*

primitive:

* number
* string
* boolean
* undefined
* null
* bigint
* symbol

*/
 let num = 10.5; // --> typeof num --> number
 console.log(typeof num);
 
 let name = "Tarun"; // --> typeof name --> string
 console.log(name);

 let flag = true; // --> typeof flag --> boolean
 console.log(flag);

 let x; // --> typeof x --> undefined;
console.log(typeof x);

let k = null; // --> typeof x --> object, value = null
console.log(typeof k);

let big_int = BigInt("12345678910"); // big_int --> bigint
console.log(typeof big_int);

let y = Symbol("Hello!"); // --> typeof y --> symbol
console.log(typeof y);

/*

non primitive data types : objects, assrys, functions, etc..

object: collections of values.
eg:
    student:
        name string
        age number
        marks number
        isPass boolean

object stores data in key:value format in a block.
generally objects are declared using const

*/

const student = {
    full_name: "Tarun Reddy",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

console.log(student); // { full_name: 'Tarun Reddy', age: 20, cgpa: 7.5, isPass: true }
console.log(typeof student) // object

//accessing values
//both ways of accessing is valid
console.log(student["full_name"]); // Tarun Reddy
console.log(student.full_name); // Tarun Reddy 

//modifying data
student.age = student.age+1; 
console.log(student.age); // 21
/*
are we modifying const?

here we are trying to change data of the keys in the object(which is collection of key value pair)
we are not changing/reassigning object.
*/

//another example
const product = {
    product_name : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270
};
console.log(product);

//another example
const profile = {
    user_name : "@t_tarun_132",
    isFollow : false,
    followers : 150,
    following : 300
};
console.log(profile);
