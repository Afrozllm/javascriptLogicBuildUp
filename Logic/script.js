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

// let firstname="sauraB";
// if(firstname.includes("saurab") !== -1 &&  firstname.endsWith("b") ){
//     console.log("Yes This boys name is Saurab and the name endings with samll b");

// }else{
//     console.log("no you are not liste name here ! sorry are you not enter! this game");

// }
// replace()// method jo ke inbuilt hai js ka too ham isko used karte hai jaab muje string me koi v word replace karna ho too ham isko used kar sakte hai //
//real-example//
//=== ye assignment operator checke karta hai dono data type and ==ye check karta hai equal hai ya nahi data type//

// let token="memcoin";
// let newtoken=token.replace("memcoin","bitcoin");

// if(newtoken == "bitcoin"){
//     console.log("yes this is bitcoin")
// }else{
//     console.log("no this is not bitcoin");
// }

// let num=100;
// let num1="100";
// if(Symbol(num)== Symbol(num1)){
//     console.log("yes both are data are same ")
// }else{
//     console.log("no both are not same data type");//ye dega output q ke symbol dono ka laga lag hai//
// }
//Agar muje isme true dekhna hai mai Symbol.for() method me dono ko daal dunga//
// let num=100;
// let num1="100";
// if(Symbol.for(num)== Symbol.for(num1)){
//     console.log("yes both are data are same ")
// }else{
//     console.log("no both are not same data type");//ye dega output q ke symbol dono ka laga lag hai//
// }
//.............////////////.............
//! i iska used kia //
let num=100;
let num1="100";
if(Symbol.for(num) !== Symbol.for(num1)){
    console.log("yes both are data are same ")
}else{
    console.log("no both are not same data type");//ye dega output q ke symbol dono ka laga lag hai//
}

///Symbol object ko unique bannata hai//

let obj={};
//symbol object ko unique bannata hai//
let name= Symbol("name");
let name1=Symbol("name");
let age=Symbol("age");

obj[name]="afoz";
 obj[name1]="Alam";
 obj[age]='32';

console.log(obj[name]);
console.log(obj[name1]);
console.log(obj[age]);

// Object///
let obj={

    str:"Mera name Afroz alam hai",
    num:[1,2,3,4,5,6,7,8,9],
    array:["Apple","Banana","Oranage"],
    obj1:{
        nums:[1,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        
        
    }
    


}
// console.log(obj.str.includes("Afroz"))
let final=obj.str.includes("Afroz");
console.log(typeof(final));//true

// if(final == true){
//     console.log("Yes its avialable")//ye ayega
// }else{
//     console.log("Not Avialable!");
// }
if(final && false){
    console.log("Yes its avialable")//ye ayega
}else{
    console.log("Not Avialable!");
}

////Objects/////////////
// let Misterybox={
//     Token: "BTC",
//     price : '$68202',
//     Chain:"BlockChain"


// }
// console.log(Misterybox);
// // let mstbox=Misterybox.length;
// // console.log(mstbox);//undefined
// //hum nikal sakte hai//
// //Object.key() ye hamee array me deeta hain//

// let lgth= Object.keys(Misterybox);
// console.log(lgth);
// console.log(typeof(lgth));
// let final=lgth.length;
// console.log(final);
// console.log(typeof(final));

// // console.log(lgth && final);//

// let lgth1= Object.values(Misterybox);
// console.log(lgth1);
// console.log(lgth1[0]);
// console.log(lgth1.indexOf("BlockChain"));//2


//object-key// logic//

const furits = {
    apple: 3,
    mango: 7,
    orange: 9

}
let fts=Object.keys(furits);//yaha se muje mila array key ,apple,mango,orange ,length 3
if(fts.length === 0){
    console.log("Empty items");
    
}else{
    console.log("Total  fruits"  + Object.keys(fts).length  +  "itmes hain" )
}