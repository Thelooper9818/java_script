let arr = [1 , 2, 200000 , 1000000000 , 1982];

console.log(arr);

let compare = (a,b) => {return b - a};

arr.sort((a,b) => {b-a});

console.log(arr);

for(let i = 0 ; i < arr.length ; i++)
{
    console.log(arr[i] , typeof arr[i]);
}