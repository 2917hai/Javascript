
let name ="umesh";
let name1='Umesh';
console.log(name1);
console.log(name);

let name3="Umesh kumar yadav";
console.log(name3[0] + name3[1] + name3[2] + name3[3] + name3[4]);  // Umesh 
console.log(name3[5]);    //  a single space 
console.log(name3[6] + name3[7] + name3[8] + name3[9] + name3[10]); // Kumar
console.log(name3[11]);   //  a single space 
console.log(name3[12] + name3[13] + name3[14] + name3[15] + name3[16]); // Yadav

console.log(name3.length);   // 17
console.log(name.length);    // 5
console.log(name1.length);   // 5


//==================== Concatations  ================================
let firstName="Umesh ";
let midName="Kumar ";
let lastName="Yadav";
console.log("full Name: "+firstName + midName + lastName);
let fullName="Umesh "+"kumar "+"Yadav";
console.log(fullName);


// ============== Template Literals ====================================
let a=5;
let b=10;
let sum= a+b;
console.log("sum of "+a +" and " +b +" is : "+sum +"rupees");
console.log(`sum  of ${a} and ${b} is : ${sum} rupees`);
let test=`this is "this" and 'these' keyword`;
//let test="this is "this" and 'these' keyword";    error
console.log(test);  // this is "this and 'these" keyword

let test1=`
Name= ......
date=.......
roll=.......        
`//  print same as      Support multiline 

// ====================== Operator =======================================
if(123=="123")
{
    console.log("yes")
}
else
{
    console.log("NO")
}

if(1=="1")
    {
        console.log("yes")
    }
    else
    {
        console.log("NO")
    }
    if(0=="")
        {
            console.log("yes")
        }
        else
        {
            console.log("NO")
        }

        if(123==="123")
            {
                console.log("yes")
            }
            else
            {
                console.log("NO")
            }
            if(123===123)
                {
                    console.log("yes")
                }
                else
                {
                    console.log("NO")
                }
                if(1==="1")
                    {
                        console.log("yes")
                    }
                    else
                    {
                        console.log("NO")
                    }
                    if(1===1)
                        {
                            console.log("yes")
                        }
                        else
                        {
                            console.log("NO")
                        }
//  =============================== Conditional statement ====================================
let age=prompt("enter your age");
console.log(age);
if(age>=21)
{
    console.log("tu to jawan ho gaya hai kar sakta hai");

}
else if(age>15 && age<20)
{
    console.log("beta abhi moj kar tu");
}
else
{
    console.log("beta abhi tu to bachha hai ");
}

// ================================ Switch Case ===================================================
let No1=Number(prompt("enter Number1 "));
let No2=Number(prompt("enter Number2 "));
console.log(` 
             for addition: +
             for subtraction : -
             for Multiplication: *
             for divide: /
    `)
    let symbol=prompt("enter symbol");
   switch(symbol)
   {
    case '+':
        {
            console.log(No1+No2);
            break;
        }
        case '-':
        {
            console.log(No1-No2);
            break;
        }
        case '*':
        {
            console.log(No1*No2);
            break;
        }
        case '/':
        {
            console.log(No1/No2);
            break;
        }
        default:
            {
                console.log("invalid input ");
                break;
            }
   }

   // ===================== Alert & Prompt, Console.error, console.warn, confirm ===========================================
   alert("this is first alesr messege ");
   prompt("enter your name in first prompt ")
   console.error("Here we find a error");
   console.warn("this is first warning for you for this errror");
   confirm("Are sure want to submit this response ");


   // ================================ String Method ====================================================
   /*
       Format=   stringName.method();
   */
  let msg= " Hello ";
  console.log(msg);  // Hello
  // trim = remove end and start space from the string 
  console.log(msg.trim());  //Hello

// toUpperCase()  and toLowerCase()     convert lowercase to uppercase and uppercase to lowercase
console.log(msg.toUpperCase());   // HELLO
console.log(msg.toLowerCase());   // hello

let str1=" Umesh Kumar";
console.log(str1);  // Umesh Kumar
console.log(str1.toUpperCase());  // UMESH KUMAR
console.log(str1.toLowerCase());  // umesh kumar

////// ======================================= length ===========================================

console.log(str1.length);


// ============================ String Method with arguments ==========================================
   //  stringName.Method(arguments);
//   indexOf = returns the first index of occurance of some value in strings or gives -1 if not found 

let str2="ILoveCoding";
console.log(str2.indexOf("Love"));  // 1
console.log(str2.indexOf("I"));  // 0
console.log(str2.indexOf("Coding"));  // 5
console.log(str2.indexOf("g"));  // 10
console.log(str2.indexOf("J"));  // -1
console.log(str2.indexOf("Umesh"));  // -1

