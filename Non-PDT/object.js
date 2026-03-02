// Function inside the object is called method//
//Nested obejct learning here//
//how to access the nested-value in objects through dot qand barcket notion//
// // // let obj={
// // //     fun(){
// // //         console.log("Muje sencond fun ne override kar dia yaar!")
// // //     },
// // //     fun(){
// // //         console.log("Mai first wale fun ko override kar ke taab ayah hu!")
// // //     }
// // // }
// // // console.log(obj.fun());
// // // console.log(obj.fun());

// // let person = {
// //     fname:"Saurvb",
// //     lname:"Kumar",

// //     fun:()=>{
// //         let fname= "MD"
// //         console.log(this.fname);//arrow fun me this window object me belong karta hai
// //         console.log(fname);
// //         console.log(this)//

// //     },
// //     funs(){
// //         console.log(this.fname);
// //         console.log(this)

// //     }

// // }

// // console.log(person.fun());
// // // person.fun()
// // console.log(person.funs())

// // //  person.fname="asif";
// // // // console.log(person.fname)
// // // // console.log(person.lname)
// // // console.log(person["fname"]);
// // // // person["fname"]
// // // console.log(person["lname"]);
// //Basically this keywords hai javascript me isnka kaam 3 case me hota hai //
// //regular object me ->this ka kaam kya hota hai//

// // let abc="hellow"
// // const arr={
// //     bag:"plastic",
// // }
// // let student = {
// //     fx:arr,
    
// // bcd:abc,
// //     marks: 70,
// //     fun: function(){
// //         console.log(this); // student object
// //         console.log(this.marks); // 70
// //         console.log(abc);//hellow
// //         console.log(this.bcd);//hellow
// //         console.log(arr.bag);//
// //     }
// // }
// // student.fun();


// let student={
//     fname:"Afroz",
//     fun: ()=>{
//         console.log(this.name);//undefined//q ke arrow function me khud ka this nahi hota hai ye jo this bahar se uthata hai

//     },
//     test: function(){
//         console.log(this.fname);//
//     }
// }
// console.log(student.fun());//undefined
// console.log(student.test());//Afroz

let obje ={
    language:"Jaascript",
    obj1:{
        address:"Hatwar",
        pin:733209,
         
         obj3:{
            languages:"Solidity",
            mentor:"Mizan Rahi"
         }
    },
    obje2:{
        state:"West Bengal",
        D_sitrict:"Uttar Dinajpur"
    }
}

//dot
//[];
//DOT//
// console.log(obje.obj1.address);
// console.log(obje.obj1.pin);
// console.log(obje.obj1.obj3.languages);
// console.log(obje.obj1.obj3.mentor);
//[];

console.log(obje.obj1["address"])
console.log(obje.obj1["pin"]);
console.log(obje.obj1.obj3["languages"])
console.log(obje.obj1.obj3["mentor"])

//////////////////////OBJECTS IN JAVASCRIPT////////////////////
// // // let obj={

// // //     str:"Mera name Afroz alam hai",
// // //     num:[1,2,3,4,5,6,7,8,9],
// // //     array:["Apple","Banana","Oranage"],
// // //     obj1:{
// // //         nums:[1,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        
        
// // //     }
    


// // // }
// // // console.log(obj.array.length)//3
// // // let abc=obj.array.indexOf("Banana");
// // // console.log(abc);
// // // //index ->2 hoga
// // // // if(obj.array.indexOf(1) === "Banana"){
// // // //     console.log("Yes avialable hai index 1 pe Banana!")
// // // // }else{
// // // //     console.log("Nahi hai index 1 pe Banana ! wrong hai!")//ye ayega q ke index hamesh numbee type and Banana is a string islye false ata//
// // // // }


// // // // if(obj.array.indexOf(1) === 1){
// // // //     console.log("Yes avialable hai index 1 pe Banana!")
// // // // }else{
// // // //     console.log("Nahi hai index 1 pe Banana ! wrong hai!")//ye ayega q ke index hamesh numbee type and Banana is a string islye false ata//
// // // // }





