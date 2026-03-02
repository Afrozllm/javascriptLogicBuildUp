// // function obj(name,age){
// //     this.name=name;
// //     this.age=age;
// //     this.drive= function abc(){return "Afroz alam"}

// // }

// // let s1=new obj("Asif",12);
// // let s2= Object.keys(s1).length;//[name,age,drive]
// // console.log(s2)
// // console.log(s1);


// // class obje{
// //     constructor(name,age){
// //         this.name=name;
// //         this.age=age;
        
        
// //     }
// //     fun()
// //     {

// //     }
// // }
// //   let s3=new obje("afroz",12);
// //   console.log(Object.keys(s3).length);//[name,age];





// // Constructor function me method count hoti thi, lekin class me nahi!


// function student(name){
//     this.name =name;
//     this.fun= function abc(){

//     }
//      function fun(){

//     }

// }

// // Object.keys
// let s1=new student("adil");
// console.log(Object.keys(s1).length);//2

// class  car{
//     constructor(name){
//         this.name=name;
//     }
//     abc(){

//     }
// }

// let c1= new car("BMW");
// console.log(Object.keys(c1).length);//1



//Inheritance Object//

// class parent{
//     constructor(name){

//     this.name =name;
//     }
// }

// class child extends parent{
//     constructor(name ,age){
//         super(name)
//         this.age=age
//     }
// }



// const both= new parent("asif",23);
// console.log(both)
// let lgt=Object.keys(both).length;
// let lgt1=Object.values(both).length;

// console.log(lgt);
// console.log(lgt1);





// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   fun1(name,age) {
//     console.log(name)
//     console.log(age)
//     console.log(`Mai first function hu in class object me  ${this.age} ${this.name}`);

//   }
//   fun2() {
//     console.log("Mai second function hu in class object me",this.age   +   this.name);
//   }
// }

// const s1 = new Student("Rahul", 25);

// s1.fun1(); // "Mai first function hu in class object me" ✅
// s1.fun2(); // "Mai second function hu in class object me" ✅




class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Normal Function inside method:
  normalTest() {
    function innerNormal() {
    

      console.log(this.name); // ❌ undefined — this = window/undefined
    }
    innerNormal();
  }

  // Arrow Function inside method:
  arrowTest() {
    const innerArrow = () => {
      console.log(this.name); // ✅ "Rahul" — this bahar se liya (arrowTest ka this)
    }
    innerArrow();
  }
}

const s1 = new Student("Rahul", 25);
s1.normalTest(); // undefined ❌
s1.arrowTest();  // "Rahul" ✅


























































































