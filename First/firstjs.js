
// // let A=100;
// // let B="200"

// // if(A==B || B==A){
// //     console.log("Hellow everyone welcome to js1");
// // }else{
// //     console.log("Hellow everyone welcome to js2")
// // }
// // console.log(!false);//agar single not ! used karte ho to hame ye true dega  but agar ham Double ! ka used karte hai to  false ka  dega 
// // console.log(!false);
// // console.log(!true);
// // console.log(!false);;//

// // truthy and falsy value the condition of AND && and OR ||   operators//

// // let a=100;
// // let b=100;
// // if(a==b && b==a){
// //     console.log("100");
// // }else{
// //     console.log("200")
// // }

// //....................................-----------------------------........................................ //
// let a=100;
// let b=100;
// // if(a==b && b==a){
// //     console.log("100");//Because AND operator will be check the both are same thats way its output 100;
    
// // }else{
// //     console.log("200")
// // }


// // console.log(" " &&  "World"); World isliye outcome aya q ke AND operators truthy value ko first dekhta hai aur left  side se .Too yaha pe left side me falsy value hai islye ye move hoke next me chala gaya jo ke World ek truthy value hain islye Answer aya World

// // console.log(" 0" && "Letter");// Yaha pe v same cheez apply huwa //

// // AND operaors ka kaam he hai true hona zaruri hai both side me too yaha pe truthy aur falsy ka khel hotaa hai 

// // console.log("123" && " World");/// Yaha pe dono truthy value hai but AND operators ka kaam hai ke agar unko first truthy value me to ye mostly next wala right side wala he return kar deta hain .too isliye zo hai muje World mela

// // AND operators//
// // Both side true raha too outcome True dega.
// // One side true raha aur dosra side false raha too False Dega.
// // Both side false raha too outcome False Dega.
// // One Side False hai aur One side true hai too outcome dega False he.

// // console.log("0" && 1);//1 because yaha pe AND operators hai q ke  AND operators KA RULES HAI KE DONO TRUE VALUE RAHEGA TOO FIRST (next RIGHT SIDE HE OUTCOME AYEGA) result.
// // console.log("Mobile" && "Laptop"); //dono truthy value hain islye yaha pe Leptop outcome hoga q ke and operators ka kaam he hai ke wo rightside wale ko moslty ata hai 

// // console.log( 1 && '0');
// // console.log("1" && 0 ); yaha pe 0 islye arah hai q ke ek truthy value hai aur ek false value hai aur AND  operators ka rules hai ke agar ek true huwa aur ek false huwa to false return karega too islye 0 already   falsy value hai aur AND operators false he return karega 

// // console.log("0" && null);
// // console.log("-1" && null);

// // OR operators
// // Both side True hoga to outcome result True milega.
// // Left side True hai and Right Side False value hai taab result hoga True outcome//
// //first false value hain aur second value true huwa taab outcome False dega reuslt//
// // Both side agr False value ho tav outcome result dega False //


// // console.log("0" || 1);//0 because yaha pe OR operators hai q ke OR operators KA RULES HAI KE DONO TRUE VALUE RAHEGA TOO FIRST (LEFT SIDE HE OUTCOME AYEGA) result

// // console.log(0 || "World");//
// // console.log( "world" || 0);
// // console.log(0 || "World");//
// // console.log( "World" || 0);
// // console.log("Worlds" && "Hellow");
// // console.log( undefined || "0");ye first truthy value ko dekhta hain
// // console.log(undefined && "0"); ye first target karta hai false value ko 
// // console.log(" " && "0");yaha pe dono truthy value hai aur jaab truthy value hoga dono me aur AND operators me too next right side wala output ayega.
// // console.log(undefined && null)//undefine ayega 100%
// // console.log( false || "0");


// // practices//


// // if ("false") {
// //     console.log("This is true");//this is true because non-emty string is truthy value//
// // } else {
// //     console.log("this is false");

// // }

// JavaScript me || (OR) operator ke saath agar dono values falsy hain, to output me pehli falsy value return hoti hai.
// Example:
// javascriptconsole.log(false || null);     // Output: null
// console.log(0 || "");           // Output: ""
// console.log(null || undefined); // Output: undefined
// console.log("" || 0);           // Output: 0
// Kyun aisa hota hai?
// || operator left-to-right evaluate hota hai:

// Agar pehli value truthy hai, to wahi return hoti hai (dusri check bhi nahi hoti)
// Agar pehli value falsy hai, to dusri value check hoti hai aur wahi return hoti hai (chahe wo truthy ho ya falsy)

// Falsy values JavaScript me:

// false
// 0
// "" (empty string)
// null
// undefined
// NaN


// logical  NOT!  operators ke bare me avi padhna hain?
// ! operators ka ruls hai ke agar value true rahega to false vana dega aur agr False rahega to true baana dega//

console.log(!false);//true dega outcome//
console.log(!true)//false dega outcome
console.log(!false);//true
console.log(!true);//false
console.log(!!true);//true
console.log(!!false)//false

// let login=false;

// if(!!login){
//   console.log("Yes You are Logging successfully")
// }else{
//   console.log("Sorry! you are not Logging ")
// }


// let d=false;

// if(!d){
//   console.log("Dark light")
// }else{
//   console.log("White light")
// }


// let a=100;
// if(!a){
//     console.log("False ")
// }else{
//     // console.log("True");//true milega q ke value 100 hai aur 100 truthy value hai islye muje finally true milega
// }

// / let a=100;
// if(!a){
//     console.log("False ")
// }else{
//     console.log("True");
// }

// let alpha="abc";//
// if(alpha){
//   console.log("this is true abc");
// }else{
//   console.log("This is false abc");
// }


// if(!!alpha){
//   console.log("this is true value ")
// }else{
//   console.log("This is false value ABC");
// }


// let N=null; //falsy value

// if(!N){
//   console.log("Agar false value huwa to .....................")
// }else{
//   console.log("Agar truthy value huwa too........................");
// }
// let a=null;
// console.log(!!a);
// let a=100;
// let b="100";
// if(a===b){
//   console.log("true")
// }else{
//   console.log("False")
// }

//  let A=true;
// if(!A){
//   console.log("This is A")
// }else{
//   console.log("this is B");
// }

// Real exaple 
// function ValidateFormInput(email, password) {
//   if(!email){
//     console.log("Email is Required");
//     return false  // ✋ Function yahin ruk jayega aur false return karega
//   }
  
//   if(!password){
//     console.log("Enter your password");
//     return false; // ✋ Function yahin ruk jayega aur false return karega
//   }
  
//   return true; // ✅ Agar sab theek hai, to true return karega
// }
// let result=ValidateFormInput("afrozxyz@123","12345");

// if(result === true){
//     console.log("Form is valid process with submission");

// }else{
//     console.log("Form is invalid ,please correct the errors and try again");
// }