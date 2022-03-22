export { }

interface IPerson {
    firstname: string,
    lastname: string,
    sayhii: () => string
}

var Customer:IPerson = {
    firstname: "Tom",
    lastname: "Hanks",
    sayhii: () => {return "Hi there"}

}

// console.log("Customer Object ") 
// console.log(Customer.firstname) 
// console.log(Customer.lastname) 
// console.log(Customer.sayhii())  

var Employee:IPerson = {
    firstname: "Jack",
    lastname: "Jill",
    sayhii: () => {return"Hello There"}

}

// console.log("Employe Object ") 
// console.log(Employee.firstname) 
// console.log(Employee.lastname) 
// console.log(Employee.sayhii()) 

// Union Type and Interface:
interface RunOptions  {
    Programs:string;
    commandline:string[]|string|(()=>string); 
}

var Options:RunOptions = {Programs:"TEST1",commandline:"Hello"}
// console.log(Options)

Options = {Programs:"test1",commandline:["Hello","World"]}; 
// console.log(Options.commandline[0]); 
// console.log(Options.commandline[1]);  

//commandline as a function expression 
Options = {Programs:"test1",commandline:()=>{return "**Hello World**";}}; 

var fn:any = Options.commandline; 
// console.log(fn());

// Interfaces and Arrays
// interface namelist { 
//     [index:number]:string 
//  } 
 
//  var list2:namelist = ["John",1,"Bran"] 
//  interface ages { 
//     [index:string]:number 
//  } 
 
//  var agelist:ages; 
//  agelist["John"] = 15   
//  agelist[2] = "nine"

// Interfaces and Inheritance:
// Example: Simple Interface Inheritance

interface Person {
    age:number
}

interface Musician extends Person {
    instruments:string
} 

var drummer = <Musician>{};

drummer.age = 27;
drummer.instruments = "Drums"
// console.log("age : " + drummer.age)
// console.log("instruments : " + drummer.instruments)


interface Employee {
    name:string,
    age:number,
    position:string
}

interface Company extends Employee{
    NameCompany:string,
    location:string
}

var EmployeeInfo = <Company>{};
EmployeeInfo.name = "JAY SANGHAVI",
EmployeeInfo.age = 26,
EmployeeInfo.position = "NodeJS "


EmployeeInfo.NameCompany = "Jnext Technologies",
EmployeeInfo.location = "BHAVNAGAR"

// console.log("NAME : " + EmployeeInfo.name)
// console.log("AGE : " + EmployeeInfo.age)
// console.log("Profile : " + EmployeeInfo.position)


// console.log("Company : " + EmployeeInfo.NameCompany)
// console.log("City : " + EmployeeInfo.location)

// Example: Multiple Interface Inheritance:

interface IFeature1{
    getFeature1();
}

interface IFeature2{
    getFeature2();
}

class Feature implements IFeature1, IFeature2{

    getFeature1(){
        // console.log('This is feature one.')
    }

    getFeature2(){
        // console.log('This is feature two.')
    }
}

class Car extends Feature{

    getCarFeature(){

        super.getFeature1();
        super.getFeature2();
    }
}

let car = new Car();
car.getCarFeature();


