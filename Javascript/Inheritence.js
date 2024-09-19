class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`); 
    }
}

class Teacher extends User{
    constructor(username, email, paassword){
        super(username)
        this.email = email
        this.paassword = paassword
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const rahul = new Teacher("rahul", "rahul@gmail.com", "123")

rahul.logMe()             // => (SERNAME is rahul)

const royRahul = new User("royRahul")

royRahul.logMe()              // => (USERNAME is royRahul)

console.log(rahul === royRahul);       // => (false)

console.log(rahul instanceof Teacher);   // => (true)

console.log(rahul instanceof User);      // => (true)




