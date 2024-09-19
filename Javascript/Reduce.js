/*
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval
}, 0)

console.log(myTotal);

// Run =>

        // => acc: 0 and currval: 1
        // => acc: 1 and currval: 2
        // => acc: 3 and currval: 3
        // => 6
*/





/*
const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);         // => 6
*/




const shoopingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "C++ course",
        price: 4999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "py course",
        price: 1999
    },
]

const priceToPay = shoopingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);        // => (13996)


