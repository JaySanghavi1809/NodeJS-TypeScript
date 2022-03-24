export { }

class Student {
    fullName: string;
    rollno: number;

    constructor(fullName: string, rollno: number) {
        this.fullName = fullName;
        this.rollno = rollno;
    }
    getinfo(){
        console.log(`full name: ${this.fullName}, roll Number: ${this.rollno}`)
    }
}

let str1 = new Student("jay",101)
console.log(str1)