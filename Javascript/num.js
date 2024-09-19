const score = 400
console.log(score);                // => 400

const balance = new Number(100)
console.log(balance);             // => [Number: 100]

console.log(balance.toString())         // => 100(string)
console.log(balance.toString().length)  // => 3

console.log(balance.toFixed(2));  // => (100.00)

const otherNumber = 123.8986
console.log(otherNumber.toPrecision(4));  // => (123.9)

const hundred = 100000
console.log(hundred.toLocaleString());  // => (1,00,000)



