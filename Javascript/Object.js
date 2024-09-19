// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Rahul",
    "full name": "Rahul Kumar Roy",
    [mySym]: "mykey1",
    age: 24,
    loaction: "delhi",
    email: "rahulicai4@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym]) 

//console.table([{ name: JsUser.name, email: JsUser.email, age: JsUser.age}]);



JsUser.email = "rahul123@gmail.com"
//console.log(JsUser["email"])   // => rakesh123@gmail.com   

//Object.freeze(JsUser) // => (not change the email)
JsUser.email = "radha1234@gmail.com"
//console.log(JsUser); // => all print

JsUser.greating = function(){
    console.log("Hello JS User")
}

//console.log(JsUser.greating);  // => undefined

//console.log(JsUser.greating);   // => [Function (anonymous)]

//console.log(JsUser.greating());  // => [Hello JS User, undefined]


JsUser.greatingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greatingTwo());   // => [Hello JS User, Rahul, undefined]






// singleton (constructor)

//const tinderUser = new Object()   // => (sigleton Object)
//console.log(tinderUser);   // => {}

//const tinderUser = {}     // => (Non-Singleton Object)
//console.log(tinderUser);  // => {}


    const tinderUser = {}

    tinderUser.id = "123abc"
    tinderUser.name = "Rahul"
    tinderUser.isLoggedIn = false
    
    //console.log(tinderUser);   // => { id: '123abc', name: 'Rahul', isLoggedIn: false }
    
    
    
    const regularUser = {
          email: "rahul123@gmail.com",
          fullname: {
               userfullname: {
                    firstname: "Rahul",
                    lastname: "Roy"
               }
          }
    }
    
    //console.log(regularUser)    // => all print 
    
    //console.log(regularUser.fullname.userfullname.firstname)  // => Rahul
    
    
    const obj1 = {1: "a", 2: "b"}
    const obj2 = {3: "a", 4: "b"}
    
    //const obj3 = {obj1, obj2}
    //console.log(obj3)    // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
    
    //const obj3 = Object.assign({}, obj1, obj2)
    //console.log(obj3);      // => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
    
    
    //const obj3 = {...obj1[1], ...obj2}
    //console.log(obj3);         // => { '0': 'a', '3': 'a', '4': 'b' }
    
    
    
    
    //console.log(Object.keys(tinderUser));
    //console.log(Object.values(tinderUser));
    //console.log(Object.entries(tinderUser));
    
    //console.log(tinderUser.hasOwnProperty('isLoggedIn'));
    
    
    
    // Object Destructuring
    
    const course = {
         coursename: "Js in hindi",
         price: "999",
         courseInstructor: "Rahul"
    }
    
    // course.courseInstructor
    
    const {courseInstructor: instructor} = course
    
    //console.log(courseInstructor);
    console.log(instructor);
    