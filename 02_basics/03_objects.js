// node 02_basics/03_objects.js

// singelton
// Object.create

//object Literals

const mySym = Symbol("key1"); // symbol define
const asimSym = Symbol("asimSymbol")

const jsUser = {

    name : "Abrar",
    "full name" : "Muhammad Abrar",
    [mySym]: "myKey1",
    [asimSym]:"asimKey",
    age: 28,
    email:"abrar123@gmail.com",
    isLoggedIn:true,
    lastLoggedInDays :["friday","monday"]
};

// imortant note: to access Object values we normally use dot notaion 
// but dot notation dosen't work for symbols and special case like full name
// for that purpose we use square bracket notation

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]),
// console.log(jsUser["age"]),
// console.log(jsUser[mySym]);
// console.log(typeof [mySym]);
// console.log(typeof mySym);

// jsUser.age = 18;
// console.log(jsUser.age);

// Object.freeze(jsUser);

// jsUser.age = 25;
// console.log(jsUser);

jsUser.greeting1 = function(){
    console.log("wellcome js user");
}
jsUser.greeting2 = function(){
    console.log(`Wellcome js user ,${this["full name"]}`);
}

console.log(jsUser.greeting1());
console.log(jsUser.greeting2());
console.log(jsUser);
