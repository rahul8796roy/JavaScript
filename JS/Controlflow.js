// controlflow statement (<, >, <=, >=, ==, !=, !==, ====)

//const isUserloggedIn = true;

/*
if( 2 == "2") {
    console.log("executed");           // => (executed)
}
*/


/*
if( 2 === "2") {
    console.log("executed");       // => (not executed)
}
*/


/*
if( 2 != 3) {
    console.log("executed");          // => (executed)
}
*/




/*
const temperature = 41

if(temperature === 41) {
    console.log("less than 50");     // => (less than 50)
} else {
    console.log("temperature is greater than 50");
}

console.log("Executed");       // => (always executed)
*/




/*
const temperature = 40

if(temperature === 41) {
    console.log("less than 50");  
} else {
    console.log("temperature is greater than 50");      // => (temperature is greater than 50)
}

console.log("Executed");       // => (always executed)
*/
  


/*
const score = 200

if(score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);        // => (User power: fly)
}
*/




/*
const score = 200

if(score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);    // => [this time is not executed => (error)]
*/




// Nested Method (multiple condition check)

/*
const balance = 1000

if (balance < 500) {
    console.log("less than 500");

} else if (balance < 750) {
    console.log("less than 750");

} else if (balance <900) {
    console.log("less than 900");

} else {
    console.log("less than 1200");      // => (less than 1200)
}
*/



/*
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");       // => (Allow to buy course)
}
*/




/*
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");        // => (Allow to buy course)
}
*/





/*
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");       //=> (not executed)
}
*/


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");              // => (User logged in)
}








