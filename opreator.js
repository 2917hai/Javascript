function run()
{
    let para=document.querySelector("#text");
    para.textContent="Umesh Kumar ";
    para.style.color="red";
    para.style.fontSize="50px";
}
function run1()
{
    let para1=document.querySelector("#text1");
    para1.textContent="Umesh yadav ";
    para1.style.color="red";
    para1.style.fontSize="50px";
    if(para1.style.display==="none")
    {
        para1.style.display="block";
    }
    else
    {
        para1.style.display="none";
    }

    let para2=document.querySelector(".uma");
    para2.style.height="500px";
    para2.style.width="500px";
    para2.style.marginTop="100px";
    para2.style.backgroundColor="red";
    para2.style.border=""
 
                                                      /// hover= on
    
}
let count=0;
function inc()
{
count++;
let para5=document.querySelector("#inc");
para5.innerHTML=count;
if(count==5)
    {
        alert("done");
    }
    
}
function dec()
{
   count--;
   let para6=document.querySelector("#inc");
   para6.innerHTML=count;
   if(count==5)
    {
        alert("done");
    }
    
   
}
