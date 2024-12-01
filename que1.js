 sum=(a,b)=>
{
    
    let para=document.querySelector("#text");
    let result=a+b;
    para.innerHTML=result;
   
}
 sqr=(a)=>
{
    let para1=document.querySelector("#squareResult");
    let sq=a*a;
   para1.innerHTML=sq;
}

qbe=(a)=>
    {
        let para2=document.querySelector("#qbeResult");
        let qb=a*a*a;
       para2.innerHTML=qb;
    }

    evenodd=(no)=>
        {
            let para3=document.querySelector("#evenoddResult");
            if(no%2==0)
            {
                para3.innerHTML=(`no ${no} is even`);
            }
            else
            {
                para3.innerHTML=(`no ${no} is odd`);
            }
          
        }

        greater=(a,b)=>
            {
                let para4=document.querySelector("#greaterResult");
              if(a>b)
              {
                para4.innerHTML=(`${a} is greater `)
              }
              else
              {
                para4.innerHTML=(`${b} is greater `)
              }
            }



            nam=(namg)=>
            {
                let para5=document.querySelector("#NameResult");
                para5.innerHTML=(`your name is ${namg}`);
            }

                       sab=(x)=>
                        {
                           let para6=document.querySelector("#sabResult");
                           para6.innerHTML=(`your sab condition of ${x} is <br>
                          sqr is ${x*x}  <br>
                          qbe is ${x*x*x}   <br>
                          odd or even is ${(x%2==0)?"even":"odd"}; <br>
            
                        `);
    }