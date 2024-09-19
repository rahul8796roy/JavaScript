// ES6

/*
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

    
}

  const rahul = new User("rahul", "rahul123@gmail.com", "123")

  console.log(rahul.encryptPassword());           // => (123 + abc = 123abc)
  
  console.log(rahul.changeUsername());            // => (RAHUL)
*/
  





// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const rahul = new User("rahul", "rahul123@gmail.com", "123")

console.log(rahul.encryptPassword());           // => (123 + abc = 123abc)
  
console.log(rahul.changeUsername());            // => (RAHUL)
 