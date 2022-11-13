

//JAVASCRIPT FUNCTIONS

//GLOBAL VARIABLES
let arr = [1,2,3,4,11,22,33,44];
let arr2 = [[2,3,4,], [4,5,5,6], [9,8,3], [1,1,4]];
let x = 3;

//greater than ten function
function greaterThanTen(arr){

    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>10){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// greaterThanTen(arr)
console.log(greaterThanTen(arr));

//filter through an array
function filteredArray(arr, elem) {
    
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i].indexOf(elem) == -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// filteredArray(arr2, x);
console.log(filteredArray(arr2, x));


//the in-built delete function 
let obj = {
    name: "samuel",
    age: 22,
    surname: "majuk",
    year: 1999
}
//arr function in the console log
delete arr[0];
console.log(arr)

//obj function in the console log
delete obj.name
console.log(obj);

