// node 02_basics/02_arrays.js
const arr1 = new Array(0,1,2,3,4,5);
const arr2 = new Array(6,7,8,9);

// // push --> Appends new elements to the end of an array, and returns the new length of the array.
//  arr1.push(arr2);
// console.log("pushedArray :", arr1);

// const arr3 = ["a","b","c"];
// const arr4 = ["d","e","f"];

// const concatedArr = arr3.concat(arr4);
// //Combines two or more arrays.

// console.log("concatedArr:", concatedArr);

console.log(Array.isArray("baboo"));
console.log(Array.from("baboo"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

