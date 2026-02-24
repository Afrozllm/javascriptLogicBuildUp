// //NON-PRIMITIE DATA TYPE///
// //non-primitive data type me ham data store karte hai multiple and isme jo vdata store karte hain wo hote hai key-pair me matlab ek periosn aur us persion ke sare detaisl like name ,age ,id,state,pin,distric,address,qualification,goal,etc//
// let periosn ={
//     F_name:"Md",
//     M_name:"Afroz",
//     Age:"24",
//     State:"WB",
//     Dist:"U/D",
//     Pin:"733209",
//     Address:"Hatwar",
//     Thana:"Chakulia",
//     Police_Station:"Kanki",
// }
// // console.log(periosn);
// //agar muje object me kis v value ko access karna hoga to hum 2 tariki se kar sakte hain//
// //1 dot se 
// //2.[]//
// //1
// console.log(periosn.Age)//24;
// console.log(periosn["Age"]);//24;

//hum object ke inside me jo function baana dete hai usko ham method bolte hain//
//hum object e function v baana sakte hai allow hai;;
//  let student= {

//     name:"Md Afroz Alam",
//     fname:"Hellow Worldsssssssss",
//     fun: function(){
//         // console.log(name)
//          fname = "Hellow world"
//         console.log(`Mere name hai ${this.name}`)
//         console.log(`Mere name hai ${this.fname}`)

//         // return "Mere name hai ",  this.name;
//         return "hellow guys";
        

//     }


//  }
//  console.log(student.fun())

// let obj={
//     name:"afroz",
//     abc(){
//          name= "afrozzzzzzzzzzz";
//         console.log(this.name)
//         return  "Guest"; 
//     }
// }
// console.log(obj.abc());
// console.log(obj.abc());

//basically hum object me 5 cheez bana sakte hai //
//1 simple value//

const obje= {
    name:"afroz",
    age:24,
}
//const me hum value update kar sakte hai//
// obje.name="alam";
// console.log(obje)
//2//method matlab function//
let student = {
    marks:"70",
    id:2,
    funs: function(){
        console.log(`Mera total marks : ${this.marks}`);//
        if(this.marks !== NaN){//true
            console.log("Hellow Brother!")
        }else{
            console.log("Hii Bhai ! Kaise ho?")
        }
        return "Happy";
        

    },
    fun(a,b){
        return a+b;

    }
}
console.log(student.funs());// Mera total marks : 70
console.log(student.fun(2,8)); //10