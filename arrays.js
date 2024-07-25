// introduction to arrays in javascript:

// let arr = [1,2,3,4,5];

// console.log(arr[0]);
// arr.push(6);
// console.log(arr);

// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

// const newArr = arr.join();
// console.log(newArr);
// console.log(typeof newArr);
// console.log(typeof arr);


// arrays part 2 :

// let marvel_heroes = ["spiderman", "ironman", "thor"];
// let dc_heroes = ["batman", "flash", "superman"];

// first way of merging arrays:

// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes)

// second way of merging arrays : 

// const all_heroes = [...dc_heroes,...marvel_heroes];
// console.log(all_heroes);


// making of a new arrays from a set of elements : 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));