"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
// console.log('Addition : ' + add("Hello ", "JavaTpoint"))
// console.log('Addition : ' + add(10,20))
//Function overloading in a class:
class A {
    foo(arg) {
        if (typeof (arg) === 'number')
            return arg.toString();
        if (typeof (arg) === 'string')
            return arg.length;
    }
}
let obj = new A();
console.log("Result: " + obj.foo(101));
console.log("Length of String: " + obj.foo("JavaTpoint"));
