"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Public:
// class Student {  
//     public studCode: any;  
//     studName: any;  
// }  
// let stud = new Student();  
// stud.studCode = 101;  
// stud.studName = "Joe Root";  
// console.log(stud.studCode+ " "+stud.studName);  
//Private:
// class Student {  
//     public studCode: number;  
//     private studName: string;  
//     constructor(code: number, name: string){  
//     this.studCode = code;  
//     this.studName = name;  
//     }  
//     public display() {  
//     return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);  
//     }  
//     }  
//     let student: Student = new Student(1, "JoeRoot");  
//     console.log(student.display()); 
//Protected:
class Student {
    constructor(code, name) {
        this.studCode = code;
        this.studName = name;
    }
}
class Person extends Student {
    constructor(code, name, department) {
        super(code, name);
        this.department = department;
    }
    getElevatorPitch() {
        return (`My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`);
    }
}
let joeRoot = new Person(1, "JoeRoot", "CS");
console.log(joeRoot.getElevatorPitch());
