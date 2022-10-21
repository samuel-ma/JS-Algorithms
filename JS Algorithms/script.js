
let arr = [1,3,5];

function test(arr){
    let mul = 1;
    let i = 0;

    do {
        mul *= arr[i];
        i++;
    } while (i < arr.length);

    console.log(`The multiplication is ${mul}`);
}

test(arr);
