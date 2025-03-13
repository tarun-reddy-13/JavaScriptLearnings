/*
Q1. Get user to input a number using prompt("Enter a number: "),
    check if the number is a multiple of 5 or not.
*/

let num = prompt("Enter a number: ");
console.log((num%5==0)?"the number is a multiple of 5":"the number is not a multiple of 5");

/*
Q2. Write a code which can give grades to students according to their scores.
    * 80 - 100, A
    * 70 - 79, B
    * 60 - 69, C
    * 50 - 59, D
    * 0 - 49, F
*/

let marks = prompt("Enter marks: ");
if(marks>=80 && marks<=100)
    console.log("Grade: A");
else if(marks>=70 && marks<=79)
    console.log("Grade: B");
else if(marks>=60 && marks<=69)
    console.log("Grade: C");
else if(marks>50 && marks<=59)
    console.log("Grade: D");
else if(marks>=0 && marks<=49)
    console.log("Grade: F");
else
    console.log("Enter valid marks next time!");