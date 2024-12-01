// Problem-02


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
 console.log(sendNotification("ab123@.com"));
