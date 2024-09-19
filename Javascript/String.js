
str1 = "Hello"
str2 = " Rahul"

str3 = str1 + str2;

console.log(str3);  // Output => Hello Rahul



console.log("1" + 2)  // =>12
console.log(1 + "2")  // => 12
console.log("1" + "2") // => 12
console.log("1" + 1 + 1) // => 111
console.log(1 + 2 + "2") // =>  32
console.log(1 + 1 + "2" + 1) // => 221
console.log(1 + 1 + "2" + "1") // => 221


console.log(+true) // => 1
console.log(+"")   // => 0



let gameCounter = 100
++ gameCounter;
console.log(gameCounter); // => 101 





const name = "rahul"
const repoCount = 50

// console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('rahulkumar')

//console.log(gameName[0]);
//console.log(gameName._proto_);

//console.log(gameName.length)
//console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));  // => h

console.log(gameName.indexOf('h'));  // => 2


const newString =gameName.substring(0, 4)
console.log(newString);                   // => (rahu)


const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // negative value

const newStringOne = "    rahul   "
console.log(newStringOne);
console.log(newStringOne.trim()); // => whitespace remove

const url = "https://rahul.com/rahul%20kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('rahul')) // => true
console.log(url.includes('roy'))   // => false





const name = "rahul"
const repoCount = 50

// console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('rahulkumar')

//console.log(gameName[0]);
//console.log(gameName._proto_);

//console.log(gameName.length)
//console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));  // => h

console.log(gameName.indexOf('h'));  // => 2


const newString =gameName.substring(0, 4)
console.log(newString);                   // => (rahu)


const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // negative value

const newStringOne = "    rahul   "
console.log(newStringOne);
console.log(newStringOne.trim()); // => whitespace remove

const url = "https://rahul.com/rahul%20kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('rahul')) // => true
console.log(url.includes('roy'))   // => false


