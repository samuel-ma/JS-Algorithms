
/*
    WORKING WITH WHILE LOOPS
*/


//using a while loop to add numbers in an array
let arr = [1, 2, 3, 4, 5];
let i = 0;
let sum = 0;

while (i < arr.length){
    sum += arr[i];
    i++;
}

console.log("The sum of numbers in the array is " + sum);

function test(params){
    let sum = 0;
    let i = 0;

    while (i < params.length){
        sum += params[i];
        i++;
    }

    return sum;
}

console.log(test(arr));