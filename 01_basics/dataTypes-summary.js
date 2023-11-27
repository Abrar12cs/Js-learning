/*  
//primitive (call by value) mean copy of data is provided
 instead of original data memory refrence,changes are made in copied data not in actual one 
 // 7 types :String, Number, Boolean, null, undefined, Symbol, Bigint

*/

const score = 30;
const  scoreValue = 30.56;

const isLoggedIn = false;
const outSideTemp = null;
 let userEmail;


 const id = Symbol('123')
 const anotherId = Symbol('123')
 
 console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive):
//Array, Objects, Functions
// refrence of orignal data is provided and changes are made in actual data 
 

const heros = ["AllamaIqbal", "Quaid e Azam", "Abdul Sattar Edhi"];
let myObj = {
    name: "Abrar",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//***********************************************************************************
//Stack (Primitive ) Heap ( non primitive)

let myYoutubeName = "abrarDotCom";
let anOtherName = myYoutubeName;

anOtherName = "BabooDotCom";

console.log(myYoutubeName);
console.log(anOtherName);

let userOne = {
    id : 1 ,
    email : "userOne@gmail.com"
}
let userTwo = userOne;
userTwo.email = "baboo@gmail.com";

console.log(userOne);
console.log(userTwo);

