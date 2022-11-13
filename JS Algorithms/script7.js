// Using a function test(), write a for loop that returns
// an array with the power(or exponent) of its elements. 

let arr = [1, 2, 3, 4, 5];
// newArray = [1,4,9,16,25];

function test(arr){
    let newArray = [];

    //for loop declarations
    for (let i = 0; i < arr.length; i++){
        let result = arr[i] * arr[i];
        newArray.push(result)
    }
    return newArray;
}

test(arr);
console.log(test(arr));
