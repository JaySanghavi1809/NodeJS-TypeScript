"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example: Union Type Variable
var val;
val = 12;
// console.log("numeric value of val " + val)
// val = "This is a string ";
// console.log("string value of val " + val)
let value;
value = 120;
// console.log("The Numeric value of a value is: " + value);
// value = "Welcome to JavaTpoint";
// console.log("The String value of a value is: " + value);
// Union Type and function parameter:
function disp(name) {
    if (typeof name == "string") {
        // console.log(name)
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            // console.log(name[i])
        }
    }
}
// disp("jk") 
// console.log("Printing names array....") 
disp(["Mark", "Tom", "Mary", "John"]);
// Union Type and Arrays
var arr;
// var i: number;
arr = [1, 2, 4];
// console.log("**numeric array**")  
// for (i = 0; i < arr.length; i++) {
//     //    console.log(arr[i]) 
// }
arr = ["Mumbai", "Pune", "Delhi"];
// console.log("**string array**")  
// for (i = 0; i < arr.length; i++) {
//     //    console.log(arr[i]) 
// }
// Passing Union Type to Arrays:
let arrType;
let i;
arrType = [1, 2, 3, 4];
// console.log("Numeric type array:")   
for (i = 0; i < arrType.length; i++) {
    // console.log(arrType[i])
}
arrType = ["India", "America", "England"];
console.log("String type array:");
for (i = 0; i < arrType.length; i++) {
    //    console.log(arrType[i]);  
}
const myColor = 'red';
console.log(myColor.toUpperCase());
