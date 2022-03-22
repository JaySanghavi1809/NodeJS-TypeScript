export { }
var mytuple = [10,"Hello"];
// mytuple[0] = 123
// mytuple[1] = 234
console.log(mytuple[0])
console.log(mytuple[1])

// Example: Empty Tuple:
var tap = []
tap[0] = 10
tap[1] = 20
console.log(tap)

//Tuple Operations:
// var mytap = [10,"Hello","World","TypeScript"]
// console.log("Items before push :- "+mytap.length)

// mytap.push(20)
// console.log("Items after push :- "+mytap.length) 
// console.log("Items before pop "+mytap.length) 
// console.log(mytap)
// console.log(mytap.pop()+" popped from the tuple")
// console.log(mytap)
// console.log("Items after pop :- "+mytap.length) 

// Updating Tuples:
var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Tuple value at index 0 "+mytuple[0]) 
console.log(mytuple)

//update a tuple element 
mytuple[0] = 121     
console.log("Tuple value at index 0 changed to   "+mytuple[0])
// console.log(mytuple[0])

// Destructuring a Tuple
var a = [10, 'Hello']
var [b,c] = a;
console.log(b)
console.log(c)
