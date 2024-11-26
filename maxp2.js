const Khadiza = 56;
const Abdullah =50;
if (Khadiza > Abdullah){
    console.log('Khadiza will get the strawberry');
}
else{
    console.log('Abdullah will eat the strawberry');

}

function getMax(num1,num2){
    if (num1 > num2){
        return num1;

    }
    else {
        return num2;
    }
}

const max = getMax(56 , 76);
console.log('Max of two is:',max);  

const max1 = getMax(66, 100);
const max2 = getMax(89, 100);
const maxOfMax = getMax(max1, max2);
console.log('Max Numbers:',maxOfMax);

