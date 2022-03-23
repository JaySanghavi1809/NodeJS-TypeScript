"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var Person = {
//     firstName: "RONY",
//     lastname: "ROY"
// }
// console.log(Person)
// console.log("FirstName : " + Person.firstName)
// console.log("LastName : " + Person.lastname)
//Object create using function;
// var Person = {
//     firstName: "RONY",
//     lastname: "ROY",
//     sayHello:function(){}
// }
// Person.sayHello = function(){
//     console.log("Hello "+ Person.firstName)
// }
// Person.sayHello()
//Example: Objects as function parameters
// var Person = {
//     FirstName:"rohit",
//     LastName:"shah"
// }
// var invokeObject = function(obj: {FirstName:string,LastName:string}){
//     console.log("Firstname :" + obj.FirstName)
//     console.log("LastName :" + obj.LastName)
// }
// invokeObject(Person)
// Example: Anonymous Object
// var invokePerson = function(obj: {firstname:string, lastname:string}){
//     console.log("firstname : " +obj.firstname)
//     console.log("lastname : "+obj.lastname)
// }
// invokePerson({firstname:"Sachin",lastname:"Tendulkar"});
//Duck-typing:
// interface IPoint {
//     x: number
//     y: number
// }
// function AddPoints(p1:IPoint,p2:IPoint):IPoint {
//     var x = p1.x + p2.x
//     var y = p1.y + p2.y
//     return{x:x,y:y}
// }
// var NewPoint = AddPoints({x:3,y:6},{x:5,y:3})
// var NewPoint2 = AddPoints({x:5,y:2},{x:4,y:2})
// console.log(NewPoint)
// console.log(NewPoint2)
