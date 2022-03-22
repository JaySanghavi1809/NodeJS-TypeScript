"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// TypeScript - Classes
// Example: Declaring a class
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is : " + this.engine);
    };
    return Car;
}());
// var obj = new Car("XXSY1")
// console.log("Reading attribute value Engine as :  " + obj.engine);
// obj.disp();
// Example: Class Inheritance:
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the Circle : " + this.Area);
    };
    return Circle;
}(Shape));
// var obj = new Circle(225)
// obj.disp()
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child));
//  var obj = new Leaf(); 
//  obj.str ="hello" 
//  console.log(obj.str)
//  TypeScript ─ Class inheritance and Method Overriding:
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPoint = function () {
        console.log("doPoint() from Parent called…");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPoint.call(this);
        console.log("doPrint() is printing a string…");
    };
    return StringPrinter;
}(PrinterClass));
//  var obj = new StringPrinter() 
//  obj.doPrint()
// The static Keyword
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is : " + StaticMem.num);
    };
    return StaticMem;
}());
//  StaticMem.num = 12      
//  StaticMem.disp() 
// The instanceof operator:-
// class Person{ } 
// var obj = new Person() 
// var isPerson = obj instanceof Person; 
// console.log(" obj is an instance of Person " + isPerson);
//Data Hiding:
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "Welcome To TypeScript";
        this.str2 = "JavaScript";
    }
    return Encapsulate;
}());
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj = new AgriLoan(10, 1);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate);
