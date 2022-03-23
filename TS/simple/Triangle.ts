// /// <reference path = "IShape.ts" /> 
// namespace Drawing { 
//     export class Triangle implements IShape { 
//        public draw() { 
//           console.log("Triangle is drawn"); 
//        } 
//     } 
// }

// Triangle.ts 
import shape = require("./IShape"); 
export class Triangle implements shape.IShape { 
   public draw() { 
      console.log("Triangle is drawn (external module)"); 
   } 
}