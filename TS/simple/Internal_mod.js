"use strict";
// module tutorialPoint {
//     export function add(x:number, y:number) { 
//         console.log(x + y)
//     }
//     add(10,20)
// }
var TutorialPoint;
(function (TutorialPoint) {
    function add(x, y) {
        console.log(x + y);
    }
    TutorialPoint.add = add;
    add(50, 60);
})(TutorialPoint || (TutorialPoint = {}));
