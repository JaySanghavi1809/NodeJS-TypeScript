export { }
// var  num:number = 5
// if (num > 0) { 
//    console.log("number is positive") 
// }

// var num = 5;
// if (num > 0) {
//    console.log("number is positive");
// }

//IF---ELSE:
var num:number = 12; 
if (num % 2==0) { 
//    console.log("Even"); 
} else {
//    console.log("Odd"); 
}

// IF--ELSE---ELSE--IF
var num:number = 2 
if(num > 0) { 
//    console.log(num+" is positive") 
} else if(num < 0) { 
//    console.log(num+" is negative") 
} else { 
//    console.log(num+" is neither positive nor negative") 
}

// Switch…case Statement
var grade:string = "A"; 
switch(grade) { 
   case "A": { 
      console.log("Excellent"); 
      break; 
   } 
   case "B": { 
      console.log("Good"); 
      break; 
   } 
   case "C": {
      console.log("Fair"); 
      break;    
   } 
   case "D": { 
      console.log("Poor"); 
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   } 
}