"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    eat() {
        console.log(this.name + " eats when hungry.");
    }
}
class Student extends Person {
    // constructors
    constructor(rollnumber, name1) {
        super(); // calling Parent's constructor
        this.rollnumber = rollnumber;
        this.name = name1;
    }
    // functions
    displayInformation() {
        console.log("Name : " + this.name + ", Roll Number : " + this.rollnumber);
    }
    // overriding super class method
    eat() {
        console.log(this.name + " eats during break.");
    }
}
var student1 = new Student(2, "Rohit");
student1.displayInformation();
student1.eat();
