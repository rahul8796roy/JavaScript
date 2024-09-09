
/*
const userEmail = "rahulicai4@gmail.com"

if (userEmail) {
    console.log("got the user email");     // => (got the user email)
} else {
    console.log("Don't have user email");
}
*/






/*
const userEmail = ""                  // => (empty again else part execute)

if (userEmail) {
    console.log("got the user email");    
} else {
    console.log("Don't have user email");     // => (Don't have user email)
}
*/







// Falsy value 

// => false,  0,  -0,  BigInt 0n,  "",  null,  undefined,  NaN





// Truthy Value

// "0",  'false',  " ",  [],  {},  function(){}






/*
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");         // => (Object is empty)
}
*/



// false == o  => true

// false == '' => true

// 0 == '' => true 



// Nulish Coalescing Operator (??): null undefined

/*
let val1;
val1 = 5 ?? 10

console.log(val1);   // => 5 
*/


/*
let val1;
val1 = null ?? 10

console.log(val1);   // => 10
*/




/*
let val1;
val1 = null ?? 10 ?? 20

console.log(val1);   // => 10 
*/






// Terniary Operator 

/*
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log
("more than 80")      // => (less than 80)
*/



/*
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log
("more than 80")       // => (more than 80)
*/





