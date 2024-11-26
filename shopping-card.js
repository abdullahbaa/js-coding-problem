const products =[
    {name: 'Shampoo', price: 300 ,quantity:2 },
    {name: 'Chanachur', price: 200,quantity:3 },
    {name: 'Biscuits', price: 100,quantity: 5},
    {name: 'Shirt', price: 700,quantity:7},
    {name: 'Pant', price: 800,quantity:8},
];

function cartTotal (products){
    let total =0;
    for (const product of products){
        const thisProductCost = product.price * products.quantity;
        total = total + thisProductCost;
        // console.log(product);
    }
    return total;
}
const shoppingCost = cartTotal(products)
console.log(shoppingCost);