"use strict";
exports.__esModule = true;
// Example: Union Type Variable
var val;
val = 12;
console.log("numeric value of val " + val);
val = "This is a string ";
console.log("string value of val " + val);
// Union Type and function parameter:
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
// disp("jk") 
console.log("Printing names array....");
disp(["Mark", "Tom", "Mary", "John"]);
// Union Type and Arrays
var arr;
var i;
arr = [1, 2, 4];
console.log("**numeric array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["Mumbai", "Pune", "Delhi"];
console.log("**string array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}