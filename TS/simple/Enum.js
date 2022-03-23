"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Numeric Enums:
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction)
//Enum as a function argument:
// enum AppStatus {
//     ACTIVE,
//     INACTIVE,
//     ONHOLD
// }
// function oncheckStatus(status:AppStatus):void {
//     console.log(status)
// }
// oncheckStatus(AppStatus.ONHOLD);  
//String Enums:
// enum AppStatus {  
//     ACTIVE = 'ACT',  
//     INACTIVE = 'INACT',  
//     ONHOLD = 'HLD',  
//     ONSTOP = 'STOP'  
// }  
// function checkStatus(status: AppStatus): void {  
//     console.log(status);  
// }  
// checkStatus(AppStatus.ONSTOP);  
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 1] = "Friday";
    Weekend[Weekend["Saturday"] = getDate('Dominoz')] = "Saturday";
    Weekend[Weekend["Sunday"] = Weekend.Saturday * 40] = "Sunday";
})(Weekend || (Weekend = {}));
function getDate(day) {
    if (day === 'Dominoz') {
        return 3;
    }
}
console.log(Weekend.Saturday);
console.log(Weekend.Sunday);
