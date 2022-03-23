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
// var grade:string = "A"; 
// switch(grade) { 
//    case "A": { 
//       console.log("Excellent"); 
//       break; 
//    } 
//    case "B": { 
//       console.log("Good"); 
//       break; 
//    } 
//    case "C": {
//       console.log("Fair"); 
//       break;    
//    } 
//    case "D": { 
//       console.log("Poor"); 
//       break; 
//    }  
//    default: { 
//       console.log("Invalid choice"); 
//       break;              
//    } 
// }

// if-else-if ladder:
let marks = 95;  
if(marks<50){  
    console.log("fail");  
}  
else if(marks>=50 && marks<60){  
    console.log("D grade");  
}  
else if(marks>=60 && marks<70){  
    console.log("C grade");  
}  
else if(marks>=70 && marks<80){  
    console.log("B grade");  
}  
else if(marks>=80 && marks<90){  
    console.log("A grade");  
}else if(marks>=90 && marks<100){  
    console.log("A+ grade");  
}else{  
    console.log("Invalid!");  
}  

// Switch case with String:
let grade: string = "A";  
switch (grade)  
{   
    case'A+':  
      console.log("Marks >= 90"+"\n"+"Excellent");  
      break;  
  
    case'A':  
      console.log("Marks [ >= 80 and <90 ]"+"\n"+"Good");  
      break;  
  
    case'B+':  
      console.log("Marks [ >= 70 and <80 ]"+"\n"+"Above Average");  
      break;  
  
    case'B':  
      console.log("Marks [ >= 60 and <70 ]"+"\n"+"Average");  
      break;  
  
    case'C':  
      console.log("Marks < 60"+"\n"+"Below Average");  
      break;  
  
    default:  
        console.log("Invalid Grade.");  
}  

// Switch Case with Enum:
enum Direction {  
   East,  
   West,  
   North,  
   South      
};  
var dir: DirectionDirection = Direction.North;  
 
function getDirection() {  
   switch (dir) {  
       case Direction.North: console.log('You are in North Direction');  
           break;  
       case Direction.East: console.log('You are in East Direction');  
           break;  
       case Direction.South: console.log('You are in South Direction');  
           break;  
       case Direction.West: console.log('You are in West Direction');  
           break;  
   }  
}  
getDirection();