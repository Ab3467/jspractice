// const prompt = require('prompt-sync')();

const { log } = require("document/lib/lang");

//functions

// let fun = (x,y) => { return x+y }
// console.log(fun(1,3)); 



// function fun(){
//     console.log("<3")
// }


// let fun = (Person) =>{
//     console.log(`Hi ${Person.toLowerCase()}`);
// }
// fun(" Ahmad")



// function repeat(num , times) { 
//    let result = ''
//     for(let i=0;i<times;i++){
//        result +=times;

//     }
    
//     console.log(`${num} is ${result}`);
// }
// console.log(repeat('Ahmad',5));


// function isShortsWeather(temperature){
//     if(temperature>= 75)
//     {
//         return true
//     }
//     else{
//         return false
//     }
// }
// cocsole.log(isShortsWeather(56));



// function lastElement(numbers){
//     if(numbers.length===0){
//         return null
//     }
//     else{
//         return numbers[numbers.length-1];
//     }
// }
// console.log(lastElement([1,3,4,5,6,7,8]));



// function capitalize(str){
//     let capitalized = str[0].toUpperCase() + str.slice(1)
//     return capitalized
// }
// console.log(capitalize("ahmad"))


// lexical scope 
// function bankRobbery(){
//   let array = ['Ahmad','ali','alex','ozy'];
//     function helpUs(){
//         for(let help of array){
//             console.log(`${help}  Help me `);
//         }
//     }   
//     helpUs();
// }
// bankRobbery();


// Functions Expressions
// const fun = function(num){
//     return num * num;
// }
// console.log(fun(3)); 



// High order function:
// function callTwice(func){
//     func();
//     func();
// }
// callTwice(NewFun);
// function NewFun(){
//     console.log("Hi This is Ahmad abu bakr");
// }



// Returning functions
// function fun() {
//     let num = Math.random();
//     if (num > 0.5) {
//         return function() {
//             console.log("Good Function");
//         };
//     } else {
//         return function() {
//             console.log("Bad Function");
//         };
//     }
// }

// let func = fun();
// func();



//Callbacks Array methods
//foreach function
// let array = [ 1,2,4,5,7,8]
// let func = function(value,index,array)
// {
// console.log(`a [${index}] = ${value}`);
// }
// array.forEach(func)



// Foreach(used for printing all array elements or printing elements of array)
// let array=[1,2,3,5,6,7,9,10];
// let fun = function (numbers){
//    console.log(`[ ${numbers} ]`);
// }
// array.forEach(fun)


//sum of Array using Foreach
// let array=[1,2,3,4,5,6,7,8];
// let sum = 0;
// array.forEach(element => {
//     sum = sum + element
// });
// console.log(sum)



//count of array elements using foreach
// let array= ['a','b','c','d','e','e','a','b','c']
// let count = {};

// array.forEach(item => {
//      if(count[item]){
//       count[item]++;    
//       }
//      else{
//         count[item] = 1 ;
//      }
     
//     });
//     console.log(count);



// map function( It access ech element of array and store the result in a new array)
// let array= [1,2,4,6,6,7]
// let sum = 0;
// array.map(Element=>{
//   sum = sum + Element
// });
// console.log(sum)



// map function
// let array= [1,2,4,6,6,7];
// let double = array.map(function (num){
//     return num * num
// })
// console.log(double);


//  Arrow function
// let fun = (num) => {
//     return num
// }
// console.log(fun('Ahmad'))


// 
// const object = [
//     {
//      name:"Ahmad",
//      id:'2',
//      gender: 'Male',
//      Array: ['Ahmad','alex','saad'],
//      Array1:[
//         {
//             name1:'Ozair',
//             id1:'24'
//         }
//      ]

//     }
//     ]
// const ob= object.map(obj=>(
//    obj.gender
 
// ))
// console.log(ob);



//setTimeOut cleartimeout 
// let b= setTimeout(() => {
//     console.log('Ahmad');
// }, 3000);

// // clearTimeout(b)
// console.log('Goodby');



//setinterval(same like setTimeout but it shows the output again and again after given interval)
// let sum = ()=>
// {
//  let b= 4+7;
//  console.log(b);
// }
// setInterval(sum, 1000);  // will repaet b after 1 sec again and again 


// Filter (Also a callback function, it checks the condition and stores the result into a new array.)
// let array = [1,2,3,4,5,6,7,8,9,10]
// let arr1 = array.filter(ele=>{
//     return ele%2==0
// })
// console.log(arr1);


