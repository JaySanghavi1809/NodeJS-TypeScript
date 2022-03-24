"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(fullName, rollno) {
        this.fullName = fullName;
        this.rollno = rollno;
    }
    getinfo() {
        console.log(`full name: ${this.fullName}, roll Number: ${this.rollno}`);
    }
}
let str1 = new Student("jay", 101);
console.log(str1);
