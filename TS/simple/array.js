"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Accessing Array Elements
var alphas;
alphas = ["1", "2", "3", "4"];
// console.log(alphas[0]); 
// console.log(alphas[1]);
//Array Object
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    // console.log(arr_names[i]) 
}
// Passing Arrays to Functions
// var names:string[] = new Array("Mary","Tom","Jack","Jill")  
// function disp(arr_names:string[]) {
//    for(var i = 0;i<arr_names.length;i++) { 
//       console.log(names[i]) 
//    }  
// }  
// disp(names)
// Array Traversal using for…in loop
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    // console.log(nums[j]) 
}
// Array method:---
// Array push()
// var numbers = new Array(1, 4, 9); 
// var length = numbers.push(10); 
// console.log("new numbers is : " + numbers );  
// length = numbers.push(20); 
// console.log("new numbers is : " + numbers );
//Array filter()
// function isBigEnough(element, index, array) { 
//     return (element >= 10); 
//  } 
//  var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
//  console.log("Test Value : " + passed );
//  Array map()
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// console.log("roots is : " + roots );
//indexof()
var index = [12, 5, 8, 130, 44].indexOf(8);
// console.log("index is : " + index );
// lastindexof()
var index = [12, 5, 8, 130, 44].lastIndexOf(8);
// console.log("index is : " + index );
/*Types of the array in TypeScript:
There are two types of an array:

Single-Dimensional Array
Multi-Dimensional Array*/
// 1.Single-Dimensional Array:
let arr;
arr = [1, 2, 3, 4];
// console.log("Array[0]: " +arr[0]);   
// console.log("Array[1]: " +arr[1]);  
//2.Multi-Dimensional Array:
var mArray = [[1, 2, 3], [5, 6, 7]];
// console.log(mArray[0][0]);  
// console.log(mArray[0][1]);  
// console.log(mArray[0][2]);  
// console.log();  
// console.log(mArray[1][0]);  
// console.log(mArray[1][1]);  
// console.log(mArray[1][2]); 
// Array Object:
//array by using the Array object. 
// let arr1:string[] = new Array("JavaTpoint","2200","10","Abhishek")
// for(var i = 0; i<arr1.length; i++ ){
//    console.log(arr1[i])
// }
// Array Traversal by using a for...in loop:
let m;
let arr2 = ["JavaTpoint", "2300", "Java", "Abhishek"];
for (m in arr) {
    // console.log(arr[m])   
}
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
//Create new array from existing array  
let copyArray = [...arr3];
console.log("CopiedArray: " + copyArray);
//Create new array from existing array with more elements  
let newArray = [...arr3, 7, 8];
console.log("NewArray: " + newArray);
//Create array by merging two arrays  
let mergedArray = [...arr3, ...arr4];
console.log("MergedArray: " + mergedArray);
