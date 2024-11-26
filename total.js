const numbers =[300,400, 700, 800];



const products =[
    {name: 'Shampoo', price: 300},
    {name: 'Chanachur', price: 200},
    {name: 'Biscuits', price: 100},
    {name: 'Shirt', price: 700},
    {name: 'Pant', price: 800},
];


function getShoppingTotal (products){
    let total =0;
    for(const product of products){
        total = total + product.price;
        // console.log(product);
    }
    return total;

}
const total = getShoppingTotal(products)
console.log(' ajker total khoroch',total);