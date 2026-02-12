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

// let colors=["Red","Green","Blue"];

// for(let i =0; i<=10; i++){
//     console.log(i);
// }
// 1.Write a function that checks if a number is between 10 and 50 (inclusive) using logical operators.
// function CheckNum(Num){
//     if(Num >10 && Num<=50){
//         console.log("You are passeed because you are correct choose the number! Congratulation")
//     }else{
//         console.log("Sorry! You are not choose the correct Number! ")
        
//     }
    
//     return Num;
// }
// let UserNum=CheckNum(2);
// console.log(UserNum)
// What will true && false || true evaluate to, and why does operator precedence matter here

// console.log(true && false);//false result dega becaiuse  ye first falsey value ko return karta hai agar first left side me first false value nahi mile tab ye next wale value ko retune karta hain //

;// true && false || true
// (true && false) || true
// false || true
// true

// false || true && false
// false || (true && false)
// false || false
// false

// (false || true) && false
// true && false
// false

// true || false && false
// console.log(true && true);//true q ke ye falsy value ko first return karta hain but yaha pe dono he true hain islye true he retun karta hai /
//  console.log(false || true)//ye hame trye dega q ke ye first truthy vakue ko dekhta hai ke left -side me truthy value nahi hoga to joo right side me true value rahega to wahi return kar dega aur agar left side true mil jata hai to first return kar dega true
// console.log(true || false)//true dega 
// console.log(false) // ye false dega but agar mai isko true karna chata hu to ham kar sakte hain kaise ! laga ke 
// console.log(!false);//true dega//
// console.log(!true);//false dega 
// console.log(true);agar ham true he rakhna chate hai too true  hi rahega but agar ham !! ye dono laga de to ye first !! true ko true he rahne dega
// 
// console.log(!!true); true dega
// Simple Definition:
// ?? sirf null aur undefined ko check karta hai. Agar left side null ya undefined hai tabhi right side return karta ha//
//// your code goes here
// let a=undefined
// let b="world";

// console.log(b ?? a);//

// let b=undefined
// / let score=0;

// console.log(0 || "score")//ye first truthy value dekhta hai too 0 hai false value
// console.log( score ?? "No scores")//outcome dega No score q ke jaab ham ?? ye used karte hai too wo isko null samajta hai aur ye null v hai q ke isme 0 hai islye ye next right wala value return karta hai//
// //aur ek reason hai jaab v agar null aur undefine rahega value aur wo v left-side me taavi right-side wala return karega other waise nahi karega 
//Example ///
// let a=null;
// console.log(a ?? "Hellow");//Hellow ayega ;

// let a = undefined;

// console.log(a ?? "false");

// console.log("0" ?? undefined);
// console.log("afroz" ?? null)
//reallife example//
// Example  — Real Life Use Case
// javascriptfunction greetUser(name) {
//   let displayName = name ?? "Guest";
//   console.log("Hello, " + displayName);
// }

// greetUser("Rahul");     // Hello, Rahul
// greetUser(null);        // Hello, Guest
// greetUser(undefined);   // Hello, Guest
// greetUser("")
// What's the difference between || and ?? (nullish coalescing) when dealing with falsy values like 0 or empty string ""?

// console.log(0 || undefined);// yaha pe undefined return karne ka reason hai aur reason hai ke q || NOR hai ye first truthy value ko return karta hai  but 0 ek falsey value hai islye || NOR operators undefine return karta hai q ke yaha pe truthy value nahi dono falsy value hai .
// // console.log("" || null); yaha v same thing

// console.log(0 ?? false);
// console.log(null ?? "afroz ");
// Predict the output: console.log(0 && "hello") and explain why JavaScript returns that specific value.?
// console.log(0 && "hellow") //0 ane ka reason hai ke ye first falsy value ko dekhta hai apne andar aur 0 ek falsy value hain
// How can you use the ! operator twice (!!) to convert any value to a boolean, and when might this be useful?
// console.log(true) // ye muje output me dega true and q ke avi mai ! Not-operators ye use nahi kia hu But Agar mai used karunga taab jo hai true wala value False me convert ho jaiga
// console.log(!true);//false dega 
// console.log(!!true);//ye true dega q ke  signle !ye denege too true ka false me dega aur jaab fir aur ! ek laga denge taav fir se true me convert kar dega

// Short-Circuit Evaluation Kya Hota Hai?
// JavaScript left se right evaluate karta hai, aur jैसे hi usse truthy value mil jaaye, woh ruk jaata hai — baaki expressions ko dekha bhi nahi jaata. Isi ko Short-Circuit kehte//
// null || undefined || "default" || "second"
// first || NOR operator truthy value ko return karta hai too ab yaha pe null hai .Too hame pata hai ke null ek falsy value aur undefined v false value hain to fir next dekhta hai ke "default hai taav isko mil jata hai truthy value so return kar deta hai But nahi melega too next undefined hai usi ko return kardega ye"
// console.log(null || undefined  || "Default" || "Second");//Default dega//
// console.log(null || undefined)//undefine dega
// console.log(null ?? undefined ?? "Default" ?? "Second")//Default dega q ke ?? sirf null aur undefine ko check karta hai aur dono hi false value hain to fir next dekhta hai ke Default hai to isko return kar dega//