let a = document.getElementById("first");
//first.remove(); if we insert the remove this node then we will get nothing as no node is present

first.insertAdjacentHTML('beforebegin' , '<div  class = "test" >Hello i am beforebegin</div>');
a.insertAdjacentHTML('beforeend' , '<div class = "test" >Hello i am beforeend</div>');
a.insertAdjacentHTML('afterbegin' , '<div class = "test" >Hello i am afterBegin</div>');
a.insertAdjacentHTML('afterend' , '<div class = "test" >Hello i am afterEnd</div>');

//first.remove(); // if we remove it from here it means we removed the div with the id first
//so along with the div we will also remove the html that we inserted using afterbegin and beforend

