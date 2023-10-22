/*
let arr = [1, 2, 3];
console.log(arr);

let input = 1;


while(input !== 0)
{

    input = prompt("ENter the number");

    input = Number.parseInt(input);

    if(input == 0) break;

    arr.push(input);


    console.log(arr);
}


let arr = [10 , 20 , 35, 23 , 400 , 100];
 
let a = arr.filter((ele) => {
    return ele % 10 == 0;
})
console.log(arr);
console.log(a);
*/

let arr = [1,2, 3, 4,5];

let a = arr.reduce((ele1 , ele2 , ele3) => 
{   console.log(ele1, ele2 , ele3);
    return ele1 * ele2 * ele3;});

console.log(arr);
console.log(a);