let arr = ["Narayan" , 98 , "Ankit" , 90 , {12 : "Paras"} , BigInt(100000000000000)];

//for converting arr into string
//let mod = arr.toString();

//for joining all the array elements
//join method will join all the elements of the array with the value that we put inside the bracket 
mod = arr.join("_");






console.log(mod);

for(let i = 0 ; i < arr.length ; i++)
{
    console.log(typeof arr[i] , arr[i]);
}
