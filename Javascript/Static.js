// Importing Static.js from the same directory
const Static = require('./Static');  // Adjust path if needed

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);  // Corrected string interpolation
    }

    createId() {             // => (static teacher used and another can not acces)
        return `123`;
    }
}

const rahul = new User("rahul");
//console.log(rahul.createId());     // => (123)


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "rahul12@gmail.com")

//iphone.logMe();                   // => (use static => Username: iphone)

console.log(iphone.createId());    // => (can not use static => 123)

