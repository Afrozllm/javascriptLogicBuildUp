// Online Javascript Editor for free
// Revision//
//Logical operators//
// &&,|| !;
// console.log("afroz" && "0");//falsey value return karta hai first// 0 output ayega 
// console.log("false" && 0);// 0 ayega
// console.log(false && true);//false
// console.log(false && false); //false ayega q ke first he me inko falsy value milgaya=false
// console.log(1 && 0); //false he ayega matlab 0 
// console.log(0 && 0);//zero ayega 
// console.log("world" && true);//true ayega first falsy value ko dekhta hai agar falsy value mila to result fasly ayega but agar nahi mila to next jo hai right mega its wo true ho ya false wahi return karega//=true//
// console.log(-10 && "0");//0 melega;
// console.log(-100 && false);//false melaga
// truthy and falsy value ke according output araha hai so keep your mind
// let num = 20;//truethy value hai
// if(num){
//     console.log("world"); // ye ayega
// }else{
//     console.log("laptop");
// }

// let fail=false;
// if(fail){
//     console.log("You are passed")
// }else{
//     console.log("You are failed")//ye ayega q ke initial falsy value hai //
// }
// let a=100;//truthy value hai
// let b="100";//truthy value hai
//dono ke dono condition sahi hai//
// if(a && b){
//     console.log("checkedIn...............")
// }else{
//     console.log("Checkout.............")
// }

//yaha pe jo compare ho arah hai truthy aur falsy  based pe//
//finally output ayega  checkedIn
// let a=100;
// if(a){
//       console.log("checkedIn...............")
// }else{
//     console.log("Checkout......................")
// }

// let a=true;
// let b=false;
// console.log(a && b);//

// let b=0;
// let c=1;
// console.log(b && c);

// let b="world";
// let c="0";
// console.log(b && c);
 
//  let letter= "A";
//  let word="apple";
//  if(letter && word){
//     console.log("say")

//  }else{
//     console.log("Hii")
//  }

// let a=0;
// let b="123";
// if(a && b){
//     console.log("Mai hu truthy value")
// }else{
//     console.log("Mai too hu bhai falsy value!")
// }

// console.log(0 && true);//falsey value hai 0; aur && AND operator first falsy value ko dekhta hai aur next ko check he nahi kya direct output//

// let str="world";
// let num=1000;
// console.log(str && num);//1000;
// let ab="abcd";

// let nb=Number(ab);
// console.log(nb);
// console.log(typeof(nb));

// let str="hello";

// // let cntnum=Number(str);
// // console.log(cntnum);

// let cntnum= isNaN(str)
// console.log(cntnum)

// if(cntnum){
//     console.log("Mobile")
// }else{
//     console.log("iphone17-Pro")
// }
// ........./|| OR operators..................................
// onsole.log(null || 0);//0 
// console.log(null || undefined);//undefined/
// console.log(1 || undefined);//1;;
// console.log({} || undefined);//undefined;;true {}
// console.log([] || 1);//[] ye ayega
// console.log(undefined || "0");;// 0 ayega//
// console.log("abcd" || 1.2);//true abcd;;
// console.log("" || 1);//1
// console.log(false || true);//true ayega
// console.log(true || false);;//true ayega
// console.log("" || undefined);//undefined;
// console.log({}|| []);;//{}
// console.log([]||{})
// console.log({}|| null);//{}
// console.log("Hello, World!");
// let letter='A';
// let word="abcd";
// yaha small sa code me dono truthy value hai agar dekhne se too and so || first truthy value dekhte he return kardeta hain//islye yaha pe output milega yes i am true
if(letter || word){
    console.log("yes i am true")
}else{
    console.log("yes i am false");
}
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// 

// let str="abc";
// let nm=Number(str);//NAN//false
// console.log(nm)//number
//false// aa yaah

// if(nm){
//     console.log("yes i am online")
// }else{
//     console.log("yes i am offline")// yes i am offline
// }
//.........inNaN....... 
//True dega
// let str="abc";
// let nm=Number(str);//NAN//false
// console.log(nm)//number

// if(nm || isNaN(str)){
//     console.log("yes i am online")//yes i am online//
// }else{
//     console.log("yes i am offline")//
// }

// let num=100;
// console.log(typeof(num))
// let str=String(num);
// console.log(str);

// console.log(typeof(str))

// if(str || undefined){
//     console.log("Yes bhai you are correct!")// ye output ayega

// }else{
//     console.log("Bhai app wrong ho!");
// }
//......................////////////////////////////.................

// let str="hellow";
// let abc=parseFloat(str);
// // // console.log(abc)//NaN dega but ye false hai avi aur jaab mai abc and isNaN(str) ko || ishe compare karta hu taab v ye first truthy value dekhega Aagar mila to true return karega matlab if() wala code output ayega But agar inko nahi mila truthy taab ye next else wala part output dega...

// if(abc || isNaN(str)){
//     console.log("Flower ayega true hone se")//ye ayega
// }else{
//     console.log("sunflower ayega aga false hoga tooo......");
// }

// let num=100;
// console.log(typeof(num))
// let str=String(num);
// console.log(str);

// console.log(typeof(str))

// if(str || parseFloat(str)){
//     console.log("Yes bhai you are correct!")// ye output ayega

// }else{
//     console.log("Bhai app wrong ho!");
// }

///................../////////////////////...................
// let str="hellow";
// let abc=parseFloat(str);
// // // console.log(abc)//NaN dega but ye false hai avi aur jaab mai abc and isNaN(str) ko || ishe compare karta hu taab v ye first truthy value dekhega Aagar mila to true return karega matlab if() wala code output ayega But agar inko nahi mila truthy taab ye next else wala part output dega...

// // else wala part output islye aye q ke ! lagne se true ko false aur false ko true baana deta hai 
// if(abc || !isNaN(str)){
//     console.log("Flower ayega true hone se")
// }else{
//     console.log("sunflower ayega aga false hoga tooo......");//ye ayega 

// }

// ! Not operators.. inko .........................../////////////////////////,,,,,,,,,,,,,,,,,,,,,,,,,,
//! not operators ka matlab hota hai javascripts me ke agar true hai too false kardega aur agr false ko true kardrta hai //

// let str="afroz";//string hai// this is truthy value 
// // if(str){
// //     console.log("yes bro tell me")
// // }else{
// //     console.log("yes You can do it bro")

// // }

// if(!str){
//     console.log("yes bro tell me")
//  }else{
//     console.log("yes You can do it bro")//////////ye ayega output//

// }
