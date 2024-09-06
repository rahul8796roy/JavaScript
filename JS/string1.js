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


