export { }

// TypeScript - Classes
// Example: Declaring a class
class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine
    }


    disp(): void {
        console.log("Engine is : " + this.engine)

    }

}
// var obj = new Car("XXSY1")
// console.log("Reading attribute value Engine as :  " + obj.engine);
// obj.disp();

// Example: Class Inheritance:
class Shape{
    Area:number

    constructor(a:number){
        this.Area = a;
    }
}

class Circle extends Shape {
    disp():void{
        console.log("Area of the Circle : " + this.Area)
    }
}
// var obj = new Circle(225)
// obj.disp()


class Root { 
    // str:string; 
 } 
 
 class Child extends Root {} 
 class Leaf extends Child {} 
 
//  var obj = new Leaf(); 
//  obj.str ="hello" 
//  console.log(obj.str)
 
//  TypeScript ─ Class inheritance and Method Overriding:
class PrinterClass { 
    doPoint():void {
       console.log("doPoint() from Parent called…") 
    } 
 } 

 
class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPoint() 
       console.log("doPrint() is printing a string…")
    } 
 } 
 
//  var obj = new StringPrinter() 
//  obj.doPrint()

// The static Keyword
class StaticMem {  
    static num:number; 
    
    static disp():void { 
       console.log("The value of num is : "+ StaticMem.num) 
    } 
 } 
 
//  StaticMem.num = 12      
//  StaticMem.disp() 

// The instanceof operator:-
// class Person{ } 
// var obj = new Person() 
// var isPerson = obj instanceof Person; 
// console.log(" obj is an instance of Person " + isPerson);

//Data Hiding:
class Encapsulate { 
    str:string = "Welcome To TypeScript" 
    private str2:string = "JavaScript" 
 }
  
//  var obj = new Encapsulate() 
//  console.log(obj.str)     //accessible 
// console.log(obj.str2)   //compilation Error as str2 is private

// Classes and Interfaces:
interface ILoan { 
    interest:number 
 } 
 
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
 
 var obj = new AgriLoan(10,1) 
 console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )
