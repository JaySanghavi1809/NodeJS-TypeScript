"use strict";
// /// <reference path = "IShape.ts" />   
//          /// <reference path = "Circle.ts" /> 
//          /// <reference path = "Triangle.ts" />  
//          function drawAllShapes(shape:Drawing.IShape) { 
//             // shape.draw(); 
//          } 
//          drawAllShapes(new Drawing.Circle());
//          drawAllShapes(new Drawing.Triangle());
Object.defineProperty(exports, "__esModule", { value: true });
const circle = require("./Circle");
const triangle = require("./Triangle");
function drawAllShapes(shapeToDraw) {
    // shapeToDraw.draw(); 
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
