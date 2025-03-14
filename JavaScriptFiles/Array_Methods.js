/*

Aray methods:
-------------

commonly used methods:

* push() : adds the element to the end
* pop() : deletes element from end and returns the value
* toString() : converts array to string
* concat() : Joins multiple arrays & returns result
* unshift() : adds element at the front
* shift() : deletes the element from front
* slice() : returns a peice of the array.
* splice() : changes original array(add, remove, replace)

*/

let foodItems = ['apple', 'butter', 'chips'];
console.log(foodItems);
foodItems.push('popcorn');
console.log(foodItems);
console.log(foodItems.pop());
console.log(foodItems.toString());

let bakeryItems = ['cake', 'bread', 'cookies'];
foodItems = foodItems.concat(bakeryItems); // multiple arraays can be passed.
console.log(foodItems);

console.log(foodItems.shift());
console.log(foodItems);
foodItems.unshift('apple');
console.log(foodItems);

console.log(foodItems.slice(0, 4)); //ending index excluded

console.log(`Before splice: ${foodItems}`);
foodItems.splice(0, 2, "banana"); //deletes element at 0, 1 and adds "banana" at 0.
console.log(`Before splice: ${foodItems}`);

//create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
//a. Remove the first company from the array
//b. Remove Uber and add Ola in its place
//c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.splice(2, 1, "Ola"); // replace uber with ola
companies.push("Amazon");
console.log(companies);