// // // let str="      Hellow world";
// // // let newstr=str.length;
// // // console.log(newstr);
// // // let  str1=str.trim();
// // // console.log(str1);
// // // console.log(str1.length);
// // //startstirm();
// // // let str="          Hellow World";
// // // console.log(str.length);
// // // let newstr=str.trimStart();
// // // console.log(newstr);//Hellow World/
// // // //Hellow World//
// // // let finallg=newstr.length;//12
// // // console.log(finallg);
// // ////////////split()//
// // // let chart="apple";
// // // //array me conver karna hai ?
// // // let newchar=chart.split("");
// // // console.log(newchar);;
// // // chart = "bannana";
// // // console.log(chart);
// // // let newcharts=chart.split(" ,");
// // // console.log(newcharts)
// // //agar muje ek string me character koun sa index pe lia karta hai to ham eaisly kar sakte hai//
// // // let fruits= "Mango";
// // //agar muje pata karna hai ke n koun sa index pe lia karta hai too ham 2 tarike se kar sakte hai //
// // //first hai//
// // // let indexfind=fruits[2];
// // // console.log(indexfind);//n
// // //second tarika hai ke hum charAt method ka used kare//
// // // let findchr=fruits.charAt(2);//n
// // // console.log(findchr);
// // //hum string ka origional string ko change nahi kar sakte hai q ke wo fixed hote hai but re-assign kar sakte hain//
// // // let firstname="Afroz";
// // // firstname[0]="a";
// // // console.log(firstname)
// // // firstname = 'afroz';
// // // console.log(firstname)
// // //BigInt//
// // // let num=123456789123456789123456789n;
// // // let newnum= num + 1; Error/
// // // let newnum= num + 1n;//
// // // console.log(newnum)//123456789123456789123456790n

// // //........................SYMBOL...............
// // //symbol in javascript me sab ko alag alag samaj taa hai jaise //
// // // let num ="12";
// // // let num1= "12";
// // // console.log(Symbol(num));
// // // console.log(Symbol(num1));
// // // console.log(Symbol(num) == Symbol(num1));//false// q ke symbol hamesh alag alag leta hai//


// // //undefine kaab kaab asakta hai//
// // // let a;
// // // console.log(a)//undefined//
// // // function sum(){}
// // // console.log(sum())//undefined
// // // //agar mai retun na karu function sum() me taab v dega //undefined;
// // // //object me name define nahi but mai access karunga tab milega undefined//
// // // let obj={
// // //     age:"20"
// // // }
// // // console.log(obj.name);
// // // //undefined//
// // // //array me v same //
// // // let arr=[1,2,3];
// // // let newindx=arr[3];
// // // console.log(newindx);//undefined//
// // // //typecheck kare too  
// // // console.log(typeof(undefined));//undefined/
// // //........NULL kaab kaab asakta hain...////////////

// // //agar hum variable baana te same vale null rakhde taab//
// // // let num= null;
// // // console.log(num);
// // //agar mai obj create karta hu aur name me agar emty string rakhta hu tab v null hoga//
// // // let obj={
// // //     name: "",
// // //     age:25
// // // }
// // // if(obj.name == false){
// // //     console.log("Mouse ana")
// // // }else{
// // //     console.log("Laptop");
// // // }
// // //agar left-side me null ya fir undefined dia ho to bydefault wala output ayega like//
// // //??
// // // let num1=null;
// // // let num2="1234";
// // // let final=num1 ?? "12345";
// // // console.log(final);

// // //.................NaN KAAB KAAB ATA HAI//
// // //agar hum ek multiply and divided karenge string aur number ko tab asakta hai//
// // // let num=100;
// // // let num1="a";
// // // console.log(num * num1);//NaN dega//

// // let div=100;
// // let b="b";
// // console.log(100 / b);//NaN dega//

// // let num="123";
// // console.log(parseFloat(num));//123
// // console.log(parseFloat(num));//123
// // let str="afroz"

// // console.log(parseFloat(str));//NaN dega//

// // let str="a"
// // let num=100;
// // console.log(str + num)//a100
// // let str="afroz";
// // let num=Number(str);
// // console.log(num);//NaN Dega//

// // let num="123";
// // console.log(parseInt(num));//123

// // let str="abc"

// // console.log(parseInt(str));//NaN DEGA
// // console.log(typeof(null));//object//
// // console.log(typeof(NaN));//number

// // let ab=Number(undefined);//NaN
// // console.log(ab);
// // let bc=Number("10abcd");
// // console.log(bc);//NaN dega
// // let ab=Number(null); //0
// // console.log(ab)

// // let num=Number("afroz123");
// // console.log(num);//NaN
// // let m=Math.floor()
// // console.log(m)//NaN degaa

// ///MATH object//////////

// //round//
// // let num=2.5;
// // let rd=Math.round(num);
// // console.log(rd)

// // let math= Math.random();
// // console.log(math)
// // let m= Math.floor(8.9);
// // console.log(m)

// // let finalnum=Math.floor(Math.random() * 6 + 2);
// // console.log(finalnum);





