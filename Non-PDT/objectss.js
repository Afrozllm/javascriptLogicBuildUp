 let laptops = {
    num:'123456789',
    letter: 'abcdefgh',
    btn:"F1",
    fun(){
        console.log("The details of " + this.num);
    }

    

 }

 console.log(Object.keys(laptops));//["num","letter","btn"];
 console.log(Object.keys(laptops).length);
 console.log(Object.values(laptops));//[123456789,abcdefgh,F1];
 console.log(Object.entries(laptops));//[[  num:'123456789',  letter: 'abcdefgh', btn:"F1",]]


// /Second...
// constructor function to create a objects in javascripts//

function Ananta_Socity(A,B,C,D,E){
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
    this.E = E;
    // this.F = function (){

    // }
   this. fb= ()=>{
        return "Phone"

    }

}
let ananta_Detaisl= new Ananta_Socity("Block-A","Block-B","Block-C","Block-D", " Block-E");
console.log(typeof(ananta_Detaisl))//object
console.log(ananta_Detaisl);
object-key();;
console.log(Object.keys(ananta_Detaisl));
console.log(Object.keys(Ananta_Socity))//[];
console.log(Object.values(ananta_Detaisl))//["A","B","C","D","E"];
console.log(Object.keys(Ananta_Socity).length);//0
console.log(Object.keys(ananta_Detaisl).length);//6

console.log(Object.values(Ananta_Socity));//[]

// ES6 modarn-javascript objects create class obejct constructor//

class Mobile{
    constructor(name,colour,price,modal,camera ,storage,brand){
        // this.name = "Iphone18-proMx",
        // this.colour = "Cosmic Orange"
        // this.camera ="48MP"
        // this.price = "$2200"
        // this.storage ="264GB"
        this.name = name;
        this.price =price;
        this.storage=storage;
        this.colour = colour;
        this.modal = modal;
        this.camera = camera;

        function xyd(){
            return "driving"
        }
    //    this.brand= ()=>{
    //         console.log("Hellow world"+ this.brand);
    //     }
    }

}

const phone= new Mobile("Iphone18-proMx","$2200","264GB","Iphone18","48MP","Cosmic Orange");
console.log(phone);

console.log(Object.keys(phone))//["name","price","storage","modal","camera","colour"];
console.log(Object.keys(phone).length);//6


/////////////////////////////////////
// let abc= {
//     phone: "Nokia",
//     price:"$110",

//     // fun(){
//     //     console.log(`this is old phone: ${this.phone}  its price : ${this.price}` );
//     //     return ""
//     // }

//     // fun: ()=>{

//     //     console.log(this);
//     //     // console.log(this.phone);//error dega
//     //     return ""
//     // }

// }
// console.log(abc.phone);//"Nokia"
// console.log(abc["phone"])//$120
// console.log(abc.fun())//this is old phone: Nokia  its price : $110


//arrow fun in object//
// console.log(abc.fun())//{}


// Constractor function in objects//

// function car(name,price,model){
//     this.name = name;
//     this.price =price;
//     this.model =model;
//     this.details= function (){
//         console.log(this.name);
//         console.log(this.price);
//         console.log(this.model);


//         ///access brackets []//
//         console.log(this["name"]);
//         console.log(this["price"]);
//         console.log(this["model"]);
//         return ""


//     }

// }

//agar value denaa hai to kaise de name ,price ,model?

// let newcar= new car("BMW","$2200","X6");
// console.log(newcar);
// console.log(car.length);//
//dot se access kia mai//

// console.log(newcar.name);
// console.log(newcar.price);
// console.log(newcar.model);
//brackets se karna hai [];//
// console.log(newcar["name"])
// console.log(newcar["price"]);
// console.log(newcar["model"]);

//Constractor function in object me normal function bana ke key-pair value ko kaise access kare ?
// console.log(newcar.details());//undefined


//ES6 javascripts class object///


//constructor in object//

// class student {
//     constructor(name,age){
//         this.name= name;
//         this.age = age;
//     }

//     fun (){
//         console.log("Mai first function hu in class object me ")
        
//         return ""
//     }

//     fun (){
//         console.log("Mai second function hu in class object me")
//         return ""
//     }
//      fun (){
//         console.log("Mai Third function hu in class object me")
//         return ""
//     }

// }

// const newstudent = new student("Hairdar","23");
// const newstudent1 = new student("Hairdars","22");


// console.log(newstudent);
// console.log(newstudent1);
//ye class object me 2 same name ka function hai normal too first koun sa ayega ?
//ans hai second wala ayega q ke first override hoke second wala ayega//

// let finalone=newstudent.fun();
// console.log(finalone);
//agar dono ko output dekhana hai?

// let s2=newstudent.fun()//
// let s1=newstudent1.fun();//
// let s3=newstudent1.fun();//

// console.log(s1,s2,s3);
//ARROW FUNCTION//




class students{
    constructor(name){
    this.name= name

    };

    maihuarrowfun = ()=>{
        //agar mai name property ko access karu to undefine dega q ke arrow fun me jo yaha this hai wo object ko belong nahi karta //

        console.log(this.name);
        //but tarika hai access karne ka//
        return ""


    }
}

let s1= new students("Afroz");
console.log(s1);
// console.log(s1.length);


 let s2=s1.maihuarrowfun();//"Afroz"
 let s3=s1.maihuarrowfun();//"Afroz"
 let s4=s1.maihuarrowfun();//"Afroz"

 console.log(s2);




