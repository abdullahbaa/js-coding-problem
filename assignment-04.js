

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


function sendNotification(email) {
    let str = email.includes('@');
    if (str == false ){
    return "Invalid Email";

    }
    else{
    let pos=email.indexOf('@');
    let substr=email.substr(pos+1);
    return substr;
    }
    
 }

 function checkDigitsInName(name) {
    const number =(1,2,3,4,5);
   
   if (typeof name !== String){
    return false ;
   }
   else if(valueOf( name === number)){
    return true;
   }
 
   else {  
    return "Invalid";
   }
}


function calculateFinalScore(obj) { 
    const  number = [100,99,80];
 if(typeof testScore === number ( testScore <= 50)){
    return testScore;
 }
else if(typeof schoolGrade === number ( schoolGrade <=30)){
    return schoolGrade;
}
else if(typeof  isFFamily === boolean){
    return isFFamily;
}
else{
    return false;
}

}



function  waitingTime(waitingTimes  , serialNumber) {
    const serialNumber=(1,2,3,4,5,6,7,8,9,10);
    const array =['Israt','Nabil','Jashim','Nobel','Kalam','Jamal','Nahid','Fatima','Farzana','Nazia'];

    for(const serialNumber of array){
        array.length;
        serialNumber = (serialNumber+1)/2;
    }

    return waitingTimes, serialNumber;
    
}
