function SetUsername(username){
    // complex db call
    this.username = username
    console.log("called");        
}


function createUser(username, email, password) {
    SetUsername.call(this, username)


    this.email = email
    this.password = password
}

const rahul = new createUser("rahul", "rahul@fb.com", "123")
console.log(rahul);

