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
console.log(checkDigitsInName('123abd'));
