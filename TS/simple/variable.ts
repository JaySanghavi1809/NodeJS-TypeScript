export { }
//variable:

// var box;
// console.log(typeof(box)); // undefined

// box = "Hello";
// console.log(typeof(box)); // string

// box = 100;
// console.log(typeof(box)); // number


// variable with function:
// function demod(id){
//     return {
//         id:id,
//         name:`Awesome Gadget ${id}`,
//         price:99.5
//     }
// } 

// getProduct():
//  const productInfo = getProduct(1);
// console.log(`The Product ${product.name} costs ${product.price}`)

//showProduct():

// var showProduct = (name, price)  => {
//     console.log(`The product ${name} costs ${price}$.`);
//   };
 
// var product = demo(1);
// showProduct(product.price, product.name);


// How Typescript solves the problems of dynamic types:
interface Product{
    id: number,
    name: string,
    price: number
};

// function getProduct(id) : Product{
//     return {
//       id: id,
//       name: `Awesome Gadget ${id}`,
//       price: 99.5
//     }
//   }

  


