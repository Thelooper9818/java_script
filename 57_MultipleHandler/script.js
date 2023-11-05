
//creating a promise
let p1 = new Promise((resolve , reject) => {
    
    setTimeout(()=>{
        //alert("Hey i am not resolved");
        console.log("Hey i am not resolved");
        resolve(1);
    },2000);
})

//this is multiple chaining
p1.then(()=>{
    console.log("congratulations this promise is resolved");
}).then(()=>{
    console.log("Congrats");
}).then(()=>{
    console.log("nested promise using then statement");
})

// attaching mutiple handlers means assiging different tasks at the same time to the promise

p1.then((value)=>{
    let a = value * value + value;
    console.log(value);
    console.log(a);
})

p1.then(()=>{
    console.log("different handler");
})