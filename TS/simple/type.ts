export { }
// Number Data-Type:----


let first: number = 12.0;             // number   
let second: number = 0x37CF;          // hexadecimal  
let third: number = 0o377 ;           // octal  
let fourth: number = 0b111001;        // binary   
  
// console.log(first);           // 123  
// console.log(second);          // 14287  
// console.log(third);           // 255  
// console.log(fourth);          // 57 

//String DataType:----
let empName: string = "Rohan";   
let empDept: string = "IT";   
  
// Before-ES6  
let output1: string = empName + " works in the " + empDept + " department.";   
  
// After-ES6  
let output2: string = `${empName} works in the ${empDept} department.`;   
  
// console.log(output1);//Rohan works in the IT department.   
// console.log(output2);//Rohan works in the IT department.  


let isDone: boolean = false;  
// console.log(isDone)


// Void:
function helloUser(): void {  
    alert("This is a welcome message");  
    } 
     

let tempNum: void = undefined;  
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
let val: any = 'Hi';  
      val = 555;   // OK  
      val = true;   // OK     
     

// 




function ProcessData(x: any, y: any) {  
    return x + y;  
}  
let result: any;  
result = ProcessData("Hello ", "Any!"); //Hello Any!  
// result = ProcessData(2, 3); //5
// console.log(result)

// User-Defined DataType:
// Array
var alphas:string[]; 
alphas = ["1","2","3","4"] 
// console.log(alphas[0]); 
// console.log(alphas[1]);
var list : number[] = [1, 3, 5];  
// console.log(list[2])

var list : Array<number> = [1, 3, 5];
// console.log(list[2])

//tuple
var mytuple = [10,"Hello"]; //create a  tuple 
// console.log(mytuple[0]) 
// console.log(mytuple[1])

// Tuple Operations:
var mytuple = [10,"Hello","World","typeScript"]; 
// console.log("Items before push "+mytuple.length)    // returns the tuple size 

mytuple.push(12)                                    // append value to the tuple 
// console.log("Items after push "+mytuple.length) 
// console.log("Items before pop "+mytuple.length) 
// console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
  
// console.log("Items after pop "+mytuple.length)

// Interface

interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
//  console.log("Customer Object ") 
//  console.log(customer.firstName) 
//  console.log(customer.lastName) 
//  console.log(customer.sayHi())  
 
 var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
//  console.log("Employee  Object ") 
//  console.log(employee.firstName);
//  console.log(employee.lastName);


//classes
class Student  
{  
    RollNo: number;  
    Name: string;   
    constructor(_RollNo: number, Name: string)   
    {  
        this.RollNo = _RollNo;  
        this.Name = Name;  
    }  
    showDetails()  
    {  
        // console.log(this.RollNo + " : " + this.Name);  
    } 
     
}

// Enums
enum Color {  
    Red, Green, Blue  
};  
let c: Color;  
c = Color.Red; 
// console.log(c)

// TypeScript and Object Orientation:
class Greeting { 
    greet():void { 
    //    console.log("Hello World!!!") 
    } 
 } 
 var obj = new Greeting(); 
 obj.greet();
 
 //Generic:
 function identity<T>(arg: T): T {  
    return arg;  
}  
// var one = identity<string>("myString");  
// var two = identity<number>( 100 );  
// var three = identity<Boolean>(true );  
// console.log(one)
// console.log(three)
// let Bike = { Company1: 'Honda',
//              Company2: 'Hero',
//              Company3: 'Royal Enfield'
//            };
// delete Bike.Company3;
// console.log(Bike);   // 

// let arr = [1, 2, 3];
// console.log( arr instanceof Array ); // true
// console.log( arr instanceof String ); // false



interface Student {   
    name: string;   
    code: number;   
}  
let student = <Student> { };   
student.name = "Rohit"; // Correct  
student.code = 123; // Correct


let isDialogOpen: boolean = true;
let marks:number = 100;
let myname:string = "jay";
let fullName:string = `my name is ${myname}`
let user:object = {
    name:"jay sanghavi",
    state:"gujarat"
};

let names:string[] = ["jay","rohan","rahul"]
let xyz:number[] = [111,222,333];
// generics:
let fruites:Array<string> = ["Mango","Apple"];
console.log(user)

//tuple:
let user1:[string,number] = ["jay",20];

// void: they not allow to  return value 
function sayHello():void{
    console.log("Good morning")
    //return "hello"
}
sayHello()

let z:unknown = 111;
z=true;
z= "jay"
//diff unknow and any:
let a:unknown = "jay";
// a.rk() //trow error
let b:any = "rk";
b.mk() //not error
