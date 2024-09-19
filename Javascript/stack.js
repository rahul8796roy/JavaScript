// stack(primitive), Heap(Non-Primitive)

let myyoutubename = "rahulkumar"

let anothername = "myyoutubename"
anothername = "coding"

console.log(myyoutubename); // => rahulkumar
console.log(anothername);   // => coding 


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "rahul@google.com"

console.log(userOne.email);
console.log(userTwo.email);
