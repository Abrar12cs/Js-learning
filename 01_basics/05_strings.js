const name = "Muhammad-Abrar";
const age = 29;

//console.log(`wellcome Mr: ${name} your are ${age} years old now`);
//console.log(name);
//console.log(typeof name);


const gameName = new String("chatGPt");

//console.log(gameName);
//console.log(typeof gameName);

//prototypes of strings
//console.log(`length of chatGPT is ${gameName.length}` );
//console.log(`index of c in chatGPT is: ${gameName.indexOf('c')}`);

//console.log(gameName.toLocaleUpperCase());
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt('4'));
//console.log(gameName.indexOf('t'));//return index of first t in your string

const stringOne = "     chat-GPT-AI-Game      ";
//console.log(stringOne);
//console.log(stringOne.trim());

console.log(stringOne.replace('-','/'));
console.log(stringOne.includes('-'));

console.log(stringOne.split('   ')); //convert string to Array on bassis of seperator like space , - 
console.log(stringOne.split('-'));
 
const newString = gameName.substring(-7,4);
//console.log(newString);

const anOtherString = gameName.slice(-7,4);
//console.log(anOtherString);
