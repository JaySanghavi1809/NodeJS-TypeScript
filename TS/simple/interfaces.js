"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = {
    firstname: "Tom",
    lastname: "Hanks",
    sayhii: () => { return "Hi there"; }
};
// console.log("Customer Object ") 
// console.log(Customer.firstname) 
// console.log(Customer.lastname) 
// console.log(Customer.sayhii())  
var Employee = {
    firstname: "Jack",
    lastname: "Jill",
    sayhii: () => { return "Hello There"; }
};
var Options = { Programs: "TEST1", commandline: "Hello" };
// console.log(Options)
Options = { Programs: "test1", commandline: ["Hello", "World"] };
// console.log(Options.commandline[0]); 
// console.log(Options.commandline[1]);  
//commandline as a function expression 
Options = { Programs: "test1", commandline: () => { return "**Hello World**"; } };
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
class Feature {
    getFeature1() {
        // console.log('This is feature one.')
    }
    getFeature2() {
        // console.log('This is feature two.')
    }
}
class Car extends Feature {
    getCarFeature() {
        super.getFeature1();
        super.getFeature2();
    }
}
let car = new Car();
car.getCarFeature();
