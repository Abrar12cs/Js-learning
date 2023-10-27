const accountId = 6789;
let accountEmail = "abrar@gmail.com";
var accountPassword = "12345"
accountCity = "Lisbon";
let accountState;

/* prefer not to use var 
because of issue in block scope and functional scope
*/

// accountId = 2; // variables or memory space declared with const keyword can not be changed

accountEmail = "abc@gmail.com";
accountPassword = "45678"
accountCity = "Porto";

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);