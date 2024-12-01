let sub=()=>
{
    let name=document.querySelector("#name").value;
    let number=document.querySelector("#num").value;
    let Email=document.querySelector("#mail").value;
    let Passwod=document.querySelector("#pass").value;
    let cpassword=document.querySelector("#cpass").value;

    let ername=document.querySelector("#errorname");
    let ermail=document.querySelector("#errormail");
    let ernum=document.querySelector("#errornum");
    let erpass=document.querySelector("#errorpass");
    let ercpass=document.querySelector("#errorcpass");

    if(name==="")
    {
        document.querySelector("#name").placeholder="enter your Name";
        ername.innerHTML="please enter your name";
        ername.style.color="red";
        ername.style.fontSize="30px";
        return false;
    }
     else if(number==="" && isNaN(number))

     {
       ernum.innerHTML="please enter valid no"
       ernum.style.color="red";
       ernum.style.fontSize="20px";
       return false;
    }
     else if(isNaN(number))
    {
        ernum.innerHTML="please enter valid no"
        ernum.style.color="red";
        ernum.style.fontSize="20px";
        return false;
     }
     else if(number.length!==10)
         {
             ernum.innerHTML="please enter valid no"
             ernum.style.color="red";
             ernum.style.fontSize="20px";
             return false;
         }

    else if(!(Email.includes("@") && Email.includes(".com") ))
      {
             ermail.innerHTML="please enter valid Email"
             ermail.style.color="red";
             ermail.style.fontSize="20px";
             return false;
      }

      else if(!(Passwod.includes("@") && Passwod.length>=8 && Passwod.length>20))
      {
         erpass.innerHTML="please enter Password no";
         erpass.style.color="red";
         erpass.style.fontSize="20px";  
         return false;
      }
      else if(Passwod != cpassword)
         {
            ercpass.innerHTML="please enter valid password"
            ercpass.style.color="red";
            ercpass.style.fontSize="20px";
           return false;
        }
        


}