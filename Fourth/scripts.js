//split() methods//
//agar single word hain ya fir sigle character hai to hum array me convert kar sakte hain split method ke throught//
let word="apple";
let newarray=word.split("");
console.log(newarray);//['a','p','p','l','e']aisa array baan jaiga split method()//
let str="hellow world";
let newarr=str.split(" ,");

consile.log(newarr);//['hellow world'];
let lg=newarr.length;
console.log(lg);
console.log(str.split(""));//['h','e','l','l','o','w',' ','w','o','r','l','d']aisa array ban jaiga split method ke throught//
/////////////........................//////////string ke methods///////////////////////////////////////
// let str="                       Hellow                     world                   ";
// console.log(str)
// let leng=str.length;//15
// console.log(leng);//15
// let fitspace=str.trim();
// console.log(fitspace);
// let finalleg=fitspace.length;
// console.log(finalleg);//11
// let str="  mere name afroz hai";
// let newstr=str.length;
// console.log(newstr);
// let sp=str.trim()
// console.log(sp); 
// let dec=sp.length;
// console.log(dec);//
//trim() method me srif space leta hai starting aur ending wala //
//trim() method beech wala space ko nahi leta //
//like
// let a="hellow        world";
// let ab= a.trim();//matlab length kaam hoga but aap try karke dekhna beech wala space ko minimized nahi akrta//
// console.log(ab);
// //space ko v count karta hai //
// let leg=ab.length;
// console.log(leg);
// let love= "I love India";
// console.log(love)
// console.log(love.length);

// let char="  I love india  ";
// console.log(char.length);//16
// let newchar=char.trim();
// let finalleg=newchar.length;

// console.log(finalleg)


// let ab="abcd";
// console.log(ab.indexOf("c"));//2

// //split(); matlab string ko array me dodna//
// //jaise examole//
// let language="Javascript";
// let newlang=language.split("");
// console.log(newlang);
// // conaole.log(language.length);
// // console.log(newlang)
// // console.log(newlang.length);
// let str="cat dog log egg fog";
// console.log(str)
// console.log(str.split(" "))
// if(str.indexOf("log") == "2"){
//     console.log("YEs hai ")
// }else{
//     console.log("No nahi hai !")
// }
// 
// let str="Hellow world";
// let newstr=str.split("");
// console.log(newstr);
// let b=newstr.indexOf("l");//2
// console.log(b)//2
// console.log(newstr.length);

// let newstrs=str.split(" ")
// let c=newstrs.indexOf[0];

// console.log(c)//Hellow (0 index pe hai poora q ke ye ab array me  convert ho gaya hai)
// let c1=newstrs.indexOf[1];
// console.log(c1);//world; same//


// console.log(newstrs)
// console.log(newstr.length);

// padStart,padEnd//
// let id="8";
// let newid=id.padEnd(5,"2")
// console.log(newid);//82222
// let num="92";
// let newnum = num.padStart(4,"0");
// console.log(newnum);//0092;

// let num="92";
// let newnum = num.padStart(14,"7");
// console.log(newnum);//;77777777777792
// /*  */
let str1="Hellow";
console.log(str1[0]);//H 
console.log(str1[1]);//e 
console.log(str1[2]);//l
console.log(str1[3]);//l
console.log(str1[4]);//o
console.log(str1[5]);//w
  


console.log(str1.charAt(0));//H
console.log(str1.charAt(1));//e
console.log(str1.charAt(2));//l
console.log(str1.charAt(3));//l 
console.log(str1.charAt(4));//o 
console.log(str1.charAt(5));//w

// hum original string ko change nahi kar sakte but resssignment kar sakte hai//

let str2="World";

str2[0]="H";
console.log(str2);;
str2 ="H"//work karega
console.log(str2);
