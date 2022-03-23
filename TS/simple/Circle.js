"use strict";
// /// <reference path = "IShape.ts" /> 
// namespace Drawing { 
//     export class Circle implements IShape { 
//        public draw() { 
//           console.log("Circle is drawn"); 
//        }
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    draw() {
        console.log("Cirlce is drawn (external module)");
    }
}
exports.Circle = Circle;
