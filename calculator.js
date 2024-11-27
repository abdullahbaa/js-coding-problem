function add(num1,num2){
    return num1 + num2;
}

function subtract (num1,num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(a,b,operation){
    if(operation === 'add'){
        const  result =add(a,b);
        return result;

    }
    else if(operation === 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        // const result = multiply(a,b);
        return multiply(a,b);
    }
    else if(operation === 'divide'){
        // const result = divide(a,b);
        return divide(a,b);
    }
    else{
        return 'only add,subtract,multiply,divide';
    }
}

const result = calculator(5,7,'add');
console.log('Final result is:',result);

const result1 = calculator(5,7,'subtract');
console.log('Final result is:',result1);

const result2 = calculator(5,7,'multiply');
console.log('Final result is:',result2);

const result3 = calculator(5,7,'divide');
console.log('Final result is:',result3);