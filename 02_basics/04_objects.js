// 02_basics/04_objects.js
// const tinderUser = new Object(); //singelton object

const tinderUser = {}; // non singelton object

tinderUser.id = "123a";
tinderUser.name = "Abrar";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

//nested objects
const regularUser = {
email: "somebody@gmail.com" ,
fullName :{
    userFullName :{
        firstName : "Muhammad" ,
        lastName : "Abrar"
    }
}
}

//console.log(regularUser.fullName);


const obj1 = { 1 : "a" , 2 : "b"};

const obj2 = { 3 : "a" , 4 : "b"}

//const obj3 = Object.assign({} , obj1,obj2)
const obj3 = {...obj1 , ...obj2} // spread operator

console.log(obj3);

const users = [
    { id: 1 , email: "a@gmail.com"},
    { id: 2 , email: "a@gmail.com"},
    { id: 3 , email: "a@gmail.com"}
    
]

// console.log(users[1].id);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //return array of keys of tinderUser object
console.log(Object.values(tinderUser));//return array of values of tinderUser object

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

