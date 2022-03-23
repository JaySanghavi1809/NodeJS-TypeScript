
// /// <reference path = "IShape.ts" />   
//          /// <reference path = "Circle.ts" /> 
//          /// <reference path = "Triangle.ts" />  
//          function drawAllShapes(shape:Drawing.IShape) { 
//             // shape.draw(); 
//          } 
//          drawAllShapes(new Drawing.Circle());
//          drawAllShapes(new Drawing.Triangle());

// TestShape.ts 
import shape = require("./IShape"); 
import circle = require("./Circle"); 
import triangle = require("./Triangle");  

function drawAllShapes(shapeToDraw: shape.IShape) {
   // shapeToDraw.draw(); 
} 

drawAllShapes(new circle.Circle()); 
drawAllShapes(new triangle.Triangle()); 


      