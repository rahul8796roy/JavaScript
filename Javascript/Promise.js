/*
const promiseOne = new Promise(function(resolve, reject) {
    // do any async task
    // DB Calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');         // => (Async task is complete)
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed");                  // => (Promise consumed)
});
*/





/*
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");           // => (Async task 2)
        resolve()    
    }, 1000)

}).then(function(){
    console.log("Async 2 resolve");            // => (Async 2 resolve) 
})
*/




/*
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "rahulicai4@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);              // => { username: 'Chai', email: 'rahulicai4@gmail.com' }  
})
*/






/*
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "rahul", password: "123"})
        } else {
            reject('Error: Something went worng')
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username   
}).then((username) => {
     console.log(username);
}).catch(function(error){
     console.log(error);
}).finally(() => console.log("The promise is Finally resolve ya rejected "));
*/








/*
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false               // => { username: 'js', password: '123' }
        if (!error){
            resolve({username: "js", password: "123"})
        } else {
            reject('Error: Something went worng')
        }
    }, 1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive()
*/




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true              // => (code: 'ERR_UNHANDLED_REJECTION')
        if (!error){
            resolve({username: "js", password: "123"})
        } else {
            reject('Error: Something went worng')
        }
    }, 1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive()



async function getAllUsers(){
    try {
        const response = await fetech('https://jsonplaceholder.typicode.com//users')
        
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E ", error);  
    }
}



