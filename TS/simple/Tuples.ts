import { Console } from "console";

export { }
var mytuple = [10,"Hello"];
// mytuple[0] = 123
// mytuple[1] = 234
// console.log(mytuple[0])
// console.log(mytuple[1])

// Example: Empty Tuple:
var tap = []
tap[0] = 10
tap[1] = 20
// console.log(tap)

//Tuple Operations:
// var mytap = [10,"Hello","World","TypeScript"]
// console.log("Items before push :- "+mytap.length)

// mytap.push(20)
// console.log("Items after push :- "+mytap.length) 
// console.log("Items before pop "+mytap.length) 
// console.log(mytap)
// console.log(mytap.pop()+" popped from the tuple")
// console.log(mytap)
// console.log("Items after pop :- "+mytap.length) 

// Updating Tuples:
var mytuple = [10,"Hello","World","typeScript"]; 
// console.log("Tuple value at index 0 "+mytuple[0]) 
// console.log(mytuple)

//update a tuple element 
mytuple[0] = 121     
// console.log("Tuple value at index 0 changed to   "+mytuple[0])
// console.log(mytuple[0])

// Destructuring a Tuple
var a = [10, 'Hello']
var [b,c] = a;
// console.log(b)
// console.log(c)


let arrTuple = [101, "JavaTpoint", 105, "Abhishek"];  
// console.log(arrTuple[1]);  

//Accessing tuple Elements:
let empTuple = ["Rohit Sharma", 25, "JavaTpoint"];
// console.log(empTuple)  
// console.log("Name of the Employee is : "+empTuple [0]);  
// console.log("Age of the Employee is : "+empTuple [1]);  
// console.log(empTuple [0]+" is working in "+empTuple [2]); 

// Operations on Tuple:
// console.log("Operations on Tuple: ")
let empTuples = ["Rohit Sharma", 25, "JavaTpoint"];  
// console.log("Items: "+empTuples);  
// console.log("Length of Tuple Items before push: "+empTuples.length);   // returns the tuple size  
// empTuples.push(10001);   // append value to the tuple   
// console.log("Length of Tuple Items after push: "+empTuples.length);  
// console.log("Items: "+empTuples);  

// console.log("--------------------------------------------")
//The pop operation is used to remove an element from the tuple.
let empTuple1 = ["Rohit Sharma", 25, "JavaTpoint", 10001];  
// console.log("Items: "+empTuple1);  
// console.log("Length of Tuple Items before pop: "+empTuple1.length);   // returns the tuple size  
// empTuple.pop();   // removed value to the tuple   
// console.log("Length of Tuple Items after pop: "+empTuple1.length);  
// console.log("Items: "+empTuple1);  

// Update or Modify the Tuple Elements:
let emp = ["Rohit Sharma", 25, "JavaTpoint"];  
emp[1] = 30;  
// console.log("Name of the Employee is: "+emp [0]);  
// console.log("Age of the Employee is: "+emp [1]);  
// console.log(emp [0]+" is working in "+emp [2]);  

//Clear the fields of a Tuple:
let empTuple2 = ["Rohit Sharma", 25, "JavaTpoint"];  
empTuple2 = [];  
// console.log(empTuple2);  

let empTuple3 = ["Rohit Sharma", 25, "JavaTpoint"];  
let [emp1, student] = empTuple3;  
console.log(emp1);  
console.log(student);  

// Passing Tuple to Functions
//Tuple Declaration  
let empTuple5 = ["JavaTpoint", 101, "Abhishek"];     
//Passing tuples in function    
function display(tuple_values:any[]) {    
   for(let i = 0;i<empTuple5.length;i++) {     
      console.log(empTuple5[i]);    
   }      
}    
//Calling tuple in function    
display(empTuple5);  