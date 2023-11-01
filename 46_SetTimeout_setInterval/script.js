/*
let a = setTimeout(()=>{
    alert("i am inside set timeout")
} , 2000);

console.log(a);

let b = prompt("Do you want to see the alert? (y/n)");

if('n' == b)
{
    clearTimeout(a); //this will clear the timeout and no more alert will be shown
}

console.log(a);

*/

const sum = (a,b,c ) => {
    document.write(`I am running after 3 seconds and sum is ${a + b + c}`);
    return (a + b + c);
}

let a  = setTimeout(sum , 3000 , 1 ,2, 3);//using setTimeout along with a fucntion which take parameters
console.log(a);//this will print the timer id
console.log(sum); //this sum is printing the whole function and not only the result

/* set interval is like an infinite while loop which will run after a fixed period of time
let d = setInterval(()=>{
    alert("i am set interval and i will run after 2 seconds everytime");
}, 2000);
//d gets the timeid of the setInterval
clearInterval(d); //clearinterval can be cancelled in the same way settimeout is cancelled
*/
