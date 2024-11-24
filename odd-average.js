/**
 * Function takes an array as parameter
 * Give me the average of the odd numbers in the Array
 */

function oddAverage(numbers){
    const odds =[];
    for (const number of numbers){
        if(number % 2 ===1){
            // console.log(number);
            odds.push(number);
            
        }
    }
        console.log(odds)
        let sum =0;
    for (const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum);
    console.log(count);
    const avg = sum / count ;
    return avg;
}

const numbers = [32 ,43, 44, 53 , 65, 78];
const avg =oddAverage(numbers);
console.log('Average of the odd number is:',avg);