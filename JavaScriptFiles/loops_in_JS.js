/*

 Loops in JS
 -----------

 -> Loops are used to execute a peice of code again and again
    
    Entry control loops:
    * for
    * while
    * for-of
    * for-in
    
    Exit control loops:
    * do-while

*/

// Entry control loops:

// for loop:

for(let i=0;i<10;i++){
    console.log(i+" ");
} 

// while loop:

let i=0;
while(i<10){
    console.log(i+" ");
    i++;
}

// for-of loop:

for(let val of "Tarun"){ // string / array
    console.log(val);
}

//for-in loop: for objects, and arrays

let student = {
    name : "Tarun",
    age : 21,
    cgpa : 7.3,
    isPass : true,
}

for(let key in student){
    console.log("Key :", key, " Value : ", student[key]);
}

// Exit control loop:

// do-while loop:

i=0;
do{
    console.log(i+" ");
    i++;
}while(i<10);