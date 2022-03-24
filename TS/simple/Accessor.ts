export { }
// Accessor Method (Getter):USING CLASS
// class Person {

//     firstName;
//     lastName;
  
//     constructor(fn:string, ln:string) {
  
//       this.firstName = fn;
//       this.lastName = ln;
//     }
//   }
  
//   var p1 = new Person("John", "Doe");
//   console.log(p1.firstName + " " + p1.lastName);

  // Accessor Method (Getter):USING FUNCTION
//   class Person {

//     firstName;
//     lastName;
  
//     constructor(fn:string, ln:string) {
  
//       this.firstName = fn;
//       this.lastName = ln;
//     }
  
//     get fullName() {
  
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   var p1 = new Person("John", "Doe");
//   console.log(p1.fullName);


  //not allow to change value 
  /*class Person {

    firstName;
    lastName;
  
    constructor(fn:string, ln:string) {
  
      this.firstName = fn;
      this.lastName = ln;
    }
  
    get fullName() {
  
      return this.firstName + " " + this.lastName;
    }
  }
  
  var p1 = new Person("John", "Doe");
  
  // attempt to mutate class properties
//   p1.fullName = "John Wick";
  
  console.log(p1.fullName);*/

//   Mutator Method (Setter):
class Person {

    firstName;
    lastName;
  
    constructor(fn:string, ln:string) {
  
      this.firstName = fn;
      this.lastName = ln;
    }
  
    get fullName() {
  
      return this.firstName + " " + this.lastName;
    }
  
    set setLastName(newLastName:any) {
  
      this.lastName = newLastName;
    }
  }
  var p1 = new Person("John", "Doe");

  // mutate class property
  p1.setLastName = "Porter";
  
  console.log(p1.fullName);






// getter and setter:
let passcode = "secret passcode";  
  
class Student {  
    private _fullName!: string;  
  
    get fullName(): string {  
        return this._fullName;  
    }  
  
    set fullName(newName: string) {  
        if (passcode && passcode == "secret passcode 2") {  
            this._fullName = newName;  
        }  
        else {  
            // console.log("Unauthorized update of student detail! ");  
        }  
    }  
}  
  
let stud = new Student();  
stud.fullName = "Virat Kohli";  
if (stud.fullName) {  
    // console.log(stud.fullName);  
} 