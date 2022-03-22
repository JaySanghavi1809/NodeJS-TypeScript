export { }
// Number Data-Type:----
var first = 12.0; // number   
var second = 0x37CF; // hexadecimal  
var third = 255; // octal  
var fourth = 57; // binary   
// console.log(first);           // 123  
// console.log(second);          // 14287  
// console.log(third);           // 255  
// console.log(fourth);          // 57 
//String DataType:----
var empName = "Rohan";
var empDept = "IT";
// Before-ES6  
var output1 = empName + " works in the " + empDept + " department.";
// After-ES6  
var output2 = "".concat(empName, " works in the ").concat(empDept, " department.");
// console.log(output1);//Rohan works in the IT department.   
// console.log(output2);//Rohan works in the IT department.  
var isDone = false;
// console.log(isDone)
// Void:
function helloUser() {
    alert("This is a welcome message");
}
var tempNum = undefined;
tempNum = null;
// tempNum = 123;      //Error   
// Null
var num = null;
// let bool: boolean = null;   
// let str: string = null;  
// console.log(num)
// Undefined:
// let num: number = undefined;  
// let bool: boolean = undefined;  
// let str: string = undefined; 
// Any Type:
var val = 'Hi';
val = 555; // OK  
val = true; // OK          
// 
function ProcessData(x, y) {
    return x + y;
}
var result;
result = ProcessData("Hello ", "Any!"); //Hello Any!  
// result = ProcessData(2, 3); //5
// console.log(result)
// User-Defined DataType:
// Array
var alphas;
alphas = ["1", "2", "3", "4"];
// console.log(alphas[0]); 
// console.log(alphas[1]);
//tuple
var mytuple = [10, "Hello"]; //create a  tuple 
// console.log(mytuple[0]) 
// console.log(mytuple[1])
// Tuple Operations:
var mytuple = [10, "Hello", "World", "typeScript"];
// console.log("Items before push "+mytuple.length)    // returns the tuple size 
mytuple.push(12); // append value to the tuple 
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
//  console.log("Customer Object ") 
//  console.log(customer.firstName) 
//  console.log(customer.lastName) 
//  console.log(customer.sayHi())  
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
//  console.log("Employee  Object ") 
//  console.log(employee.firstName);
//  console.log(employee.lastName);
//classes
var Student = /** @class */ (function () {
    function Student(_RollNo, Name) {
        this.RollNo = _RollNo;
        this.Name = Name;
    }
    Student.prototype.showDetails = function () {
        console.log(this.RollNo + " : " + this.Name);
    };
    return Student;
}());
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c;
c = Color.Red;
// console.log(c)
// TypeScript and Object Orientation:
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
