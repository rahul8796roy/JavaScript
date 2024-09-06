console.log(Math);  // => Object [Math] {}

console.log(Math.abs(-4));  // => 4

console.log(Math.round(8.3));  // => 8

console.log(Math.ceil(4.2));   // => 5

console.log(Math.floor(4.3));  // => 4

console.log(Math.min(4, 5, 8, 6, 2, 9));   // => 2

console.log(Math.max(8, 5, 7, 6, 3));    // => 8

console.log(Math.random());     // => (0 & 1 between)

console.log((Math.random()*10) + 1);  // => (always decimal into different value)

console.log(Math.floor(Math.random()*10) + 1); // => (always number into different value (1 to 9 )


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // => (Every time value 10 to 20 between but not decimal)

