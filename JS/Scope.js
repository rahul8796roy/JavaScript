/*
//var c = 300   // => global scope 

let a = 400

if (true) {        // => [block scope  is if() under]
    let a = 10;
    const b = 20
    var c = 30      // => (avoid the var method)
    console.log("INNER:", a)    // => INNER: 10
}

console.log(a);    // => 400

//console.log(b);
//console.log(c);
*/




/*
function one(){
    const username = "rahul"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);
    two()
}

one()
*/


/*
if(true) {
    const username = "rahul"
    if (username === "rahul") {
        const website = " youtube"
        console.log(username + website);   // => (rahul youtube)
    }
    // console.log(website)
}

//console.log(username)
*/




console.log(addone(5))    // => 6

function addone(num){
    return num + 1
}

//addTwo(5)
const addTwo = function(num){
    return num + 2
}
