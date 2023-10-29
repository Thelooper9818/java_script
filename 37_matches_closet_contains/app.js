let id1 = document.getElementById("id1"); //here we are getting the element with the id1 
console.log(id1);

//using matches function
//it is used to check if a css selector matches the given css selector
console.log(id1.matches(".class")); //as our element with id1 dont have a class named class so it will return false
console.log(id1.matches(".box")); //as element with id1 has a class named box so it will return true

let sp1 = document.getElementById("sp1");
//closest will return the nearest element or itself if it matches with the given css selector
console.log(sp1.matches("#sp1"));
console.log(sp1.closest("#sp1"));
console.log(sp1.closest(".box"));

//contains is used to check if one elemnt contains the given element
//if it contains the element then it will return true
//if it doesn't contains the element it will return false
console.log(sp1.contains(id1));
console.log(id1.contains(id1)); // if we check if a particular element contains itself then it will return true
console.log(id1.contains(sp1));