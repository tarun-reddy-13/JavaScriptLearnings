/*

Q1. Create a function using "function" keyword that takes a string
    as an argument and returns the number of vowels in the string.

Q2. Create an arrow function to perform the same task.

Q3. For a given array of numbers, print the square of each value
    using the forEach loop.

*/

// Q1
function length(text){

    let evenCount=0;

    for(let letter of text){

        if(
            letter==='a'||
            letter==='e'||
            letter==='i'||
            letter==='o'||
            letter==='u'||
            letter==='A'||
            letter==='E'||
            letter==='I'||
            letter==='O'||
            letter==='U'
        )
            evenCount++;
    }
    
    return evenCount;

}

console.log(length("JavaScript"));

// Q2
let countEven = (text) => {

    let evenCount=0;

    for(let letter of text){

        if(
            letter==='a'||
            letter==='e'||
            letter==='i'||
            letter==='o'||
            letter==='u'||
            letter==='A'||
            letter==='E'||
            letter==='I'||
            letter==='O'||
            letter==='U'
        )
            evenCount++;
    }
    
    return evenCount;

}

console.log(countEven("JavaScript Programming"));

// Q3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((val) => {
    console.log(val**2);
});

//or

const calculateSquare = (val) => {
        console.log(val**2);
};
numbers.forEach(calculateSquare);