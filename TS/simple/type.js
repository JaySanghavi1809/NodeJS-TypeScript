"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Number Data-Type:----
let first = 12.0; // number   
let second = 0x37CF; // hexadecimal  
let third = 0o377; // octal  
let fourth = 0b111001; // binary   
// console.log(first);           // 123  
// console.log(second);          // 14287  
// console.log(third);           // 255  
// console.log(fourth);          // 57 
//String DataType:----
let empName = "Rohan";
let empDept = "IT";
// Before-ES6  
let output1 = empName + " works in the " + empDept + " department.";
// After-ES6  
let output2 = `${empName} works in the ${empDept} department.`;
// console.log(output1);//Rohan works in the IT department.   
// console.log(output2);//Rohan works in the IT department.  
let isDone = false;
// console.log(isDone)
// Void:
function helloUser() {
    alert("This is a welcome message");
}
let tempNum = undefined;
// tempNum = null;      
// tempNum = 123;      //Error   
// Null
// let num: number = null;  
// let bool: boolean = null;   
// let str: string = null;  
// console.log(num)
// Undefined:
// let num: number = undefined;  
// let bool: boolean = undefined;  
// let str: string = undefined; 
// Any Type:
let val = 'Hi';
val = 555; // OK  
val = true; // OK     
// 
function ProcessData(x, y) {
    return x + y;
}
let result;
result = ProcessData("Hello ", "Any!"); //Hello Any!  
// result = ProcessData(2, 3); //5
// console.log(result)
// User-Defined DataType:
// Array
var alphas;
alphas = ["1", "2", "3", "4"];
// console.log(alphas[0]); 
// console.log(alphas[1]);
var list = [1, 3, 5];
// console.log(list[2])
var list = [1, 3, 5];
// console.log(list[2])
//tuple
var mytuple = [10, "Hello"]; //create a  tuple 
// console.log(mytuple[0]) 
// console.log(mytuple[1])
// Tuple Operations:
var mytuple = [10, "Hello", "World", "typeScript"];
// console.log("Items before push "+mytuple.length)    // returns the tuple size 
mytuple.push(12); // append value to the tuple 
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: () => { return "Hi there"; }
};
//  console.log("Customer Object ") 
//  console.log(customer.firstName) 
//  console.log(customer.lastName) 
//  console.log(customer.sayHi())  
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: () => { return "Hello!!!"; }
};
//  console.log("Employee  Object ") 
//  console.log(employee.firstName);
//  console.log(employee.lastName);
//classes
class Student {
    constructor(_RollNo, Name) {
        this.RollNo = _RollNo;
        this.Name = Name;
    }
    showDetails() {
        console.log(this.RollNo + " : " + this.Name);
    }
}
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c;
c = Color.Red;
// console.log(c)
// TypeScript and Object Orientation:
class Greeting {
    greet() {
        //    console.log("Hello World!!!") 
    }
}
var obj = new Greeting();
obj.greet();
//Generic:
function identity(arg) {
    return arg;
}
let student = {};
student.name = "Rohit"; // Correct  
student.code = 123; // Correct
