export { }
//Function with string type parameter  
function add(a:string, b:string): string;  
//Function with number type parameter  
function add(a:number, b:number): number;  

function add(a:any,b:any):any {
    return a + b
}

// console.log('Addition : ' + add("Hello ", "JavaTpoint"))
// console.log('Addition : ' + add(10,20))


//Function overloading in a class:
class A  
{  
    public foo(s: string): number;  
    public foo(n: number): string;  
    public foo(arg: any): any   
    {  
        if (typeof(arg) === 'number')  
            return arg.toString();  
        if (typeof(arg) === 'string')  
            return arg.length;  
    }  
}  
let obj = new A();  
console.log("Result: " +obj.foo(101));  
console.log("Length of String: " +obj.foo("JavaTpoint"));  