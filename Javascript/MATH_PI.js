/*
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);
*/



/*
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);       // [ value: 3.141592653589793, writable: false,  enumerable: false, configurable: false]
*/




const chai =  {
    name: "greenTea",
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("chai nhi bni");
    }
}

//console.log(chai);            // => { name: 'greenTea', price: 250, isAvailable: true }

console.log(Object.getOwnPropertyDescriptor(chai, "name"));      // => [value: 'greenTea',  writable: true,  enumerable: true,  configurable: true]

//change property


Object.defineProperty(chai, "name", {
    // writable: false,
     enumerable: false,
})


console.log(Object.getOwnPropertyDescriptor(chai, "name"));    // => [value: 'greenTea', writable: false,  enumerable: false,  configurable: false ]

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);            
    }
}