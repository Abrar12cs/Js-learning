const score = 400;
// console.log(score);

const balance = new Number(45.678);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));// fixed length of number after decimal point upto given no.
// console.log(balance.toPrecision(3));

const longNumber = 12345678;
// console.log(longNumber.toLocaleString());


// ********************  Math *******************
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.abs(3));
// console.log(Math.ceil(4.0123)); // round off to "max" (whole number), if value after decimal point is "greater than 0". 
// console.log(Math.floor(4.9)); // / round off to "min" (whole number), if value after decimal point is "greater than 0".
// console.log(Math.min(6,7,8,9));
// console.log(Math.max(6,7,8,9));

// console.log(Math.random());// returns a random decimal number between 0 and 1

// console.log(Math.random()+1);      // returns a random decimal number between 1 and 2
// console.log(Math.random()*10);     // returns a random decimal number between 0 and 10
// console.log((Math.random()*10)+1); // returns a random decimal number between 1 and 10


// console.log(Math.floor(Math.random()+1));// Always returns 1
// console.log(Math.ceil(Math.random()+1)); // Always returns 2
// console.log(Math.floor(Math.random()*10)+1); //returns mini 1 and maxi 10

const min = 5;
const max = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);// return bw min and max value

// const year = 23; 
// console.log(year+Math.random()); // to get value bw 23 and 24




