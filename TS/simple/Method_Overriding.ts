export { }
class Person{
    name!: string;
 
    eat():void{
        console.log(this.name+" eats when hungry.")
    }
}
 
class Student extends Person{
    // variables
    rollnumber:number;
 
    // constructors
    constructor(rollnumber:number, name1:string){
        super(); // calling Parent's constructor
        this.rollnumber = rollnumber
        this.name = name1
    }
 
    // functions
    displayInformation():void{
        console.log("Name : "+this.name+", Roll Number : "+this.rollnumber)
    }
 
    // overriding super class method
    eat():void{
        console.log(this.name+" eats during break.")
    }
}
 
var student1 = new Student(2, "Rohit")
 
student1.displayInformation()
student1.eat()