// // // // if(obj.array.indexOf("Banana") === 1){
// // // //     console.log("Yes avialable hai index 1 pe Banana!")//ye ayega output
// // // // }else{
// // // //     console.log("Nahi hai index 1 pe Banana ! wrong hai!")
// // // // }


// // // // if(obj.array.indexOf(1) === "1"){
// // // //     console.log("Yes avialable hai index 1 pe Banana!")
// // // // }else{
// // // //     console.log("Nahi hai index 1 pe Banana ! wrong hai!")//ye ayega q ke index hamesh numbee type and Banana is a string islye false ata//
// // // // }
// // // //muje true Banana hai to hum ! ye used kar sakte hai//
// // // if(obj.array.indexOf(1) === !isNaN("1")){
// // //     console.log("Yes avialable hai index 1 pe Banana!")
// // // }else{
// // //     console.log("Nahi hai index 1 pe Banana ! wrong hai!")//ye ayega q ke index hamesh numbee type and Banana is a string islye false ata//
// // // }







// // // // console.log(obj.str.includes("Afroz"))
// // // let final=obj.str.includes("Afroz");
// // // console.log(typeof(final));//true

// // // // if(final == true){
// // // //     console.log("Yes its avialable")//ye ayega
// // // // }else{
// // // //     console.log("Not Avialable!");
// // // // }
// // // if(final && false){
// // //     console.log("Yes its avialable")//ye ayega
// // // }else{
// // //     console.log("Not Avialable!");
// // // }

// // //object (complex data)
// // const person = {
// //     friends:[
// //         {name:"Amit",Age:27},
// //         {name:"Sumit",Age:32},
        
        
        
// //     ]
// // }


// // console.log(person.friends[0].name);//Amit
// // console.log(person.friends[1].Age);//Amit


// //object me sab ek sath//
// const obj = {
//     //property simple key value//
//     fname:"Afroz",
//     lname:"Alam",


//     //method//
//     fun(){
//         console.log(`My first Name is : ${fname}  and Last name : ${lname}` )

//     },
//     //nested-objects//

//     obje1 :{
//         fname:"Alm",
//         lname:"Afroz",
//         obj2:{
//             l_name:"Alam",
//             f_name:"AFroz",
//         },

//         num:[1,2,3,4],
//         arr:[
//             {name:"Amit"},
//             {name:"Adil"}
//         ]

//     }

// }

// const student = {
//   name: "Rahul",                    // property
//   age: 20,
//   address: {                        // nested object
//     city: "Delhi"
//   },
//   subjects: ["Math", "Science"],    // array
//   friends: [                        // array of objects
//     { name: "Amit" }
//   ],
//   greet() {                         // method
//     return "Hi, I am " + this.name;
//   }
// };

// // Sab access karo:
// console.log(student.name);              // "Rahul"
// console.log(student.address.city);      // "Delhi"
// console.log(student.subjects[1]);       // "Science"
// console.log(student.friends[0].name);   // "Amit"
// console.log(student.greet());           // "Hi, I am Rahul









////////////////Objects in javascript////////////////////
//constructor function object bana sakte hain//

function andsand(name,age,fun){
    this.name = name;
    this.age = age;
    this.fun =fun;





}
const p1=  new andsand("abcd",23,"xyz");
console.log(p1);

console.log(Object.keys(p1));//key mila array me
console.log(Object.values(p1))//valuse milega array me//
console.log(Object.entries(p1));//dono milega
console.log(Object.entries(p1)[2][1]);//dono milega





//hum object class se v banaskte hain//

// class firstobj {
//     constructor(name,age,address){
//         this.name = name;
//         this.age = age;
//         this.address =address
//     }


// }

// // const p1= new firstobj("Haidar",23,"Kishanganj")
// const p2= new firstobj("Faizan",22,"Hydrabad")
// const p3= new firstobj("Faiyaz",43,"Mumbai")
// const p4= new firstobj("Ayaz",32,"Delhi")
// // console.log(p1)
// console.log(p2);
// console.log(p3)
// console.log(p4);
//object-key()

// let abc= Object.key(firstobj);
// console.log(abc);





















