import { isParameter } from "typescript";

export { }
// Example: Optional Parameters:
function disp_details(id:number,name:string,mail_id?:string) { 
   //  console.log("ID:", id); 
   //  console.log("Name",name); 
    
    if(mail_id!=undefined)  {}
   //  console.log("Email Id",mail_id); 
 }

//  disp_details(123,"Jony")
//  disp_details(124,"Rony","rony@gmail.com")


 // Rest Parameters:
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
   //  console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

//  Default Parameters
function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
   //  console.log("Discount Amount: ",discount); 
 } 
 calculate_discount(1000) 
 calculate_discount(1000,0.30)


 //function defined : Returning Function
function greet():string { //the function returns a string 
    return "Hello World" 
 } 
 
 function caller() { 
    var msg = greet() //function greet() invoked 
   //  console.log(msg) 
 } 
 
 //invoke function 
 caller()

//  Parameterized a Function:
function test_param(n1:number,s1:string) { 
   //  console.log(n1) 
   //  console.log(s1) 
 } 
 test_param(123,"this is a string")

//  Parameter type Inference function
// var func = (x)=> { 
//     if(typeof x=="number") { 
//       //  console.log(x+" is numeric") 
//     } else if(typeof x=="string") { 
//       //  console.log(x+" is a string") 
//     }  
//  } 
//  func(12) 
//  func("Tom")

//  Function Overloads
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   // console.log(x); 
   // console.log(y); 
} 
disp(2,"abc") 
disp(1,"xyz");


function sum(num1:number,num2:number):number{
   return num1 + num2//set return type
}
// console.log(sum(10,20))

//rest operator
function myfunction(firstname:string, ...marks:number[]){
   // console.log(firstname)
   // console.log(marks.join(","))

}
// myfunction("jay",56,55,85,80)

// function dis(id:number,name:string,mail_id?:string) { 
//    console.log("ID:", id); 
//    console.log("Name",name); 
   
//    if(mail_id!=undefined)  
//    console.log("Email Id",mail_id); 
// }
// dis(123,"John");
// dis(111,"mary","mary@xyz.com");

// function cal(price:number,rate:number = 0.50) { 
//    var discount = price * rate; 
//    console.log("Discount Amount: ",discount); 
// } 
// cal(1000) 
// cal(1000,0.30)

// ES5: Without arrow function  
var getResult = function(username:any, points:any) {  
   return username + ' scored ' + points + ' points!';  
 };  
   
 // ES6: With arrow function  
 var getResult = (username: any, points: any): string => {  
   return ` ${ username } scored ${ points } : points!`;  
 }  
//  console.log(getResult("JAY","1025"))

class Student {  
   studCode: number;  
   studName: string;  
   constructor(code: number, name: string) {  
           this.studName = name;  
           this.studCode = code;  
   }  
   showDetail = () => console.log("Student Code: " + this.studCode + '\nStudent Name: ' + this.studName)  
}  
let stud = new Student(101, 'Abhishek Mishra');  
stud.showDetail();  
