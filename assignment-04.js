// Problem-01

function calculateTax(income, expenses) {
    if (income <= 0){
        return "Invalid income"; 
    }
    else if(expenses <= 0){
        return 'invalid expenses';
    }
    else if (income <= expenses){
        return 'invalid';
    }
    let myProfit = income - expenses;
    let totalTax = (myProfit * 20)/100;
    return totalTax;
}
let income =30000 ;
let expenses = 50000;
let totalTax = calculateTax(income,expenses);
console.log(totalTax);








