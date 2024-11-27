function multiply (num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number')
        {
        return ' please provide a number';
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply(5,'seven');
// const result = multiply([5],[8]);
console.log(result);



function fullName (first,second){
    if(typeof first !== 'string' || typeof second !== 'string'){
        return 'please provide a string'
    }
    const full = first + ' ' + second;
    return full;
}
// const full = fullName('Raihan','Abdullah');
const full = fullName(5,7);
console.log(full);