// let volume=0;
// console.log(volume || 55);//55
// // console.log(volume ?? 50);
// let abc= true || false;
// console.log(abc);
// console.log(true || false);
// let letter="A";
// let ab= letter || false;
// console.log(ab);
// let bc= letter || 50;
// console.log(bc);
// let bd=true ??  50;
// console.log(bd)

// // let x;
// console.log(undefined ?? "hellow");
// // console.log(x)

// let abc= parseFloat("100afroz");// true//
// if(!abc){
//     console.log("parseFloat first number ko count karta hain")
// }else{
//     console.log("Thia is the false part")
// }

// let cp= parseFloat("abc100");//NaN aur NaN ka matlab samaj jao false 
// if(cp){
//     console.log("AAAAAAAAAAAAAAAAAAAAAaa")
// }else{
//     console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB...............................")
// }

// console.log(xyz)


// let a= Infinity;//true
// if(a){
//     console.log("A")
// }else{
//     console.log("B");
// }
// let b=-Infinity;//true
// if(b){
//     console.log("Kamil")
// }else{
//     console.log("Pyous");
// }

// if(Infinity || null){
//     console.log("Phone")
// }else{
//     console.log("Mobile");
// }

// if( Infinity && null){
//     console.log("Google Browser");
// }else{
//     console.log("Brave browse")
// }

// if("" && -Infinity){
//     console.log("Gambler")
// }else{
//     console.log("One Man Army")
// }

//&& T T->T, T,F->F, F,T->F ,F,F->T;
//==,====,

// let num="app";
// let num1= "1000";

// if(num ==  num1){
//     console.log("true")
// }else{
//     console.log("False");
// }

// Math v bahut important hai//
// let a=Math.floor(123430.1234937474)
// console.log(a)
//math.round//
// let b=Math.round(234)
// console.log(b);
// let b=Math.round(10.5)
// console.log(b);

// let big=Math.round(100.9);
// console.log(big)





// console.log(Math.round(12345.7))//12346
// console.log(Math.round(123456789.5));//123456790
// console.log(Math.round(1234567899.5));1234567900

// console.log(Math.floor(123456789.5))

// console.log(Math.round(1.1));
// console.log(Math.round(1.5))
// console.log(Math.ceil(1.1));

// console.log(Math.sqrt(625));
// let sqrt=Math.sqrt(25);
// console.log(typeof(sqrt));//true//
//|| ye first truthy value ko dekhta hai agr true mila to first wala return kardega//
//sqrt is a truthy value hain//
// //NaN// is falsy value hain 
// if(!sqrt || NaN){
//     console.log("hellow")

// }else{
//     console.log("Hiii")
// }



// let num1=[1,2,3,4,5,6];

// let fmaxval=Math.max(num1);
// console.log(fmaxval);
// let itstrue=isNaN(fmaxval);
// console.log(itstrue);
// let trick=Math.max(num1);
// console.log(trick);


// let findmaxval=Math.max(10,20,30,1,29,3,50)
// console.log(findmaxval);

// let nmgen=Math.random()
// console.log(nmgen)
// let fn=Math.floor(nmgen) *10 + 1;
// console.log(fn)


// console.log(Math.floor(Math.random() * 10 + 1))

// let rm=Math.random()//iska kaam hai o se 10 ke beech me number generate karna//
// console.log(rm)//0.7373474737//har baar alag alag value milega//
//jab hum 2.3,9.0,3,4.1 aise number ko single digit me karna hai too ham used karte hai Math.floor() q ke floor(1.1) to 1 ayega age 1.5 too 2 ayega //

//Ab mera 0.94847493939;;ab muje srif decimal se pahle wala number lena hai too ham used karte hai math.floor();;

// let digit= Math.floor(rm * 10);
// console.log(digit);0///
// let newnum=digit *10 + 1;
// console.log(newnum);


// /short me likha sakte hai//
//  let rndnumbergenerate= Math.floor( Math.random() * 10);
//  console.log(rndnumbergenerate);
//  let final=rndnumbergenerate;
//  if(final% 2 === 0){
//     console.log("this the even number!" ,+ final);
//  }else{
//     console.log("This is Odd number!", + final);
//  }


// console.log(Math.random())
// console.log(Math.floor(1.6));
// console.log(Math.round(12.9))
// console.log(Math.ceil(2.1))


// ................................Practices more perfect........................
// let num=[1,2,3,4,5,6,7,8,9,10];
// let num1=isNaN(num);
// if(num1 % 2 === 0){
//     console.log("This is Even number ", + num1);
// }else{
//     console.log("This is Odd number", + num1);
// }


// let rmdg= Math.floor(Math.random() * 10);
// console.log(rmdg)

// if(rmdg % 2 === 0){
//     console.log("This is Even number!", + rmdg);

// }else{
//     console.log("This is Odd Number!", + rmdg);
// }

////////////////...............////////////////////////////
// console.log(Math.floor(2.1));//2
// console.log(Math.floor(10.78));//10
// console.log(Math.floor(999.999));//999
// console.log(Math.floor(1000.786776))//1000;
// console.log(Math.floor(888.90000000));//888
// ..............////////////////////////....................

// // console.log(Math.round())//round figuar me result ata hai like 1.2 too 1 he ayega and 1.3 raha taav b 1 he ayega ..but agar 1.5 taab muje 2 milega 
// console.log(Math.round(1.100));;//1
// console.log(Math.round(2.5));;// 3 milega aur agar 2.9 v too tav v wahi milega 3;
// console.log(Math.round);//3
// console.log(Math.round(3.0))//3
// console.log(Math.round(4.5));//5
// // ......................///////////////////////////////...............................
// //agar muje 1.1 ke next he 2 output chaiye too ham method used kar sakte hain Math.ceil();
// console.log(Math.ceil(1.2));;//2 ayega 
// ///..................///////////////////////................
// //math.aqrt() ye even number ka adject squire root nikal ke dega/
// console.log(Math.sqrt(625));//25







