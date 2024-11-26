const heights =[55, 66, 77, 88, 99,55, 66];

function getMax (numbers){
        let max = numbers[0];
    for ( const num of numbers){
        
        if (num > max){
            max =num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('max value is:',max);

