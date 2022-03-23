"use strict";
var tutorialPoint;
(function (tutorialPoint) {
    let invoiceApp;
    (function (invoiceApp) {
        class Invoice {
            caculateDiscount(price) {
                return price * .40;
            }
        }
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = tutorialPoint.invoiceApp || (tutorialPoint.invoiceApp = {}));
})(tutorialPoint || (tutorialPoint = {}));
