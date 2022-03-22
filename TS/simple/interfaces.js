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
var Customer = {
    firstname: "Tom",
    lastname: "Hanks",
    sayhii: function () { return "Hi there"; }
};
// console.log("Customer Object ") 
// console.log(Customer.firstname) 
// console.log(Customer.lastname) 
// console.log(Customer.sayhii())  
var Employee = {
    firstname: "Jack",
    lastname: "Jill",
    sayhii: function () { return "Hello There"; }
};
var Options = { Programs: "TEST1", commandline: "Hello" };
// console.log(Options)
Options = { Programs: "test1", commandline: ["Hello", "World"] };
// console.log(Options.commandline[0]); 
// console.log(Options.commandline[1]);  
//commandline as a function expression 
Options = { Programs: "test1", commandline: function () { return "**Hello World**"; } };
var fn = Options.commandline;
var drummer = {};
drummer.age = 27;
drummer.instruments = "Drums";
var EmployeeInfo = {};
EmployeeInfo.name = "JAY SANGHAVI",
    EmployeeInfo.age = 26,
    EmployeeInfo.position = "NodeJS ";
EmployeeInfo.NameCompany = "Jnext Technologies",
    EmployeeInfo.location = "BHAVNAGAR";
var Feature = /** @class */ (function () {
    function Feature() {
    }
    Feature.prototype.getFeature1 = function () {
        // console.log('This is feature one.')
    };
    Feature.prototype.getFeature2 = function () {
        // console.log('This is feature two.')
    };
    return Feature;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.getCarFeature = function () {
        _super.prototype.getFeature1.call(this);
        _super.prototype.getFeature2.call(this);
    };
    return Car;
}(Feature));
var car = new Car();
car.getCarFeature();
