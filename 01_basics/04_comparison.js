// copmarison with same data type is much easier for numbers and strings.
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// js automatically convert string "2" to number 2 
// console.log("2" > 1);
// console.log("02" > 1);

// Avoid this type of comparison using null and undefined
// the reason is that equality chek == and comprison <,>,>=,<= works differently in js
// comparison converts null to a number treating it as 0 thats why null >= 0 is true and null > 0 is false
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
