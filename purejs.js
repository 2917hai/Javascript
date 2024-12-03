let btn=document.querySelector("#btn");

btn.addEventListener("click",function(e){
    btn.innerHTML="my name is ankit ";
    btn.style.color="red"
})


//====================================================================================================

// let btn2=document.querySelector("#color1") ;

let btn3=document.querySelector("#color2");




btn3.addEventListener("mouseenter",function(){
    
    btn3.style.backgroundColor="purple"

})


btn3.addEventListener("mouseenter",function(e){
    
    btn3.style.borderColor="green"

})


btn3.addEventListener("mouseleave",function(e){
    
    btn3.style.backgroundColor="green"

})


btn3.addEventListener("mouseleave",function(e){
    
    btn3.style.borderColor="red"

})


//====================================================================================================


let btn4=document.querySelector("#btn4");

btn4.addEventListener("dblclick", function(){

    btn4.innerHTML="hamare yaha essa he hota hai"

}
)

//====================================================================================================


let btn5 = document.querySelector("#btn5");

btn5.addEventListener("mouseenter", function (){



btn5.innerHTML="toh kese hai aap log"

btn5.addEventListener("mouseleave", function (){

    btn5.innerHTML="thik hai "
    
    
    
    }
    )


}
)


//====================================================================================================


 let inpp=document.querySelector("#inp");

 inpp.addEventListener("keydown", function (){

    console.log(inpp.value)

 }
)



//====================================================================================================


let inp=document.querySelector("#input");

inp.addEventListener("input", function (){

   console.log(inp.value)

}
)