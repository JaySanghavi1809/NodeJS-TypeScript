"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example: Optional Parameters:
function disp_details(id, name, mail_id) {
    //  console.log("ID:", id); 
    //  console.log("Name",name); 
    if (mail_id != undefined) { }
    //  console.log("Email Id",mail_id); 
}
//  disp_details(123,"Jony")
//  disp_details(124,"Rony","rony@gmail.com")
// Rest Parameters:
function addNumbers(...nums) {
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    //  console.log("sum of the numbers",sum) 
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//  Default Parameters
function calculate_discount(price, rate = 0.50) {
    var discount = price * rate;
    //  console.log("Discount Amount: ",discount); 
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//function defined : Returning Function
function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); //function greet() invoked 
    console.log(msg);
}
//invoke function 
caller();
//  Parameterized a Function:
function test_param(n1, s1) {
    //  console.log(n1) 
    //  console.log(s1) 
}
test_param(123, "this is a string");
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp(2, "abc");
disp(1, "xyz");
