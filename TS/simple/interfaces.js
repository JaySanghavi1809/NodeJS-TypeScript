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
let users = [
    {
        id: 1,
        name: "jay",
        email: "jayexample@gmail.com"
    },
    {
        id: 2,
        name: "rohan",
        email: "rohanexmple@gmail.com"
    },
];
//function based interfaces:
function addUser(user) {
    users.push(user);
}
function getUser(index) {
    return users[index];
}
addUser({ id: 2, name: "jaydeep", email: "jaydeep@gmail.com" });
// console.log(users)
console.log(getUser(0));
