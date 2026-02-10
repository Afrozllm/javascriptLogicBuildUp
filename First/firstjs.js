
// let A=100;
// let B="200"

// if(A==B || B==A){
//     console.log("Hellow everyone welcome to js1");
// }else{
//     console.log("Hellow everyone welcome to js2")
// }
// console.log(!false);//agar single not ! used karte ho to hame ye true dega  but agar ham Double ! ka used karte hai to  false ka  dega 
// console.log(!false);
// console.log(!true);
// console.log(!false);;//

// truthy and falsy value the condition of AND && and OR ||   operators//

// let a=100;
// let b=100;
// if(a==b && b==a){
//     console.log("100");
// }else{
//     console.log("200")
// }

//....................................-----------------------------........................................ //
let a=100;
let b=100;
// if(a==b && b==a){
//     console.log("100");//Because AND operator will be check the both are same thats way its output 100;
    
// }else{
//     console.log("200")
// }


// console.log(" " &&  "World"); World isliye outcome aya q ke AND operators truthy value ko first dekhta hai aur left  side se .Too yaha pe left side me falsy value hai islye ye move hoke next me chala gaya jo ke World ek truthy value hain islye Answer aya World

// console.log(" 0" && "Letter");// Yaha pe v same cheez apply huwa //

// AND operaors ka kaam he hai true hona zaruri hai both side me too yaha pe truthy aur falsy ka khel hotaa hai 

// console.log("123" && " World");/// Yaha pe dono truthy value hai but AND operators ka kaam hai ke agar unko first truthy value me to ye mostly next wala right side wala he return kar deta hain .too isliye zo hai muje World mela

// AND operators//
// Both side true raha too outcome True dega.
// One side true raha aur dosra side false raha too False Dega.
// Both side false raha too outcome False Dega.
// One Side False hai aur One side true hai too outcome dega False he.

// console.log("0" && 1);//1 because yaha pe AND operators hai q ke  AND operators KA RULES HAI KE DONO TRUE VALUE RAHEGA TOO FIRST (next RIGHT SIDE HE OUTCOME AYEGA) result.
// console.log("Mobile" && "Laptop"); //dono truthy value hain islye yaha pe Leptop outcome hoga q ke and operators ka kaam he hai ke wo rightside wale ko moslty ata hai 

// console.log( 1 && '0');
// console.log("1" && 0 ); yaha pe 0 islye arah hai q ke ek truthy value hai aur ek false value hai aur AND  operators ka rules hai ke agar ek true huwa aur ek false huwa to false return karega too islye 0 already   falsy value hai aur AND operators false he return karega 

// console.log("0" && null);
// console.log("-1" && null);

// OR operators
// Both side True hoga to outcome result True milega.
// Left side True hai and Right Side False value hai taab result hoga True outcome//
//first false value hain aur second value true huwa taab outcome False dega reuslt//
// Both side agr False value ho tav outcome result dega False //


// console.log("0" || 1);//0 because yaha pe OR operators hai q ke OR operators KA RULES HAI KE DONO TRUE VALUE RAHEGA TOO FIRST (LEFT SIDE HE OUTCOME AYEGA) result

// console.log(0 || "World");//
// console.log( "world" || 0);
// console.log(0 || "World");//
// console.log( "World" || 0);
// console.log("Worlds" && "Hellow");
// console.log( undefined || "0");ye first truthy value ko dekhta hain
// console.log(undefined && "0"); ye first target karta hai false value ko 
// console.log(" " && "0");yaha pe dono truthy value hai aur jaab truthy value hoga dono me aur AND operators me too next right side wala output ayega.
// console.log(undefined && null)//undefine ayega 100%
// console.log( false || "0");


// practices//


if ("false") {
    console.log("This is true");//this is true because non-emty string is truthy value//
} else {
    console.log("this is false");
}
