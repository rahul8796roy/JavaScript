/*
const user = {
    username: "rahul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

//user.welcomeMessage();    // => (rahul, welcome to website)
//user.username = "sam"
//user.welcomeMessage()    // => (sam, welcome to website)

//console.log(this);

//function abc(){
  //  let username = "rahul"
    //console.log(this);   // all value print
//}

//abc()
*/






/*
const chai = () => {
    let username = "rahul"
    console.log(this);       // => {}
}

chai()
*/





/*
const addTwo = (num1, num2) => {
    return num1 + num2 
}

console.log(addTwo(3,4))     // => 7
*/





/*
// (implicit return) => (return is not used)

const addTwo = (num1, num2) => (num1 + num2) 

console.log(addTwo(3,4))        // => 7 
*/





//const addTwo = (num1, num2) => ({username: "rahul"}) 

//console.log(addTwo(3,4))       // => { username: 'rahul' }








// immediately invoked functiom expression

/*
(function chai(){
    console.log(`DB CONNECTED`);      // => (DB CONNECTED)
})(); 

(function aurcode() {
    console.log(`DB CONNECTED TWO`);   // => (DB CONNECTED TWO)
})()
*/






/*
(function chai(){
    console.log(`DB CONNECTED`);      // => (DB CONNECTED)
})();    // => (semicolon used without error)

( () => {
    console.log(`DB CONNECTED TWO`);   // => (DB CONNECTED TWO)
})()
*/





(function chai(){
    console.log(`DB CONNECTED`);      // => (DB CONNECTED)
})(); 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);   // => (DB CONNECTED TWO rahul)
})('rahul')


