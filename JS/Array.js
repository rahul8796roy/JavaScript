const myArr = [0, 1, 2, 3, 4, 5]

//myArr.push(7)  // => (insert the value 7)

//myArr.pop()   // => (last value removed)

//myArr.unshift(9)  // => (insert the value 9 will be first)

//myArr.shift()

//console.log(myArr);      // => [ 1, 2, 3, 4, 5 ]

//console.log(myArr.includes(9));   // => false
//console.log(myArr.indexOf(8));    // => (-1)


//const newArr =myArr.join()

//console.log(myArr);     // => [ 1, 2, 3, 4, 5 ]

//console.log(newArr);   // => 1,2,3,4,5

//console.log(typeof newArr);  // => string 


// slice,  splice 

console.log("A ", myArr); // => [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3)

console.log(myn1); //  => [ 1, 2 ]
console.log("B ", myArr);   // => [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3); 
console.log("c", myArr);   // => [ 0, 4, 5 ]
console.log(myn2);        //  => [ 1, 2, 3 ]





const A_book = ["A", "B", "C"]
const B_book = ["X", "Y", "Z"]

//A_book.push(B_book);

//console.log(A_book);    // => [ 'A', 'B', 'C', [ 'X', 'Y', 'Z' ] ]

//console.log(A_book[3][1]);  // => Y


//const allBook = A_book.concat(B_book)
//console.log(allBook);     // => [ 'A', 'B', 'C', 'X', 'Y', 'Z' ]


//const all_new_book = [...A_book, ...B_book]
//console.log(all_new_book);   // => [ 'A', 'B', 'C', 'X', 'Y', 'Z' ]



//const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]
//const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array); // => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


//console.log(Array.isArray("Rahul"))   // => false
//console.log(Array.from("Rahul")) // => [ 'R', 'a', 'h', 'u', 'l' ]



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // => [ 100, 200, 300 ]








