/*
const user = {
    username: "rahul",
    loginCount: 8,
    signedIn: true,


   getUserDetails: function(){
    //console.log("Got user details from database");
    console.log(`Username: ${this.username}`);          // => (Username: rahul)    
    
   }


}

console.log(user.username);             // => (rahul)
console.log(user.getUserDetails());     // => (Got user details from database)
*/






function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

    const userOne = new User("rahul", 12, true);  // Use 'new' keyword with constructor function

    console.log(userOne);   // => [User { username: 'rahul', loginCount: 12, isLoggedIn: true }]





    