/*
function myName(){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

myName()  // => (R A H U L)
*/


/*
function addTwoNumbers(number1, number2){
   console.log(number1 + number2);
}

addTwoNumbers()    // => NaN

addTwoNumbers(4,5) // => 9

addTwoNumbers(4, "5")  // => 45

addTwoNumbers("4", 5)  // => 45

addTwoNumbers("4", "5") // => 45

addTwoNumbers(4, "a")   // -> 4a

addTwoNumbers(4, "null")  // -> (4null)
*/


/*
function addTwoNumbers(number1, number2){
    
    //let result
    //console.log("Rahul");
    return number1 + number2
}

onst result = addTwoNumbers(4, 5)

console.log("Result: ", result); //  (Result:  9)
*/


/*
function loginUserMessage(username){
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))  // => (hitesh just logged in)
//console.log(loginUserMessage());    // => (undefined just logged in)
console.log(loginUserMessage(""));    // => (just logged in)
*/


/*
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in` // this time ignore
}

console.log(loginUserMessage()) // => (please enter a username, undefined)
*/



/*
function loginUserMessage(username="rahul"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in` 
}

console.log(loginUserMessage("kumar"));   // => kumar just logged in
*/





/*
function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 600));   // => 200
*/



/*
function calculateCartPrice(...num1){    // => (...num1=>restoperator)
    return num1
}

console.log(calculateCartPrice(200, 400, 600));  // => [ 200, 400, 600 ]
*/



/*
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 600, 1000));  // => [ 600, 1000 ]
*/




// (Object into function pass)

/*
const user = {
    username: "rahul",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)       // => (username is rahul and price is 199)

handleObject({
    username: "aanand",
    price: 399
})                         // => (username is aanand and price is 399)
*/




const myNewArray = [200, 400, 100, 600]

function  returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));  // => 400


