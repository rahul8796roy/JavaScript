
/*
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);         // => (print 1 to 10)
    
}
*/



/*
for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element)         // => (print 0 to 10)
}
*/




/*
for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number")     // => (5 is best number)
    }
    //console.log(element);  
}
*/




/*
for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");        // => (5 is best number)
    }  
    console.log(element);                      // => (print 0 to 10)
}
*/



/*
for (let i = 0; i <=5; i++) {
    const element = i;
    if (element === 4) {
        console.log("4 is unique number");    // => (4 is unique number)
    }
    console.log(element);                     // => (print 0 to 5)
}
*/





/*
for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);      // => (Outer loop value 0 to 10 print)
    for (let j = 0; j <=10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);      // => (Inner loop value 10 times print) 
    }
}
*/





/*
for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);      // => (Outer loop value 0 to 10 print)
    for (let j = 0; j <=10; j++) {
    console.log(i + '*' + j + ' = ' + i*j );    // => [(0*0 to 0*10), (1*0 to 1*10), (10*0 to 10*10)]
    }
}
*/




/*
for (let x = 0; x <=5; x++) {
    console.log("3 is best number")   // => (3 is best number 5 times loop)
   for (let y = 0; y <=5; y++) {
    console.log("4 is bad number")    // => (4 is bad number 25 times loop)
   } 
    
}
*/





/*
for (let p = 1; p <5; p++) {
    const element = p;
    console.log(p);          // => (1,2,3,4)
    
}
*/



/*
for (let a = 0; a < 4; a++) {
    const element = a;
    console.log(element);     // => (0,1,2,3)
    
}
*/


/*
for (let x = 1; x <=5; x++) {
    const element = x;
    console.log("4 is good number");   // => (4 is good number is 5 time loop)
    
}
*/




/*
for (let x = 0; x <=5; x++) {
    const element = x;
    console.log("4 is good number");   // => (4 is good number is 6 time loop)
    
}
*/




/*
for (let b = 1; b <= 2; b++) {
    console.log("2 is good");       // => ( 2 is good 2 times loop)
    
   for (let c = 1; c <=2; c++) {
   console.log("4 is bad");         // => ( 4 is bad 4 times loop)

   }   
}
*/








/*
let myArray = ["A", "B", "C"]
console.log(myArray.length);      // => 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);           // => [A,B,C]
}
*/






/*
let myArray = ["A", "B", "C", "D"]
console.log(myArray.length);          // => 4

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);             // => [A,B,C,D]
}
*/







// break and continue 

/*
for (let index = 1; index <=20; index++) {
    
    console.log(`Value of i is ${index}`)      // => (print 1 to 20)
}
*/




/*
for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);       // => (print => 1,2,3,4, Detected 5)
        break
    }
    console.log(`Value of i is ${index}`);
}
*/





/*
for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);       // => (print => 1,2,3,4, Detected 5)
        continue                        // => (print 6 to 20)
    }
    console.log(`Value of i is ${index}`);
}
*/