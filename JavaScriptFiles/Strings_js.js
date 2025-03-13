 /*

 Strings in JS
 -------------

 -> String is a sequence of characters used to represent text

 */

 let str1 = "GITAM Univesrity"; // also 'GITAM University' is valid

// properties:
 let size = str1.length; 

// String indexing:
// starts with 0, goes till size-1
 
// Template Literals
// To create strings by doing substitution of placeholders
// `string text ${expression} string text

let sentence = `This is a template literal`;

const product = {
   product_name : "Ball Pen",
   rating : 4,
   offer : 5,
   price : 270
};

/*
 
 console.log("the cose of ", product.producgt_name, " is ", obj.price, " rupees.");
 in the above statement, to print the log, the string is broken
 insted to avoid that we use template string, in which we can 
 put the text and values in one single string.

*/

console.log(`The cost of ${product.product_name} is ${product.price} rupees`);

// Escape characters (\n, \b, \t, \a, \, \r)

/*
 
String Methods:
---------------

 * str.toUpperCase()
 * str.toLowerCase()
 * str.trim() // removes whitespaces
 * str.slice()
 * str.concat()
 * str.replace()
 * str.charAt()
 .....

 */
