// abstract class Person {
//     name: string;
    
//     constructor(name: string) {
//         this.name = name;
//     }

//     display(): void{
//         console.log(this.name);
//     }

//     abstract find(string: string): Person;
// }

// class Employee extends Person { 
//     empCode: number;
    
//     constructor(name: string, code: number) { 
//         super(name); // must call super()
//         this.empCode = code;
//     }

//     find(name:string): Person { 
//         // execute AJAX request to find an employee from a db
//         return new Employee(name, 1);
//     }
// }

// let emp: Person = new Employee("James", 100);
// emp.display(); //James

// let emp2: Person = emp.find('Steve');

abstract class Person {
    abstract name: string;

    display(): void{
        console.log(this.name);
    }
}

class Employee extends Person { 
    name: string;
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(); // must call super()
        
        this.empCode = code;
        this.name = name;
    }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James