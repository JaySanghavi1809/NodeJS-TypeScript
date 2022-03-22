export { }

// Accessing Array Elements
var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

//Array Object
var arr_names:number[] = new Array(4)  

for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
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
var j:any; 
var nums:number[] = [1001,1002,1003,1004] 

for(j in nums) { 
   console.log(nums[j]) 
} 

// Array method:---

// Array push()
// var numbers = new Array(1, 4, 9); 
// var length = numbers.push(10); 
// console.log("new numbers is : " + numbers );  
// length = numbers.push(20); 
// console.log("new numbers is : " + numbers );

//Array filter()
function isBigEnough(element, index, array) { 
    return (element >= 10); 
 } 
           
 var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
 console.log("Test Value : " + passed );

//  Array map()
 var numbers = [1, 4, 9]; 
var roots = numbers.map(Math.sqrt); 
console.log("roots is : " + roots );

//indexof()
var index = [12, 5, 8, 130, 44].indexOf(8); 
console.log("index is : " + index );

// lastindexof()
var index = [12, 5, 8, 130, 44].lastIndexOf(8); 
console.log("index is : " + index );