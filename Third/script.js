// 1. Variables & Data Types
//variable create karne ka 3 tarika hai //
// var name="Mizan";
// let age=30;
// const discount=40%;

// var city ="Delhi";
// console.log(city)
// var city="Mumbai";
// console.log(city)


// function test(){
//     let y=100;
//     if(true){
//         let x=10;
//         console.log(x)
//         console.log(y)
//     }
    
    
// }
// // console.log(x)
// let final=test()
// / var a=100;
// console.log(a);
//  var a=200;
//  var a=300;
//  var a =800

// console.log(a)
//ham variable se declear karte hai variable too ham isko fir se re-declear kar sakte hain and fir se declear kar sakte hai //
// let a=100;
// console.log(a)//100//
// let a=100; taab muje ye error dega aur error hai can not be re-declear let variable
// let a=100; already has beeen decleared 
// a=200;

// let num=100;

// console.log(num)//100//

// let num=100;

// console.log(num);//error dega bolega ke num jo hai already decrear hai but agar main srif num=100 tab muje error nahi dega
// num=300;
// console.log(num)main me num ko upgrade kardia let variable me .
// jaab v ham let se koyi v variable baanate hai tab ham usko update kar sakte hai but re-declear nahi kar sakte//
// re-declear KA MATLAB MUJEE SAMAJ ME ATA HAI KE AGAR MAI 
//LET A=100;
// LET A=200;//JO KE ERROR dega
// HUM YE CHEECH VAR VARIABLE SE KARSAKTE HAIN//AUR KOYI V ERROR NAHI DEGA BUT HUM VAR KO AVOID KARTE HAI //
//AVI TWO MORDER VARIABLE CREATE KARNE KA KEY WORDS HAI JAVASCRIPTS ME 
//LET ,CONST.
// CONST VARIABLE SE HUM VARIAVLE DECLEAR KARTE HAI TOO FIR ISKO DOBARA NAHI UPDATE KARSAKTE HAI AUR NA CHANGE //YE FOIXED HOTE HAIN/EXAMPLE 
// const discount=40% //ye fixed hai 


// SCOPE//
// {
//     let a=10;
//     console.log(a);
// }
// console.log(a)//error

//function scope//
// function ABC(){//outer function hai//
// let age=24;
// let name="rahul"
// // const marks=59;
// //     // inner function//
// //     function abc(age,name,marks){
// //         console.log(`${age}, ${name},${marks}`);
        
// //     }
// //     return abc(age,name,marks);
// // }

// // let Outfn=ABC();
// // console.log(Outfn);
// ......................//////////////////////////////..........................................................
// your code goes here

// const obj={
//     name:"afroz"
    
// }

// let ans=obj.age;
// console.log(ans);
// const obj = {
//     name: "afroz"
// }

// let ans = obj.age;
// console.log(ans); // undefined

// Kyun undefined aata hai?
// Kyunki age property obj mein exist hi nahi karti।
// JavaScript mein jab tum kisi object ki aisi property access karte ho jo exist nahi karti, toh JS error nahi deta — balki undefined return karta hai।
// hum const se variable create kaerte hai to ham isko change nahi kar sakte na q ke ye fixed hote hai BUT Ham ek cheez kar sakte hai wo hai aur wo hai ke property ko change kar sakte hai Array and Objects ke .
// example

// let persion={name:"rahul",Age:24};
// console.log(persion)

//  persion.name ="Asif";
//  console.log(persion)
// ham ko pata hai ke const se hum variable create karte hai to ham change nahi kar sakte hai but kuch cheez Kar sakte hain jaise hum jo object banayenege const se too uske ander jo v property hai sab change kar sakte 

// 5. Scope — Bahut Important Concept;

// var name ="asif";
// let age=25;
// const marks=80;

// function abc(a){
//     console.log(name);
//     console.log(age);
//     console.log(marks)
    
// // }
// // let Ans=abc("300")
// // console.log(Ans);

// function test(){
//     var a=100;
//     console.log(a);
//     function abcd(){
        
//         console.log(a)
//     }
//     return abcd()

// }
// // console.log(a);

// let abc=test();






// 6. Hoisting — Variable Upar Uth Jaata Hai//


// console.log(a);
// var a=10;

// let a=10;
// Cannot access 'a' before initialization
// temporal dead zone me rahta hai jaab hum let aur const variable //

// console.log(a);
// function abc(){
//     console.log("hellow")
// }

// let a=abc();// ye v temporal dead zone me rahta hain
// // console.log(a);


// console.log(test())//undefine milta hai too 2 reason hai 
// first hai ke hum function test() me ander kuch nahi likhe hai aur second hai ke hum test() value nahi like kuch

// function test(){
    
// }

