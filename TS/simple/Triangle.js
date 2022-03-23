"use strict";
// /// <reference path = "IShape.ts" /> 
// namespace Drawing { 
//     export class Triangle implements IShape { 
//        public draw() { 
//           console.log("Triangle is drawn"); 
//        } 
//     } 
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
class Triangle {
    draw() {
        console.log("Triangle is drawn (external module)");
    }
}
exports.Triangle = Triangle;
