

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


//the in-built hasOwnProperty property in objects
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
      if (
      userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));


  //function that calculates someone's bmi
      function bmiCalculation(a, b){
        let mass = a/(b**2)
        let finalBMI = Math.ceil(mass);
        return finalBMI;
    }
    
    function greaterThan(a,b){
        if(a > b){
            console.log("Mark's BMI is higher than John's");
        } else if (b > a){
            console.log("John's BMI is higher than Mark's");
        } else {
            console.log("John's BMI is equivalent to Mark's")
        }
    }
    
    //bmi for test case one
    let Mark = bmiCalculation(78,1.69);
    let John = bmiCalculation(92,1.95);
    
    //bmi for test case two
    let Mark2 = bmiCalculation(95,1.88);
    let John2 = bmiCalculation(85,1.76);

    //Answers for test one
    console.log("Mark's bmi is: ", bmiCalculation(78,1.69));
    console.log("John's bmi is: ", bmiCalculation(92,1.95));
    greaterThan(Mark,John);

    //Answers for test two
    console.log("Mark's second bmi is: ", bmiCalculation(95,1.88));
    console.log("John's second bmi is: ", bmiCalculation(85,1.76));
    greaterThan(Mark2,John2);