// mai number ko string me v convert kar sakta hu aur string ko number me v convert kar sakta hu//
//string ka matlab suppose like let name="afroz" ye ek string hai aur inka type v string hai //
//let num="123" ye v ek string hai //aur iska type check karte hain too string ayega //
// let num="123";
// console.log(typeof(num));//string 

// String///
// let name="world";
// console.log(name)//ye ek string hai but kaise pata kare ke string hai /// ek method hai 
//typeof();;
// console.log(typeof(name));//string type and primitive data type 

// let a=null;
//  let cc=typeof(a);//object hai
//  console.log(cc);
// let num="1234";
// console.log(num);//string hai//
// console.log(typeof(num));

// let obj={
//     name:"",
//     age:13,
//     id:'1'
// };
// console.log(obj);//{name:"", age:13, id:'1'}
// console.log(typeof(obj));


// if(a || !obj){
//     console.log("haam bhai tum true hoo!")
// }else{
//     console.log("bhai tum fraud kar raha hai : false hai")
// }
// let tt=true;
// console.log(typeof(tt));
// let ff=false;
// console.log(typeof(ff));

// let strings="abcd"; //strings hai /// hamesh yaad rakhna jaab v string study karte ho to mind me rakha ke first length //
// let str="123456789123456789123456789";
//  let at=str.length;
//  console.log(at);
 
//  let ab= "letter" + 5;
//  console.log(typeof(ab));
//  console.log(ab)

//  if(ab){
//     console.log("hiii")
//  }else{
//     console.log("gagagaga")
//  }

//  if(ab || true){
//     console.log("hellow");
//  }else{
//     console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
//  }
 
//  let letters="afroz alam";
// let final=letters.length;
// console.log(final);

// ...............//////////////////////////////...........................//

//ek method hai upper case ;;
// let small="abcd";//truthy value;
//abcd ko capital letter me convert karna hain too muje toUpperCase() ka used karna hoga;;

// let newletter= small.toUpperCase();
// console.log(newletter);// "ABCD";;//truthy value;

// if(newletter && false){
//     console.log(" Agar true aya to :This is  capital letter  ABCD ")
// }else{
//     console.log("Agar false aya : This is a small letter")
// }


// let ab="ABCD";
// console.log(typeof(ab))//string//
// let samll= ab.toLowerCase();
// console.log(samll);
// console.log(typeof(samll));//string


// console.log(false || true)//true
// console.log(false || 0 || undefined || Symbol); [function: Symbol]
// console.log(true && "undefine" && "null" && true && undefined && null) //undefine ayega //

// if(String){
//     console.log("this is truthy value ")
// }else{
//     console.log("this is falsey value");
// }
// if(ab && samll){
//     console.log("Dono equal hai to : too Afroz")
// }else{
//     console.log("Dono Equal nahi hai to : Alam  ")
// }


// Agar ham koyi v world lete hai aur start karte hai Hellow and end karte hai World se okay ab mai check karna chata hu ke mai start kar raha hu to wo really me Hellow se kar raha hu aur jo end kar raha hu to wo World se?
// let dunya="Hellow World";
// let checkLetters= dunya.startsWith("Hellow");
// console.log(checkLetters);
// let checkLetters =dunya.endsWith("World");
// console.log(checkLetters);//true; q ke endsWith() method ka matlab he hai ke user xyx ne agar ek string variable bana raha hai aur end kar raha hai whi letter se jo string variable me dia tavi true dega >Niche example likh dia hai//
// ............../////////////////////////.....................
// String Methods — bahut important!"
// let str= "Hellow World";
// console.log(str.toUpperCase());      // "HELLO WORLD"
// console.log(str.toLowerCase());      // "hello world"
// console.log(str.includes("World"));  // true
// console.log(str.includes("world"));  // false — case sensitive hai
// console.log(str.startsWith("Hello")); // true
// console.log(str.endsWith("World"));   // true