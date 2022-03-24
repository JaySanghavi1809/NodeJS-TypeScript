export { }

// class Car {   
//     Color:string     
//     constructor(color:string) {   
//        this.Color = color  
//     }   
//  }   
//  class Audi extends Car {   
//      Price: number  
//      constructor(color: string, price: number) {  
//          super(color);  
//          this.Price = price;  
//      }  
//      display():void {  
//          console.log("Color of Audi car: " + this.Color);  
//          console.log("Price of Audi car: " + this.Price);  
//      }  
//  }  
//  let obj = new Audi(" Black", 8500000 );  
//  obj.display();

//Single Inheritance:
// class Shape {   
//     Area:number   
//     constructor(area:number) {   
//        this.Area = area  
//     }   
//  }   
//  class Circle extends Shape {   
//     display():void {   
//        console.log("Area of the circle: "+this.Area)   
//     }   
//  }  
//  var obj = new Circle(320);   
//  obj.display()  

// Multilevel Inheritance:
class Animal {   
    eat():void {   
        console.log("Eating")   
     }   
}   
class Dog extends Animal {   
   bark():void {   
      console.log("Barking")   
   }   
}  
class BabyDog extends Dog{   
    weep():void {   
        console.log("Weeping")   
     }  
}  
let obj = new BabyDog();   
obj.eat();  
obj.bark();  
obj.weep()