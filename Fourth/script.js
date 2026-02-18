// string////
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// console.log("Hello, World!");
// 
// let name="santosh"; //first way can i write the string//
// let langu='javascript'; //second way can i write this string//
// let word=`hellow world`;//third way can write a string//
// 
// console.log(typeof(name));//string//
// let num="1234afroz";//string//
// console.log(typeof(num));//string//

// let str="Hellow World";
// let newstr=str.startsWith("Hellow");
// console.log(newstr)//true why ? becasue startsWith method check either includes in the str Hellow start if yes the true;
// let str="Hellow World";
// let newStr= str.startsWith("Hellow");
// console.log(newStr)

// endWith()//
// let num="12345";
// let newnum=num.endsWith("1");
// console.log(newnum);
//includes()//

// let fruits="Apple";
// let newfruits= fruits.includes("b");//
// console.log(newfruits)//false araha hai q ke jo mai string banaya hu and usme check kar raha hu ke fruits string me b name ka koyi v letter hai Too nahi hai islye false aya 

// let letter="something";
// let newletter=letter.includes("some");
// console.log(newletter)//true// ya q pahle wale ko padh ke samaj lo//

// let capital="APpLe0";
// let newcapital=capital.includes("0")
// console.log(newcapital)
// let smalll="abcd"; //truthy v//
// let bigl="ABCD";//truthy v//
// if(smalll && bigl && false){
//     console.log("100")
// }else{
//     console.log("200");
// }


// let smalll="abcd"; //truthy v//
// let bigl="ABCD";//truthy v//
// if(smalll.includes("e") && bigl.includes("D")){
//     console.log("100")//
// }else{
//     console.log("200");
// }
//indexOf//
//agar ek table hai aur table se  pe chairs laga huw hai  aur usme color 9 total  hai. Ab muje dekhna hai ke red no color hai wo kitna number pe hai//

// let table="12345679";
// let lgth=table.length;//8//
// console.log(lgth);

// let newcolour=table.indexOf("6")//7 blue 7th number hai
// console.log(newcolour);

// let Name="Afroz";
//total length=5;
//total name string ka index=4;
///index//
//A->0 index pe hai;
//f->1 index hai
//r-> 2 index hai;
//o->3 index hai
//z-> 4 index hai 
// let findx=Name.indexOf("5");
// console.log(findx);//-1
// let findx=Name.indexOf("o");3// milega 
// console.log(findx);

// let a=2;
// let b="2";
// console.log(a === b);//

// if(Name.indexOf("r") === "2"){
//     console.log("true I am "); //ye ayega true rahne se 
// }else{
//     console.log("false YEs i am");//false rahne se false ayega
// }


// let a=-1;
// if(a){
//     console.log("yes true")
// }else{
//     console.log("False");
// }

// let a="apple";
// let b="bannana";
// console.log(` this apple ${a} and this is ${b}`);

// let words= "laptop afroz alam pen class phone mobile bicke ";
// let newwords=words.length;
// console.log(newwords);//

// let findx= words.indexOf("bicke");
// console.log(findx);

// if(words.indexOf("phone") !== -1){
//     console.log("Yes its avilable! phone")
// }else{
//     console.log("Not avialable phone this string!");
// }




//jaab v hum indexOf() used karte hai string me ye hame position index deta hai matlab kitna number pe hai o words and yaha pe ek logic usde hota hai ke jaab muje index milta hai its means number aur jaab mai main == ke sath compare karta hu ya kisi v ke sath to data type aur number check hota hai taab hum === ye used karte hai //


// let words="afroz alam";
// let total=words.length;
// console.log(total);//string//
// console.log(typeof(total))//number
// let f= words.indexOf("alam");//
// console.log(f);
// console.log(typeof(f));//number


// let alllan= "javascript python c++ Go";
// let lengthtotal=alllan.length;
// console.log(lengthtotal);

// if(alllan.indexOf("python") !== -1){
// console.log("yes avialable ")
// }else{
//     console.log("Not avialable python language please select the language")
// }


// let str="mere name afroz hai";

// console.log(str.indexOf("mere"));//5
// console.log(str.indexOf("name"));//10
// console.log(str.indexOf("afroz"));//15
// console.log(str.indexOf("hai"));//19
// console.log(str.indexOf("alam"))//-1






// .............replace() method..............//
//slice//
// let lg="Javascript";
// total isme length bolo ya letter kitna hai =10
//index=9;

// let lg1=lg.length;
// console.log(lg1);

// //question hai 5 charcter alag alag karna hai//
// let newpice=lg.slice(0,5)
// console.log(newpice);// Javas
// let secondpice=lg.slice(5,10);
// console.log(secondpice);////cript//


// let words="phonenumber";
// // let num=String(words);
// let tw=words.length;//number
// console.log(typeof(tw));
// console.log(tw)
// console.log(words.slice(5))
// //==  double equal to srif value check karta hai bs 
// if(tw == words){
//     console.log("this are equal ")
// }else{
//     console.log("this is wrong!");//ye ayega
// }
//replace//
// let str = "mere name afroz hai";
// //agar replace method srif replace karta hai aur jo new value dete hai wo unke jaga pe baitha deeta hai//

// console.log(str);
// let rp=str.replace("hai" ,"alam")
// console.log(rp);


// let words = "i love cats .Cats are cute. love cats";
// let rpl= words.replace("cats" , "india");
// console.log(rpl);
// 

// //string//
// // let str="Hellow world";
// // let newstr=str.length;
// // console.log(newstr)

// // let small="abcd";
// // let Bigs=small.toUpperCase();
// // // toUpperCase
// // console.log(Bigs);
// // let Capital="ABCDEFGHT";
// // let Small=Capital.toLowerCase();
// // // toUpperCase
// // console.log(Small);


// let str="javascripts";
// console.log(str);//
// console.log(typeof(str))//string
// let newstr=str.includes("false");

// console.log(newstr);;//true
// console.log(typeof(newstr))

// let str=" i love javascripts. I loved India";

// let newstr=str.includes("javascript");
// console.log(typeof(newstr));//true//1
// if(str.includes("javascripts") !== -1){
//     console.log("Yes its avialable !")
// }else{
//     console.log("No ! not avialable !")
// }

// if(1 == -1){
//     console.log("yes")
// }else{
//     console.log("No!")//
// }
 let str=" i love javascripts. I loved India";
 let tl=str.length;
//  console.log(tl);
//  console.log(str.includes("i"));//2
//  console.log(str.includes("love"));//7
//  console.log(str.includes("javascripts"));//20
//  console.log(str.includes("I"));//22//
//  console.log(str.includes("loved"));//28
//  console.log(str.includes("India"));//32
 
console.log(str.indexOf("i"));//2
console.log(typeof(str));
 console.log(str.indexOf("love"));//3
 console.log(str.indexOf("javascripts"));//21
 console.log(str.indexOf("I"));//
 console.log(str.indexOf("loved"));//
//  console.log(str.indexOf(("India"));//32













































