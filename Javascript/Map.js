// (Map function assign to print unique value)

/*
const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('Fr', "France")

console.log(map);     // => Map(3) (same Object print every line) => {'IN' => 'INDIA', all}
*/




/*
const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('Fr', "France")

for (const key of map) {
    console.log(key);              // => Map(3) (same Array print every line) => [ 'IN', 'INDIA', all ]
    
}
*/





/*
const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('Fr', "France")

for (const [key,value] of map) {
    console.log(key, ':-', value);         // => [IN :- INDIA]
}
*/





/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => num +10 )

console.log(newNums);    // => [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
*/







// other method (scope open to return print)

/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => {return num +10 })      // => (without return value => error)

console.log(newNums);    // => [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
*/





/*
const myNums = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]

const newNums = myNums.map( (num) => num - 5 )

console.log(newNums);       // => [ 6, 17, 28, 39, 50, 61, 72, 83, 94, 95 ]
*/




/*
const myNums = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]

const newNums = myNums.map( (num) => num * 2)

console.log(newNums);       // => [22,  44,  66,  88, 110, 132, 154, 176, 198, 200]
*/






// chaining method 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums
               .map( (num) => num * 10)          // => [10, 20, 30, 40,  50, 60, 70, 80, 90, 100]
               .map( (num) => num + 1)           // => [11, 21, 31, 41,  51, 61, 71, 81, 91, 101]
               .filter( (num) => num >= 40)      // => [41, 51,  61, 71, 81, 91, 101]
               .filter( (num) => num <=50)       // => [ 41 ]

console.log(newNums)