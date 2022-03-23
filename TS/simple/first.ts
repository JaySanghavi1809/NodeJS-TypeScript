export { }
// function greeter(person) {  
//     return "Hello, " + person;  
// }  
// let user = 'JavaTpoint';  
// console.log(greeter(user));  

// function addNumbers(a, b) {  
//     return a + b;  
// }  
// var sum = addNumbers(" JavaTpoint ", 25);  
// console.log('Sum of the numbers is : ' + sum);

function geeter(person: string){
    return "Hello " + person
}

let user = "JavaTpoint";
console.log(geeter(user))

function AddNumbers(a:number,b:number){
    return a + b;
}

var sum = AddNumbers(25,25)
    console.log("sum of the numbers is : "+sum)
