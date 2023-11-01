/*
let bttn1 = document.getElementById("btn1");
let bttn2 = document.getElementById("btn2");
let bttn3 = document.getElementById("btn3");

let btn1Func = (e)=>{
    console.log(e);
    console.log(e.target);
    console.log("Button 1 clicked");
    alert("button 1 clicked");
}

let btn2Func = ()=>{
    alert("button 2 clicked");
}

let btn3Func = ()=>{
    alert("button 3 clicked");
}

bttn1.addEventListener("click" , btn1Func);
bttn2.addEventListener("click" , btn2Func);
bttn3.addEventListener("click" , btn3Func);
*/
let ele = document.getElementById("bulb1");

let i = 1;

let bulbToggle = ()=>{
    i++;
    if(i % 2 == 0)
    {
        ele.innerHTML = "BULB_ON";
    }
    else
    {
        ele.innerHTML = "BULB_OFF";
    }
    ele.classList.toggle("bulb_glow");
}


ele.addEventListener("click" , bulbToggle);
