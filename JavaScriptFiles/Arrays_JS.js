// array can be hetrogenious
// indexing 0 --> size-1
// string immutable, array mutable

let marks = [97, 82, "75", 64, 36];
console.log(marks);
console.log(marks.length);

// Looping over array:

for(let i of marks){
    console.log(i);
}

for(let i in marks){
    console.log(marks[i]);
}

//find average of student marks [85, 97, 44, 37, 76, 60]
marks = [85, 97, 44, 37, 76, 60];
let sum=0;
for(let mark of marks){
    sum+=mark;
}
let avg = sum/marks.length;
console.log(avg);

//For a given array with prices of 5 items -> [250, 645, 300, 900, 50] all items
//have an offer of 10% on them. Change the array to store final prices after applying offer.

let items = [250, 645, 300, 900, 50];
console.log(`Before discount : ${items}`);
for(let item in items){
    items[item] = items[item]-(items[item]*0.10);
}
console.log(`After discount : ${items}`);