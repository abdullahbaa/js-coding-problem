const phones =[
    {name: 'Samsung', price: 20000, camera :'12mp',color: 'black'},
    {name: 'xaomi', price: 21000, camera :'12mp',color: 'black'},
    {name: 'oppo', price: 10000, camera :'12mp',color: 'black'},
    {name: 'realme', price: 30000, camera :'12mp',color: 'black'},
    {name: 'motorola', price: 40000, camera :'12mp',color: 'black'},

];

function getCheapestPhone(phones){
    let min =phones[0];
    for (const phone of phones)
    {
        if(phone.price < min.price){
            min = phone;
        }
        // console.log(phone);
    }
    return min;
    // console.log(phones);
}
const cheap = getCheapestPhone(phones)
console.log('Cheapest phone is:', cheap);