//Example 
// let fun =function(names){
//     return names.filter(name=>{
//         return name.length<10
//     })
// }
// console.log(fun(['Ahmad','Alex','johnjbswvibsa','Ahmadabubbakr']));


// Every (also accept a callback function and return always a boolean value)
// let array = [23,53,53,33,54,89]
// let b= array.every(ele=> ele>22)   // if even element is < 22 it will show false
// console.log(b);


// Every Example
// let fun = (nums)=>{
//    return nums.every(num=>{
//     return num >10
//    })
// }
// console.log(fun([10,2,23,4,5,2,90]));


//some
// let array = [23,53,53,33,54,89]
// let b= array.some(ele=> ele>22)   // if even element is < 22 it will show false
// console.log(b);


// reduce( executes  reducer function on element of an array resulting in a single value)
// let array = [23,53,53,33,54,89]
// let b= array.reduce((h1,h2)=> {
//     return h1+h2
// }) 
// console.log(b);


//  Destructuring in js
// let arr = [1,2];
// let [a,b]= arr;
// console.log(a,b);



//Rest keyword
// let arr = [1,2,3,4,5,6,7,8,9]
// let [a,b,c , ...rest]= arr;
// console.log(a,b,c ,rest);



//spread operator
// let array=[1,2,4,5,6]
// let obj = {...array}
// console.log(obj);


// spread in objects
// let obj ={ name: 'ahmad' , id: 4, gender: 'male'}
// let obj1 ={ name: 'ali' , id: 5, gender: 'female'}
// let obj2= {...obj,...obj1};
// console.log(obj2);


//
// let array=[1,2,4,5,6]
// let Array= [3,5,7,8,4,3]
// const b= [...array,...Array]
// console.log(b);


//
// let obj ={ name: 'ahmad' , id: 4, gender: 'male'}
// let obj1 ={ name1: 'ali' , id: 5, gender1: 'female'}
// let obj2= {...obj,...obj1,sap:44352}
// console.log(obj2);



// DOM and BOM(document object model and browser object model)


//parse by value(All the primitive datatypes there occurs pass by value and in derived datatyes
// there occurs pass by reference)
// var fun = (z) =>{
//    z += z;
//    console.log(`Inside function value is ${z}`);  //will give 8
// }
// let z1 = 4;
// console.log(fun(z1));
// console.log(`Outside function value is ${z1}`);    // will return 4



//Pass by reference
// let fun = (arr)=>{
//    arr.shift();        // inside function value
//    return arr
// }

// let array = [ 1,2,3,4,5]   // outside function value will change by changing inside 
// console.log(fun(array));    // print [2,3,4,5]


//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// var container = document.querySelector('#container');                    //accessing id of setion from html
 // var images = document.createElement('img')                              //creating an element inside section
// images.src= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
// var append = container.appendChild(images)                              //appendChild adds a child element inside a parent element
// console.log(append);      



//printing more images
// var container = document.querySelector('#container');
// var url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// for(let i=1;i<200;i++){
//     var images = document.createElement('img')
//     images.src = `${url}${i}.png`
//     container.appendChild(images);
// }






//Eventlistner,click
// var btn = document.getElementById('btn2')
// var btn1= btn.addEventListener('click', function(){
//     alert('Clicked');
// })
// console.log(btn1);



//Eventlistner, dblclick
// var btn = document.getElementById('btn2')
// var btn1= btn.addEventListener('dblclick', function(){      //passing type of event and a function 
//     alert('clicked');
// }) 
// console.log(btn1);



//More about Eventlistner
// function fun(){
//     console.log('Dont Hit me I am telling you');
// }

// var btn = document.getElementById('btn2')
// var btn1= btn.addEventListener('dblclick', function(){      //passing type of event and a function 
//     alert('clicked');
// }) 
// console.log(btn1);
   



//Exercise of changing color using eventlistener
 // const colorBtn = document.getElementById('btn');
  // colorBtn.addEventListener('click', function(){
  //   const r = Math.floor(Math.random() * 255);
  //   const b = Math.floor(Math.random() * 255);
  //   const g = Math.floor(Math.random() * 255);
 
  //   const newColor = `rgb(${r}, ${g}, ${b})`;
  //   document.body.style.backgroundColor = newColor;
  // });