
//using the continue statement 
//using the for... in statement

let numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
let sum = 0;
let sum2 = 0;

for (let i in numbers){
    if (i%2==0) continue;
    sum += numbers[i];
}

console.log("The sum is: " + sum);

for (let i in numbers){
    sum2 += numbers[i];
    if (sum2 >= 100){
        break;
    }
}

console.log(sum2)

//using the switch statement
    function test(day) {
        switch (day) {
        case  "monday" : 
        day = 1;
        break
        
        case "tuesday" : 
        day = 2;
        break
        
        case "wednesday" : 
        day = 3;
        break
        
        case "thursday" :
        day = 4;
        break
        
        case "friday" : 
        day = 5;
        break
        
        case "saturday": 
        day = 6;
        break
        
        case "sunday":
        day =  7;
        break
        
        default : day = 'please enter a valid day';
        }
        return day;
    }

    //calling the function
    let day = "Monday"
    test(day);



    function test(day2) {
        switch (day2) {
          case  "monday" : return 1
          
          case "tuesday" : return 2
        
          case "wednesday" : return 3
         
          case "thursday" : return 4
         
          case "friday" : return  5
        
          case "saturday" : return  6
        
          case "sunday" : return  7
        
          default : return 'please enter a valid day'
        }
        }

    let day2 = "Monday"
    test(day2);
