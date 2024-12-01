let sub =()=>{

    let name=document.querySelector("#name").value;    
    let num=document.querySelector("#num").value;
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;
    let cpass=document.querySelector("#cpass").value;
    
    
    let errorname=document.querySelector("#errorname");
    
    let errornum=document.querySelector("#errornum");
    
    let erroremail=document.querySelector("#erroremail");
    
    let errorpass=document.querySelector("#errorpass");
    
    let errorcpass=document.querySelector("#errorcpass");
    
    
    
    if (name===""){
    
        errorname.innerHTML="please enter your name";
        errorname.style.color="red";
        errorname.style.fontSize="20px";
    return false;
    
    }
    
    else if (num===""){
    
        errorname.innerHTML="please enter your number";
        errorname.style.color="red";
        errorname.style.fontSize="20px";
        return false;
     
    }
    
    
    else if (isNaN(num)){
    
        errorname.innerHTML="please enter only number";
        errorname.style.color="red";
        errorname.style.fontSize="20px";
        return false;
     
    }
    
    else if (num.length !== 10){
    
        errorname.innerHTML="please enter vaild number";
        errorname.style.color="red";
        errorname.style.fontSize="20px";
        return false;
     
    }
    
    else if (!(email.includes("@") && email.includes (".com"))){
    
        errorname.innerHTML="please enter vaild email";
        errorname.style.color="red";
        errorname.style.fontSize="20px";
        return false;
     
    }
    
    
    else if (pass=""){
    
        errorname.innerHTML="please enter psswd";
        errorname.style.color="red";
        errorname.style.fontSize="20px";
        return false;
     
    }
    
    else if (! (errorpass.lenght !== 8)) {
    
    
    errorname.innerHTML="please enter 8 digit";
        errorname.style.color="red";
        errorname.style.fontSize="20px";
        return false;
    }
    
    
    else if (!(cpass = pass)){
    
        errorname.innerHTML=" psswd not matiching";
        errorname.style.color="red";
        errorname.style.fontSize="20px";
        return false;
     
    }
    
    
    }