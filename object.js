/*
let objectName=
{
    key1:"value1",
    key2:"value2",
}
    */

let students=
{
    name:"umesh",
    midName:"kumar",
    lastName:"Yadav",
    mobileNo:7803869841
}
console.log(students.name);
console.log(students);
console.log(students.lastName,students.midName);
 
//   ============== add new key ===========================

students.gender="male";
students.roll=0191;
console.log(students.roll);
console.log(students.gender);

// ====================== change key value ===============================
students.gender="female";
console.log(students.gender);

console.log(students.mobileNo);
students.mobileNo=8435725078;
console.log(students.mobileNo);

// ======================================= Function ia a Object ============================================

let check=
{
    name:"Umesh",
    welcome:function()
    {
        return("Hi wellcome on this console page  "+this.name)
    }
}
console.log(check.welcome());


// ==============================================================================================
let findSum=
{
    sum:function()
    {
        let a=Number(prompt("enter first No"));
        let b=Number(prompt("enter second no"));
        let sum=a+b;
        return `your sum value of ${a} and ${b} is : ${sum}`

    }
}
console.log(findSum.sum());

// ============================= Array in a object ===================================================
let arr=
{
    fruits:["a","b","c","d"]

}
console.log(arr.fruits[1]);
console.log(arr.fruits);