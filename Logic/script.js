//string//
//length//jaab v string ka muje length dekhna ho ya kitna total character hai string me jo main ne define kia hai too hum length ka used kar sakte //

//include//jaav v ham ek string me words dhunna ho taab ham used kar sakte hai aur agar charcter hai ki nahi string Soo Agar hai too true dega but agar nahi hai character to false dega; or  mil //
// jaise example
// let str="mera name afroz hai";
// let newstr=str.includes("E");//false
// console.log(newstr);
// let newstr1=str.includes("afroz");
// console.log(newstr1)//true
//indexOf// method jo ke inbuilt hai js ka .Too ham isko used karte hai jaab muje koti v string ka index nikalna ho tav kar sakte hai //
//example//
// let str="iloveindia";
// let newstr=str.indexOf("o");//2
//2 ye jo 2 mila muje too ye ek number hai //

// console.log(newstr)
//startWith();
//agar ek string start hota hai H letter se start hota hai tab aap isko used karoge too true dega //
//exaple//
// let letter="abcdefgh";
// let newl=letter.startsWith("a");
// console.log(newl);//true//1

// if(newl == 1){
//     console.log("yes equal")
// }else{
//     console.log("Not Equal!");
// }
// //endWith();//
// let xyz="buds";
// let xyx1=xyz.startsWith("a");
// console.log(xyx1);//false 0
// let num=xyx1.Number()

// if(xyx1 == "0"){
//     console.log("Its true ")
// }else{
//     console.log("its false");//false q ke 0 aur 1 equal nahi hai//
// }
// // console.log(1 == "0");false
//endWith//
//jo bhi variable  strings xyz  baanye hai aur isme jo chracte last me usde kia hu //
//exmple// simple
//logic// hai ke jo v user ka name last b se end hota hai bas usi ko entry dena //

let firstname="sauraB";
if(firstname.includes("saurab") !== -1 &&  firstname.endsWith("b") ){
    console.log("Yes This boys name is Saurab and the name endings with samll b");

}else{
    console.log("no you are not liste name here ! sorry are you not enter! this game");

}