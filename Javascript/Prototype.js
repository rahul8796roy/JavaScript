/*
function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));               // => 25
console.log(multipleBy5.power);           // => 2
console.log(multipleBy5.prototype);       // => {}
*/




/*
function createUser(username, score){
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function (){
    console.log(`score is ${this.score}`);
}

const rahul = new createUser("rahul", 25)      // => (without new keyword can not acces)
const kumar = new createUser("kumar", 250)       

rahul.printMe()              // => 25
kumar.printMe()              // => 250
*/







/*
let myHerros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling"
}

Object.prototype.rahul = function(){
    console.log(`rahul is present in all objects`);
}

Array.prototype.heyRahul = function(){
    console.log(`Rahul says hello`);
}

    //heroPower.rahul()          // => (rahul is present in all objects)

    //myHerros.rahul()            // => (rahul is present in all objects)

    myHerros.heyRahul();         // => (Rahul says hello)

   // heroPower.heyRahul()      //   => (can not accesss)
*/









// inheritence

const User = {
    name: "rahul",
    email: "rahul123@gmail.com"
  }
  
  const Teacher = {
    makeVideo: true
  }
  
  const TeachingSupport = {
    isAvailable: false
  }
  
  const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
  }
  
  // Modern Syntax
  Object.setPrototypeOf(Teacher, User);
  Object.setPrototypeOf(TeachingSupport, Teacher);
  
  let anotherUsername = "rahulCoder    ";
  
  String.prototype.trueLength = function() {
    console.log(`Original string: "${this}"`);
    console.log(`True length after trim: ${this.trim().length}`);
  }
  
  anotherUsername.trueLength();    // => (length 10)          
  "rahul".trueLength()             // => (length 5)
  "iceTea".trueLength()            // => (length 6)











/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/









