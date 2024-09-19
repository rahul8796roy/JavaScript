// (Array under used foreach loop)

/*
const coding = ["js", "py", "cpp", "java", "ruby"]

coding.forEach( function (val){
    console.log(val);               // => (js,py,cpp,java,ruby)
})
*/


// Arrow function used method

/*
const coding = ["js", "py", "cpp", "java", "ruby"]

coding.forEach( (item) => {
    console.log(item);              // => (js,py,cpp,java,ruby)    
} )
*/


// printme function used method

/*
const coding = ["js", "py", "cpp", "java", "ruby"]

function printme(item){
    console.log(item);  
}

coding.forEach(printme)       // => (js,py,cpp,java,ruby)
*/




/*
const coding = ["js", "py", "cpp", "java", "ruby"]

coding.forEach( (item, index, arr) => {
    console.log(item, index,arr);         // => { js 0 [ 'js', 'py', 'cpp', 'java', 'ruby'], print all same follow}
} )
*/



/*
const myCoding = [
    {
        languageNmae: "java",
        languagefileName: "java"
    },
    
    {
        languageNmae: "javascript",
        languagefileName: "js"
    },
    
    {
        languageNmae: "python",
        languagefileName: "py"
    },  
]

myCoding.forEach( (item) => {
    console.log(item.languageNmae);          // => (java, javascript, python)
    
} )
*/





/*
const coding = ["js", "py", "cpp", "java", "ruby"]

const values = coding.forEach( (item) => {
     console.log(item);    
} )

console.log(values);            // => (js, py, cpp, java, ruby, undefined)
*/







// (foreach loop does not any value return)

/*
const coding = ["js", "py", "cpp", "java", "ruby"]

const values = coding.forEach( (item) => {
     console.log(item);
     return item   
} )

console.log(values);            // => (js, py, cpp, java, ruby, undefined)
*/




