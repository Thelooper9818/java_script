let p1 = new Promise(( resolve , reject) => {
    setTimeout(()=>{
        resolve("Value 1");
    }, 10000);
});

let p2 = new Promise((resolve , reject) =>{
    setTimeout(() => {
        //resolve("Value 2");
        reject(new Error("error occured"));
    }, 2000);
});

let p3 = new Promise((resolve , reject) =>{
    setTimeout(()=>{
        resolve("Value 3");
    }, 3000);
}) ;

/*
p1.then((value) =>{
    console.log(value);
})

p2.then((value) =>{
    console.log(value);
})

p3.then((value) =>{
    console.log(value);
})
*/

//let promise_all = Promise.all([p1 , p2 , p3]); // it is executed when all promise get resolved
//let promise_all = Promise.allSettled([p1 , p2 , p3]); to show the resolved promise with error also
//let promise_all = Promise.race([p1 , p2 , p3]); //it will show the promise that is resolved first
let promise_all = Promise.any([p1 , p2 , p3]); // race will throw error if the earliest promise get rejected
//but Promise.any will return the value that is resolved first 
promise_all.then((value) =>{
    console.log(value);
});