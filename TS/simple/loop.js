"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = 5;
var i;
var factorial = 1;
//for loop
for (i = num; i >= 1; i--) {
    factorial *= i;
}
// console.log(factorial)
//while loop
var num = 5;
var factorial = 1;
while (num >= 1) {
    factorial = factorial * num;
    num--;
}
// console.log("The factorial  is "+factorial)
// do…while
var n = 10;
do {
    // console.log(n)
    n--;
} while (n >= 0);
//while versus do..while
var n = 5;
while (n > 5) {
    console.log("Entered while");
}
do {
    console.log("Entered do…while");
} while (n > 5);
//Break statement 
var i = 1;
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("The first multiple of 5  between 1 and 10 is : " + i);
        break; //exit the loop if the first multiple is found 
    }
    i++;
} //outputs 5 and exits the loop
// The continue Statement:
var num = 0;
var count = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue;
    }
    count++;
}
console.log(" The count of odd values between 0 and 20 is: " + count); //outputs 10 
// The Infinite Loop
for (;;) {
    // console.log("This is an endless loop") 
}
while (true) {
    // console.log("This is an endless loop") 
}
