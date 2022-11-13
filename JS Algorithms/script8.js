

function mixedNumbers(arr) {
    // Only change code below this line
    let arr1 = "I"; 
    let arr2 = 2;
    let arr3 = "three";
    let arr4 = 7;
    let arr5 = "VIII"; 
    let arr6 = 9;
  
    arr.unshift(arr1,arr2,arr3);
    arr.push(arr4,arr5,arr6);
  
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
  
  