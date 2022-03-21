//variable:
// var box;
// console.log(typeof(box)); // undefined
// box = "Hello";
// console.log(typeof(box)); // string
// box = 100;
// console.log(typeof(box)); // number
// variable with function:
function demo(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
// getProduct():
//  const productInfo = getProduct(1);
// console.log(`The Product ${product.name} costs ${product.price}`)
//showProduct():

// var showProduct = function (name, price) {
//     console.log("The product ".concat(name, " costs ").concat(price, "$."));
// };
var product = demo(1);
showProduct(product.price, product.name);
