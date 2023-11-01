
let d1 = document.getElementById("dot1");
let d2 = document.getElementById("dot2");
let d3 = document.getElementById("dot3");
let d4 = document.getElementById("dot4");

setInterval(() =>{
    d1.classList.toggle("dotLost");
    d2.classList.toggle("dotLost");
    d3.classList.toggle("dotLost");
    d4.classList.toggle("dotLost");

},500);





setInterval(()=>{

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();


    document.getElementById("hr").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;
},1000);