////// ======================================= Concat ===========================================

console.log(str1.concat(str2));
console.log(str1.concat("this is first concat"));

////// ======================================= length ===========================================

console.log(str1.length);

///  Method chaining

 str2=str2.trim().toUpperCase();
 str1=str1.trim().toUpperCase();
 console.log(str2);
 console.log(str1);

 let name4=" Umesh Kumar "
 let name5=name4.trim().toUpperCase();
 console.log(name5);

 //=======================================charAt ==================================
 console.log(str2.charAt(1));
 console.log(str2.charAt(2));
 console.log(str2.charAt(5));

 // return index char or value

 //=======================================charcodeAt ==================================
 console.log(str2.charCodeAt(1));
 console.log(str2.charCodeAt(2));
 console.log(str2.charCodeAt(5));

 // return unique value 

 //=======================================split ==================================
 console.log(str2.split("Love"));    // split Love from str2
 

 //===================================== substring =================================
 console.log(str1.substring(1,4));  // only possitive index allowed negative means 0
 

 // ===================== Slice Method ===================================
  let str22=str2.slice(5);  // 5 to end     Coding
  console.log(str22);
  let str222=str2.slice(1,4);  // index 1 to index 3   Lov
  console.log(str222);
  let str2222=str2.slice(1,5);  // index 1 to index 4  Love
  console.log(str2.slice(-2));   // last 2 index value
  console.log(str2222);
  console.log(str2222.slice(-4));   // last 4 index value

  // ==================== Replace and repeat Method ===============================
  let str5=str2.replace("Love","Like");
  console.log(str5);
  console.log(str2.replace("Love","Like"));
  console.log(str2.repeat(2));

//======================== Replace ===========================================
  let text="this is this This string";
  console.log(text);  //  this is this This string

  console.log(text.replace("this","its"));   // only one this change with its                                             
  //           (its is this This string) 

  console.log(text.replace(/this/g,"its"));  // all this change with its only same case such as lowercase or Uppercase    
  //          ( its is its This string)

  console.log(text.replace(/this/gi,"its"));  // all this change with its whether this is Uppercase or lowercase          
  //          (its is its its string)

  console.log(text.replaceAll("this","its")); // all this is change with its                                             
  //          ( its is its This string )
  

  //=========================================
  //========================== Array ==============================================
  function arr1()
  {
    let fruits=["a","b","c","d"];
    console.log(fruits);  // a b c d 
    fruits.pop();
    console.log(fruits);  // a b c 
    fruits.push("m","n"); 
    console.log(fruits);  // a b c m n
    fruits.shift();
    console.log(fruits);  // b c m n
    fruits.unshift("Umesh","Kumar","Yadav");
    console.log(fruits); // Umesh kumar yadav b c m n 
    console.log(fruits.slice(1,5));

    // ===================== splice()      we can insert anywhere ================================
     fruits.splice(1,0,"raj");   // index where we want to add     how many you want to delets   value 
     console.log(fruits);     // ['Umesh', 'raj', 'Kumar', 'Yadav', 'b', 'c', 'm', 'n']

     fruits.splice(2,1,"raja");
     console.log(fruits);    // ['Umesh', 'raj', 'raja', 'Yadav', 'b', 'c', 'm', 'n']

     //========================  two array concatanation ========================================
     let fruits11=['m',5,4,'n'];
     let fruits22=['s','t',5,7];
     console.log(fruits11.concat(fruits22));
     console.log(fruits11.length());
     console.log(fruits22.length());
     console.log(fruits.length());

   
  }
  arr1();

//======================immediaely involk function expression{iife}=================================
(function()
{
    console.log("this is immediately involk function expression");
}())
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ============================= parameterize function ========================================
let summ=(j,k)=>
{
let add=Number(j+k);
console.log(`sum of j and k is ${add}`);
}
summ(10,20);


///////////////////////////////////////////////////////////////////////////////////////////////
let summ1=(x,y)=>
{
    return x+y;
}
console.log(summ(10,20));

//////////////////////////////////////////////////////////////////////////////////////////////
let summ2=(x,y)=>
    {
        return x+y;
    }
    let odd=summ2(10,20);
    console.log(oddd);
    for(let i=1; i<=10; i++)
    {
        console.log(oddd*i);
    }

    //=====================================================================================================
   
let sunn=(t,u)=> t+u;
sunn(10,20);

    //  ============================== advantages of arow function =======================================
    /*
         
    */