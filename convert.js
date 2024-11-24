function incToFeet (inch)
{
    const feet = inch / 12;
    return feet;
}


function incToFeet2 (inch){
    const feetFraction =inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft' + inchRemaining + 'inch';
    return result;

}

const shuvoHeight = incToFeet(75);
console.log(shuvoHeight);

const shuvoHeight2 = incToFeet2(75);
console.log(shuvoHeight2);


// Mile to Kilometer
function mileToKilometer (mile){
    const kilo = mile *1.60934;
    return kilo;
}
const mileTokilo =mileToKilometer(22);
console.log(mileTokilo,'Kilometer');


// Kg to Gram
function kiloToGram(kiloGram){
    const killoo = kiloGram * 1000;
    return killoo;
}
const convertMile =kiloToGram(22);
console.log(convertMile,'Mile');


// Kg to Ton
function kiloToTon(kiloTon){
    const killoton = kiloTon * 0.00110231;
    return killoton;
}
const convertTon =kiloToTon(22);
console.log(convertTon,'Ton');