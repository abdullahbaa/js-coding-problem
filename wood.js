/**
 * Chair --> 3cft
 * table ---> 10Cft
 * Bed ---> 50cft
 */


function woodQuality(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const ChairTotalWood = chairQuantity * perChairWood; 
    const tableTotalWood =tableQuantity * perTableWood;
    const bedTotalWood =bedQuantity * perBedWood;


    const totalWood =ChairTotalWood +  tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuality(1,1,4);
console.log('Wood needed:',wood);

/**
 * Shirt price ----500Tk
 * Pant price ----> 300Tk
 * Shoe Price ---->900Tk
 */

function wearItems (shirtPrice,pantPrice, shoePrice){
    const perShirtPrice =500;
    const perPantPrice =300;
    const perShoePrice =900;

    const shirtTotalPrice = shirtPrice * perShirtPrice;
    const pantTotalPrice = pantPrice * perPantPrice;
    const shoeTotalPrice = shoePrice * perShoePrice;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalPrice;

}

const allPrices = wearItems(3,3,2);
console.log('Total Price:',allPrices,'Tk');