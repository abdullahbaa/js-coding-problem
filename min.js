const prices =[20000, 16000 ,50000, 1000000, 120000,12000, 16000];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }

        // console.log(num);
    }
    return min;
}

const cheap = getMin(prices);

console.log('cheapest one is:', cheap);