
//using the for... in loop
let arr = [1,2,3,4,5];
let sum = 0;

for (let i in arr){
    sum += arr[i];
}

console.log("The sum is: " + sum);

//using the for... of loop
let numbers = [1,2,3,4,5];
let sum2 = 0;

for (let j of numbers){
    sum2 += j;
}

console.log("The second sum is: " + sum2);

//Using the For Loop, write a function named "test"
//returns an array with the power (or exponent) of its elements

let arr2 = [2,4];

function test(arr){
    let exp = 0;

    for(let i=0; i<arr.length; i++){
        exp = arr[i] * arr[i];
    }
    return exp;
}

test(arr2);
