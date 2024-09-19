/*
class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value
    }
}

const rahul = new user("rahulicai4@gmail.com", "abc")

console.log(rahul.email);         // => (rahulicai4@gmail.com)

console.log(rahul.password);      // => (12345)
*/






/*
class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}rahul`
    }

    set password(value) {
        this._password = value
    }
}

const rahul = new user("rahulicai4@gmail.com", "abc")

console.log(rahul.email);            // => (rahulicai4@gmail.com)

console.log(rahul.password);        // => (abcrahul)
*/








/*
class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password(){
        return `${this._password}rahul`
    }

    set password(value) {
        this._password = value
    }
}

const rahul = new user("rahulicai4@gmail.com", "roy")

console.log(rahul.email);      // => (RAHULICAI4@GMAIL.COM)

console.log(rahul.password);   // => (royrahul)   
*/










/*
// Previous time used(function => Getter and Setter) [Modern Method]
 
function User(email, password) {
    this._email = email;
    this._password = password
}

Object.defineProperty(this, "email", {
    get: function(){
        return this._email.toUpperCase()
    },

    set: function(value){
        this._email = value
    }
})

Object.defineProperty(this, "password", {
    get: function(){
        return this._password.toUpperCase()
    },

    set: function(value){
        this._password = value
    }
})

const rahul = new User("rahul12@gmail.com", "12345")

console.log(rahul._email);      // => (rahul12@gmail.com)

console.log(rahul._password);   // => (12345)
*/














// Previous time used(Object => Getter and Setter)


const User = {
    _email: "rahulroy@gmail.com",
    _password: "12345",

   
    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const kumar = Object.create(User)

console.log(kumar.email);           // => (RAHULROY@GMAIL.COM)