// function say(){
//     return "afroz"
// }
// console.log(say())

// number ko return karna hai //

// function say(){
//     let a=100;
//     let b=200;
//     return a+b;
// }
// console.log(say());


// function abc(){
//     return {
//         Name:"asif",
//         Age:30,
//         State:"west bengal",
//         Live: "Siliguri"
//     }
// }

// console.log(abc())
// function sum(a,b){


// function sum(a,b){
//     return a+b;
// }
// let total=sum(10,20);
// console.log(total)

// ......................///////////////////////////..................................
// console.log(10/0)
// console.log(20 * "a")

// let num=3.14159;
// let final=num.toFixed(2);
// console.log(final);

// let firstnum=234567;

// let bb=firstnum.toString()
// console.log(firstnum);
// // console.log(typeof(bb))

// let str="123546";

// let Strchange=Number(str);
// console.log(Strchange);
// console.log(typeof(Strchange));


// let a=true;//1

// let b=Number(a);
// console.log(b);//1
// console.log(typeof(b));

// let c=false;
// let d=Number(c);
// console.log(d)

// console.log(typeof(d))


// let ab=null;

// let bd=Number(ab);
// console.log(bd);
// console.log(typeof(bd))
// .....////////////////////..........................



// console.log(Number("hellow"));

// console.log(String(123));
// console.log(typeof(String))




// console.log(isNaN(123));//false;
// console.log(isNaN("Afroz"));//true;
// console.log(isNaN(true)); //false;
// console.log(isNaN(false))//false;
// console.log(isNaN(Object));//false;
// console.log(isNaN(null));//false
// console.log(isNaN([]))//false
// console.log(isNaN({})) true

// console.log("12" * 2);

// console.log(isNaN(12 * "a"))/////NaN//

// console.log("hlo"/2 );//NaN//
// console.log("abc" * 2)//NaN;;
// console.log("abc" + 2)//abc2//
// console.log("abc" * "abc")//



// let str="hellow";

// let str1=Number(str);
// console.log(str1);

// let num=Number(undefined)
// console.log(num)

// let ft="2334.746";
// console.log(Number(ft));

// let x;
// console.log( x * "2");
// console.log(x)
// not a number//
// console.log("abc" * "abc")
// console.log("abc" -123)
// console.log("123" / "abc")


// ../////////......

//1. let A ="say";

// let b=Number(A);;;
// console.log(b)NaN//

2.
// let abc="123";
// let finaln=Number(abc);
// console.log(finaln)//Number dega q ke ye ek number //
// console.log(typeof(finaln))




// parseFloat and parseInt//agar hum ye dono ke parameter me pass karte hai string to hame NaN dega//

// let abc="laptop";
// let finalb=parseFloat(abc);
// console.log(finalb);//NaN// dega

// let phone="Iphone";

// let finalc=parseInt(phone);
// console.log(finalc);//NaN//




// let num =123;
// let num1=parseFloat(num);
// console.log(num1);//Number dega q ke ye ek number hain
// console.log(typeof(num1));



// let num="1234";
// let num1=parseInt(num);
// console.log(num1);//Number dega q ke ye ek number agar hum type check kare too//

// console.log(typeof(num1))
// console.log(num);


// MATH//
// let bignum=-8642;;

// let finalnum=Math.sqrt(bignum);
// console.log(finalnum)



// NaN ki khasiyan hai//

// console.log(NaN === NaN);//false//

// if(NaN === NaN){
//   console.log("Yes i am true")
// }else{
//   console.log("i am false");//false result dega q ke NaN khud se v compare nahi karta hai;
// }

// if(isNaN === isNaN){
//   console.log("world");//world ayega q ke isNaN equal hai isNaN ke 
// }else{
//   console.log("Hiii!")
// }
//hum ko NaN ko nahi used kare to accha hoga q ye khavi khavi true false deta hai aur khavi khavi false ko true//
//hum ko isNaN used karna chaiye real time //


// let name="afroz" - 10;
// console.log(name);

// // console.log(NaN(name))
// // console.log(name)
// console.log("afr" * 2);

// // console.log(isNaN(name))
// let w=isNaN(name);
// console.log(w);

// if(w === true){
//   console.log("haa bhai too pass ho gaya")
// }else{
//   console.log("Bhai ! too fail ho gaya  next time pass ho jiaga!");
// }

// // 
// let inputUser="afroz";

// // let randam=Number(inputUser);//false dene ke karan muje else part output milta hai
// let randam=isNaN(inputUser)//true yaha true ke karan muje if wala part chalta hai//output//
// console.log(randam)

// if(randam === true){
//   console.log("hellow sir are you pass")
// }else{
//   console.log("sorry sir! you are faile");
// }
















































































































