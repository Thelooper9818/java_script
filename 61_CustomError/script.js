try{
 let age = prompt("enter your age");
 age = Number.parseInt(age);

 /*
 if(age > 180)
 {
    throw new Error("Age is too big for Humans");
 }
 */
}
catch(error)
{
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log("i am finally and i am executed");
}

console.log("Script is still Running");

