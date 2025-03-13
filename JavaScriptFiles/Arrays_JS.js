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