// // let num=2.1;
// //agar mai 
// // console.log(Math.round(num));//2// 
// // console.log(Math.round(num));//agar muje yaha pe 3 laaana hai to muje 2.1 hai inko 2.5 kana hoga tab ayega 

// // console.log(Math.ceil(num));//3



// // let random = Math.floor(Math.random() * 10) + 2  ;
// // console.log(random);

// //STRING///
// //agar muje koti v string me total kitna character hai too hum nikal sakte hai//
// //like........//
// // let m="Mouse";
// //find karo total kitna letters hai//
// // console.log(m.length);//5
// //ab kitna v bara string ho ham kitna letters hai pata kar sakte hai//
// // let str="afroz";
// //iko capital letter me karna hai too eaisly kar sakte hai//
// // console.log(str.toUpperCase());
// // console.log(str);
// //agar capital letter ko samll letters me karo to v eaisly kar sakte hai//
// //  let l="LAPTOP";
// //  console.log(l.toLowerCase());

// //agar koyi v string hai aur string me jo words start hota hai H se too he true denaa too ham kaise true laa sakte hai//
// // let phone="Mera iphone 17 pro Hai";
// //agar M se start hai ye string taab true dena other waise false//
// // console.log(phone.startsWith("M"));//true degaa q ke M se start hai
// //agar ish string me end hota hai Hai se too true dena//
// // console.log(phone.endsWith("Hai"))//true dega
// // console.log(phone.endsWith("Ha"))//false dega

 
// // replace method();
// //iska kaam hai jo pahle se likha hai usko remove karke jo hum denge wo //
// // let firstname= "MD";
// // console.log(firstname.replace("MD","MD Afroz Alam"));

// // let bharat= "Mera bharat mahan hai";
// // console.log(bharat.replace("mahan hai","1947 me Azad huwa tha "));
// //repeated word string me to kaise replce kare sara //
// let animal="cat cat Cat Dog cat";
// // console.log(animal.replace("cat","Tiger"));
// // console.log(animal.replace(/Cat/i,"AnimalKindom"));
// console.log(animal.replace(/cat/g,"AnimalKindom"));

// // console.log(animal.replace(/Cat/gi,"AnimalKindom"));AnimalKindom AnimalKindom Cat Dog AnimalKindom


// let animals="dog dog dog Dog Tiger Zebra Kangaru";
// console.log(animals.replace(/dog/gi,"Elephant"));//Elephant Elephant Elephant Elephant Tiger Zebra Kangaru

// let animalss="dog dog dog Dog Tiger Zebra Kangaru Dog Dog";//
// // console.log(animalss.replace(/Dog/g,"PetDog"));dog dog dog PetDog Tiger Zebra Kangaru PetDog PetDog

// let electrict="fan fan fan fan fan fan fan fan fan fan Fan Fan Fan Fan";
// console.log(electrict.replace(/fan/gi,"Alex-Bulb"))//Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb Alex-Bulb


//slice method///
//ek string me charcter 10 hai aur muje 5 kar ke 2 baag me karna hai to ham kar sakte hai//
// let lng="javascript";
// console.log(lng.length)

// let firstpart=lng.slice(0,5);//javas
// console.log(firstpart);
// let secondpart=lng.slice(5,10)//cript
// console.log(secondpart)

//indexof method()//
//string variable me muje single charcter ka index nikalna ho to ham eaisly nikal sakte hai//
// let lang="Englishi";
//i ka index kya hai find karo?
// console.log(lang.indexOf("i"));//4
//agar bolde ke poora English ka index nikalo;
// console.log(lang.indexOf("h")); 
//............................include method.................///

// let letter= "AnimalKindom";
//agar ish string me d hai ki nahi pata karna hai too ham kar sakte hai aram se//
// console.log(letter.includes("u"));//false dega
// /* agar string me hum include method used karte hai kisi v string me ke jo ham string me variable lia hai wo words me single leeter ko dekhna ho ya check karna ho ke hai ya nahi hai to hum include method ka use karke pata karte hai agar hai to True dega aur Agar word nahi hai string me aur hum check karte hai too hum ko false dega BUT yahi same cheez index me karenege to -1 dega//  */




// falsey value ///////
//0
//null//
//undefined//
//false//
//NaN
//""
//&& first falsy value ko return karta hai//
//pahle check karega ke false vale hai ki nahi fir true he return kar dega//
console.log(true && false)//false
console.log(false && true);//false
console.log(1 && 0);//0
console.log(0 && "0");//0 false


console.log(true || false);//true dega
console.log("true" || false);//true dega
console.log(0 || 1);//1 ayega true;


if(1){
    console.log("true with Afroz")
}else{
    console.log("false")
}

if("false"){
    console.log("true with mobile")
}else{
    console.lo("False with microphone");
}

if(-1){
    console.log("YEs -1 is truthy value ")
}else{
    console.log("No ")
}

if(0){
    console.log("I am a developer")
}else{
    console.log("I am Blockchain Developer");//ye ayega
}

let str="123";
let fnt=123;
if(str && fnt && 0){
    console.log("Yes i am pro-developer")
}else{
    console.log("No ! I am a junior developer");
}















