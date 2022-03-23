"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript - Classes
// Example: Declaring a class
class Car {
    constructor(engine) {
        this.engine = engine;
    }
    disp() {
        console.log("Engine is : " + this.engine);
    }
}
// var obj = new Car("XXSY1")
// console.log("Reading attribute value Engine as :  " + obj.engine);
// obj.disp();
// Example: Class Inheritance:
class Shape {
    constructor(a) {
        this.Area = a;
    }
}
class Circle extends Shape {
    disp() {
        console.log("Area of the Circle : " + this.Area);
    }
}
// var obj = new Circle(225)
// obj.disp()
class Root {
}
class Child extends Root {
}
class Leaf extends Child {
}
//  var obj = new Leaf(); 
//  obj.str ="hello" 
//  console.log(obj.str)
//  TypeScript ─ Class inheritance and Method Overriding:
class PrinterClass {
    doPoint() {
        console.log("doPoint() from Parent called…");
    }
}
class StringPrinter extends PrinterClass {
    doPrint() {
        super.doPoint();
        console.log("doPrint() is printing a string…");
    }
}
//  var obj = new StringPrinter() 
//  obj.doPrint()
// The static Keyword
class StaticMem {
    static disp() {
        console.log("The value of num is : " + StaticMem.num);
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
    constructor() {
        this.str = "Welcome To TypeScript";
        this.str2 = "JavaScript";
    }
}
class AgriLoan {
    constructor(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
}
var obj = new AgriLoan(10, 1);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate);
