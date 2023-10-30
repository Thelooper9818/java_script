let a = document.getElementById("first");

a.className = "red"; //this is used to add these classes to the selected element and removing all the previous classes

console.log(a.classList); //this will show us all the classes which is applied to the element

a.classList.add("yellow"); // this will add a new class to the element along with other classes
console.log(a.classList);

a.classList.remove("red") ; //this will remove this particular class from the element
console.log(a.classList);

a.classList.toggle("text-dark"); // it will add the class if it isn't present
console.log(a.classList);

//if present it will remove the class 
//toggle works as a switch 

let ans = a.classList.contains("purple"); //it will check if a particular class is present or not

console.log(ans);