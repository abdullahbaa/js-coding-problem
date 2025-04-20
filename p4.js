const phones =[
    { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  },   
    { name: "Rajib", testScore: 55,  schoolGrade: 40, isFFamily : true  },   
    { name: "Rajib", testScore: 60,  schoolGrade: 44, isFFamily : true  },   
    { name: "Rajib", testScore: 80,  schoolGrade: 50, isFFamily : true  }   


];


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

console.log(calculateFinalScore(65));
