// Filter function 

/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const newNums = myNums.filter( (num) => num > 4)

console.log(newNums);         // => [ 5, 6, 7, 8, 9, 10 ]
*/




/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const newNums = myNums.filter( (num) => {
    return num > 4
    //num > 4  (error)
})

console.log(newNums);         // => [ 5, 6, 7, 8, 9, 10 ]
*/






/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const newNums = myNums.filter( (num) => num < 5 )

console.log(newNums);            // => [ 1, 2, 3, 4 ]
*/







/*
const myNums = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] 

const newNums = myNums.filter( (num) => num < 500 )

console.log(newNums);            // => [ 100, 200, 300, 400 ]
*/







// other method [foreach loop => if(condition)]

/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
} )

console.log(newNums);             // => [ 5, 6, 7, 8, 9, 10 ]
*/







const books = [
    {tittle: 'Book One', genre: 'Fiction', publish: 1981, adition: 2004 },

    {tittle: 'Book Two', genre: 'Non-Fiction', publish: 1982, adition: 2008 },

    {tittle: 'Book Three', genre: 'History', publish: 1999, adition: 2007 },

    {tittle: 'Book Four', genre: 'Non-Fiction', publish: 1989, adition: 2010 },

    {tittle: 'Book Five', genre: 'Science', publish: 2009, adition: 2014 },

    {tittle: 'Book Six', genre: 'Fiction', publish: 1987, adition: 2010 },

    {tittle: 'Book Seven', genre: 'History', publish: 1986, adition: 1996 },

    {tittle: 'Book Eight', genre: 'Science', publish: 2011, adition: 2016 },

    {tittle: 'Book Nine', genre: 'Non-Fiction', publish: 1981, adition: 1989 },

    {tittle: 'Book Ten', genre: 'Fiction', publish: 1981, adition: 2004 },
];

/*
const userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks);      // => (2 time history all details print)
*/


/*
const userBooks = books.filter( (bk) => bk.genre === 'Fiction')

console.log(userBooks);      // => (3 time fiction all details print)
*/


/*
const userBooks = books.filter( (bk) => bk.genre === 'Non-Fiction')

console.log(userBooks);        // => (3 time Non-fiction all details print)
*/





/*
let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre ==='History'})

console.log(userBooks);   // (1 book print)
*/


/*
let userBooks = books.filter( (bk) => bk.genre === 'Fiction') 

userBooks = books.filter( (bk) => {
    return bk.publish >= 1980 } )

    console.log(userBooks);
*/  