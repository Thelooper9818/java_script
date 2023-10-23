let b = document.body;

console.log("first child of B is " , b.firstChild);
console.log("First element child of B is " , b.firstElementChild);

function changeBg()
{
    document.body.firstElementChild.style.background = "red";
}