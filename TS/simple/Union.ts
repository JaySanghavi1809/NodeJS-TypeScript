import { type } from "os";

export { }
// Example: Union Type Variable
var val: string | number
val = 12
// console.log("numeric value of val " + val)
// val = "This is a string ";
// console.log("string value of val " + val)

let value: number | string;
value = 120;
// console.log("The Numeric value of a value is: " + value);
// value = "Welcome to JavaTpoint";
// console.log("The String value of a value is: " + value);

// Union Type and function parameter:
function disp(name: string | string[]) {
    if (typeof name == "string") {
        // console.log(name)
    } else {
        var i;
        for (i = 0; i < name.length; i++) {
            // console.log(name[i])
        }
    }

}
// disp("jk") 
// console.log("Printing names array....") 
disp(["Mark", "Tom", "Mary", "John"])

// Union Type and Arrays
var arr: number[] | string[];
// var i: number;
arr = [1, 2, 4]
// console.log("**numeric array**")  

// for (i = 0; i < arr.length; i++) {
//     //    console.log(arr[i]) 
// }

arr = ["Mumbai", "Pune", "Delhi"]
// console.log("**string array**")  

// for (i = 0; i < arr.length; i++) {
//     //    console.log(arr[i]) 
// }

// Passing Union Type to Arrays:
let arrType:number[]|string[];   
let i:number;   
arrType = [1,2,3,4];  
// console.log("Numeric type array:")   

for(i=0;i<arrType.length; i++){
    // console.log(arrType[i])
}

arrType = ["India","America","England"];  
// console.log("String type array:")    
  
for(i = 0;i<arrType.length;i++){   
//    console.log(arrType[i]);  
}  

//The union can replace enums:
export type Color = 'red' | 'white' | 'blue';  
const myColor: Color = 'red';  
console.log(myColor.toUpperCase()); 