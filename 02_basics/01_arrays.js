// node 02_basics/01_arrays.js

const myArr = [0,1,2,3,4,5];
console.log(myArr);

// const myArr2 = new Array(1,2,3,4,5,true,"baboo");
// console.log(myArr2);

//Array Methods
// myArr.push(8);       //insert new element at last index
// console.log(myArr);
// myArr.pop();         //remove last indexd element
// console.log(myArr);

// myArr.unshift(55);       //insert new element at 1st index
// console.log(myArr);
// myArr.shift();              //remove 0th indexd element mean first element
// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));

// const newstringOfArray = myArr.join();
// console.log(`join method convert array to string: ${newstringOfArray}`);
// console.log(typeof newstringOfArray);
// console.log(`original myArray: ${myArr}`);

// slice() didn't manipulate orignal array 
// splice() manipulate orignal array

const  sliceArr = myArr.slice(1,3);

console.log("sliceArr", sliceArr);
console.log("myArr", myArr);

const  spliceArr = myArr.splice(1,3);

console.log("spliceArr", spliceArr);
console.log("myArr", myArr);









