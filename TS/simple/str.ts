export { }
//Length:
// var uname = new String("Hello World") 
// console.log(uname) 
// console.log("Length "+uname.length) 

// String Method:
// 1.String charAt():
// var str = new String("This is string"); 
// console.log("str.charAt(0) is:" + str.charAt(0)); 
// console.log("str.charAt(1) is:" + str.charAt(1)); 
// console.log("str.charAt(2) is:" + str.charAt(2)); 
// console.log("str.charAt(3) is:" + str.charAt(3)); 
// console.log("str.charAt(4) is:" + str.charAt(4)); 
// console.log("str.charAt(5) is:" + str.charAt(5));

//2.String concat():
// var str1 = new String( "This is string one" ); 
// var str2 = new String( "This is string two" );
// var str3 = str1.concat(str2.toString())
// console.log(str1 + " -- " + str2)
// console.log("str1 + str2 : "+str3)

//3.String indexOf()
// var str1 = new String( "This is string one" ); 
 
// var index = str1.indexOf( "string" ); 
// console.log("indexOf found String :" + index );   

// var index = str1.indexOf( "one" ); 
// console.log("indexOf found String :" + index );

//4.lastindexof():
// var str1 = new String( "This is string one and again string" ); 
// var index = str1.lastIndexOf( "string" );
// console.log("lastIndexOf found String :" + index ); 
  
// index = str1.lastIndexOf( "one" ); 
// console.log("lastIndexOf found String :" + index );

//5.localeCompare
// var str1 = new String( "This is beautiful string" );
  
// var index = str1.localeCompare( "This is beautiful string");  

// console.log("localeCompare first :" + index );

// search():-
var re = /apples/gi; 
var strh = "Apples are round, and apples are juicy.";
if (strh.search(re) == -1 ) { 
   // console.log("Does not contain Apples" ); 
} else { 
   // console.log("Contains Apples" ); 
} 

// String Method Example:
//String Initialization  
let str1: string = 'Hello';  
let str2: string = 'JavaTpoint';  
//String Concatenation  
// console.log("Combined Result: " +str1.concat(str2));  
//String charAt  
// console.log("Character At 4: " +str2.charAt(4));  
//String indexOf  
// console.log("Index of T: " +str2.indexOf('T'));  
//String replace  
// console.log("After Replacement: " +str1.replace('Hello', 'Welcome to'));  
//String uppercase  
// console.log("UpperCase: " +str2.toUpperCase());  

// String Literal Type: Variable Assignment:
// type Pet = 'cat' | 'dog' | 'Rabbit';  
// let pet: Pet;  
// if(pet = 'cat'){  
//     console.log("Correct");  
// };  
// if(pet = 'Deer')  
// {  
//     console.log("compilation error");  
// };  

// Function Parameter:

type FruitsName = "Apple" | "Mango" | "Orange";  
function showFruitName(fruitsName: FruitsName): void {  
    console.log(fruitsName);  
}  
showFruitName('Mango');   //OK - Print 'Mango'  
//Compile Time Error  
showFruitName('Banana');  