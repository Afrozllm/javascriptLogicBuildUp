// JavaScript Arithmetic Operators - Complete Guide
//Addition////
//addition number me two cheeze add hote hai First hai ke  jab ham doo number ko add karte hai taab + sign add karta hai number ko aur ham ko finally ans deta hai But aur ek kaam karta hain+sign wo kaam hai ke jab hai two string ko add karte taab add nahi karta bulke wo concatenation karta hain//

// console.log(100+300)//output 400;
// console.log("hello" + 30) //yaha pe + sign concatenation karega aur output dega hello30
// console.log(5+1);
//operators-> hogaya +,-,* ./,%, ye sara jo ham used karte hai number aur string ke sath//
//oprand->Number,Variable ,expression,function call,object property acess,array elements access ye sab operand kahlata hain.

// console.log("100" + 200);jaab ek string ho too first javascript choose karti hain concatination ko aur finally output dega 100200
// console.log(100 + "200")//ya v same output dega 100200
// 5 + "3"

// JavaScript ka internal process:
// Step 1: Check karo - koi string hai?
//         Haan! "3" string hai

// Step 2: Number ko bhi string bana do
//         5 → "5"

// Step 3: Dono ko jod do
//         "5" + "3" = "53"
// console.log(10 - 20)//-10
// console.log(100 -900);//-800

// console.log("400" - "200")//200
// console.log("-500" - 400)//-900
// console.log("5" * "4")//20
// console.log(5 * 4)//20
// console.log(2/20)//0.1
// NUMBER KO STRING  ME CONVERT KARNA HAI TO KARSAKTE HAIN//
// let str="100";
// let str1="200";
// /*how can i converted into number*/

// // console.log(Number(str) + Number(str1));
// let finalNumber=Number(str) + Number(str1);
// console.log(finalNumber)
// parseInt()ek aisha function hai jo string ko convert karta hai Intergers me

// console.log(2/20)//0.1
// console.log(30/2);//

// console.log(31/2)//15.5
// console.log("30" /3//10

// console.log("20" / "2")

// let num1=100;
// let num2=300;

// let finalStr=String(num1) + String(num2);
// console.log(finalStr)//100300

// let str1="1000";
// let finalInt=parseInt(str1);
// console.log(finalInt)//1000
// console.log(typeof(finalInt))//number
// ek user se input lena hai aur usko add karna hai dono ka sum//
// function sum(num1,num2){
//     return num1 + num2

// }
// let finalans=sum(100,200);
// console.log(finalans);

// function sum(num1,num2){
//     return num1 + num2

// }
// let finalans=sum("100","200");
// console.log(finalans);


// function sum(a,b){
//     let addnum= Number(a) + Number(b);
//     return addnum;
// }

// let getrady1=sum("10","10");
// let getrady=sum(10,20);
// console.log(getrady);
// console.log(getrady1)
// let getrady1=sum("10","10");
// let getrady=sum(10,20);
// console.log(getrady);
// console.log(getrady1)

// console.log(10 + 5 * 2)//30//
// console.log("5" + 2 + 3);//523
// console.log("10" - 5 + "2");//52
// console.log(1 + 2 + "3" + 4);//334;
// console.log(10/0);
// Key Concept:

// x++ (post-increment): pehle value return, phir increment
// ++x (pre-increment): pehle increment, phir value return


////////////////////......................//////////////////////////////
// function EvenNum(num){
//     if(num % 2 === 0){
//         console.log("this is EvenNumber")
        
        
//     }else{
//         console.log("this is Odd number!")
//     }
    
//     return num;
// }
// // let user=EvenNum(10);
// let user1=EvenNum(10);
// console.log(user1);
// // console.log(user);

let colors=["Red","Green","Blue"];

for(let i =0; i<=10; i++){
    console.log(i);
}