// console.log("Hello");
// console.log("I like pizza");
// window.alert("hello")

// document.getElementById("mh1").innerHTML="Hello, Imran";
// document.getElementById("mp").innerHTML = "Here is a thing on lorem."

// let age=20;
// let price=10.99;
// let gpa=3.0;
// let name = 'Imran'
// console.log(`My age is ${age}`);
// console.log(typeof name);

// let online = true;
// console.log(`${name} is online ${online}`);
// document.getElementById('mp').textContent=`Your name is ${name}`;
// document.getElementById('mh1').textContent=age;
// document.getElementById("pow").textContent=2**2;

//let username;
//username = window.prompt("What is your name?")
//console.log(username);

// document.getElementById("butt").onclick=greet;

// function greet(){

//     let username = document.getElementById("in").value;

//     document.getElementById("h1").textContent = `Hello, ${username}`;
// }

// let roll = window.prompt("What is your roll no?");
// console.log(roll, typeof roll);
// roll = Number(roll);
// console.log(roll,typeof roll);

// let x= "0";
// let y = 'a';
// let z = "";

// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x);
// console.log(y);
// console.log(z);

//const a=12  ;

//Math - A buildin object that provides collection of properties

// let x = Math.max(1,23,6,7,100)

// document.getElementById("out").innerHTML=x

// Random number generation

//let ran = Math.random() // This will generate a number from 0 to 1
//document.getElementById("out").innerHTML = ran

// Generating a number that is between 1 to 100

//ran = Math.floor(Math.random()*100)+1
//document.getElementById("out").innerHTML = ran

//Generating a number that is between min to max
// let min = 1
// let max = 100
// ran = Math.floor(Math.random()*(max-min)) + min
// document.getElementById("out").innerHTML = ran

// * to check if a checkbox has been checked or not use checked element

// const check1 = document.getElementById("check1");
// const check2 = document.getElementById("check2");
// const check3 = document.getElementById("check3");
// const submit = document.getElementById("submit");
// const out = document.getElementById("out");

// submit.onclick = function(){
//     if (check1.checked){
//         out.textContent="Swimming";
//     }
//     else if (check2.checked){
//         out.textContent="Running";
//     }
//     else if (check3.checked){
//         out.textContent="Reading";
//     }
//     else{
//         out.textContent="No box selected";
//     }
// }

// const name = "Imran Rahman";
// // let firstName = name.slice(0,5);

// // let lastName = name.slice(5,12);

// let firstName = name.slice(0,name.indexOf(" "));

// let lastName = name.slice(name.indexOf(" ")+1);
// document.getElementById("out").innerHTML=firstName +" "+ lastName;
//document.getElementById("out").innerHTML = lastName;

// let username = window.prompt("What is your name? ");
// username = username.charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// document.getElementById("out").innerHTML = username;

// == checks only the value
// === checks both the value and the type
// !=== checks both the value and the type

// let n="12.h" ;
// document.getElementById("out").innerHTML = n;

// Arrays

// let num = [1,2,3,4,"Imran",23] // can support different types
// document.getElementById("out").innerHTML = num;

// num.push(12); // to push to the end
// num.pop(); // To pop from the end
// num.unshift("mango") // To push to the beginning
// num.shift() //To delete from the beginning
// document.getElementById("out").innerHTML = typeof num +" "+ typeof num.length;
// num.sort(); // for any data type it sorts lexicographically
// num.reverse(); // sorts in descending order
// document.getElementById("out").innerHTML = num; // Last element

// // Spread operator : ... this operator unpacs some iterable like array , string to the elements

// let mx = Math.max(...num)
// document.getElementById("out").innerHTML = mx;

// var u = [...num].join("-");
// document.getElementById("out").innerHTML = u;

// Rest parameters : (...rest) used in functions and to combine multiple
//                  elements to a single array. Must be used once and as the last
//                  parameter for a function

// let x = 1;
// let y = 2;
// let z = 3;

// function fun(a,... rest){
//     console.log(a);
//     console.log(rest);
// }

// fun(x,y,z);

// callback = a function that is passed as an argument to another function
// used to handle asynchronous operations:
// reading a file
// reading from databse
// network request
// it makes sure that is the passed function starts executingn when the other function is done

// hello(goodbye);

// function hello(callback){
//     setTimeout(function(){
//         console.log("hello");

//     },3000);
//     console.log("hehe");
//     callback();
// }

// function goodbye(){
//     console.log("Good bye");
// }

// array.foreach() method executes a function for each element of an array
// behind the scence it passes element, index, array parameters to that function
// it does not return anything
// let num = [1,2,3,4,5]
// num.forEach(square);
// num.forEach(display);
// function display(element,index,array){
//     console.log(element);

// }

// function square(element,index,array){
//     array[index] = element * element;
// }

// array.map()  accepts a callback and applies that function to each element of and array
// and returns a new array
// let num = [1,2,3,4,5]
// let new_num = num.map(square);
// function square(element,index,array){
//     return element * element;
// }

// console.log(new_num);

// let dates = ["2020-12-12","2021-09-10","2012-12-01"];

// let new_dates = dates.map(format);

// function format(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// console.log(new_dates);

// array.filter()
// This method takes a function that returns a boolean value for
// an element and for the flase element it filters out the elements and retuyrns an array

// let age = [12,15,10,20,18,21];

// function isAdult(element){
//     return element>=18;
// }

// let new_age = age.filter(isAdult);
// console.log(new_age);

// Array.reduce() reduces the elements of an array to a single element
// just like the aggregate functions in database
// It passes two arguments previos and next elements

// let num = [1,2,3,5,10];

// let mx = num.reduce(max);
// function max(previous,current){
//     return Math.max(previous,current);
// }

// console.log(mx);

// arrow function

// const hello = (name) => {
//     console.log("hello");
//     console.log(name);
// }
// hello("imran");

// Objects : these are a collection of attributes and methods

// object = {
//             key:CSSMathValue,
//             function()
// }

// let person = {
//     name: "Imran",
//     profession: "student",
//     hungry: true,
//     greet: function(){
//         console.log("hello");
//     },
//     bade : ()=>{console.log("bye")}
// };

// let person2 = {
//     name: "Imran",
//     profession: "student",
//     hungry: true,
//     greet: function(){
//         person.bade();
//         console.log("hello");
//     },
//     bade : ()=>{console.log("bye")}
// };

// console.log(person.name);
// person.hungry = false;
// console.log(person.hungry);
// person.greet();
// person.bade();

// Constructor is a special method for defing the properties
// of an object. It does the same work like the oop constructors
// but defined in slightly different way

// function Car(name, model, color){
//     this.name = name,
//     this.model = model,
//     this.color = color,
//     this.drive = ()=>{console.log(`${model}`)}

// };

// let car1 = new Car("Honda","Civic","Red");
// car1.drive();

// class

// class Car{
//     name;
//     model = "c";
//     color;
//     constructor(name,model,color){
//         this.name = name;
//         this.model = model;
//         this.color = color;
//     };

//     static drive() {
//         console.log(this.model);
//     };
// }

// let car1 = new Car("Honda","Civic","green");
// Car.drive();

// console.error("This is an error")

// Destructuraing [] for arrays
// {} for objects
// const colors = ["green","blue",'red'];
// a =1;
// b=2;

// [a,b] = [b,a]
// console.log(a,b);

// [colors[0],colors[1]] = [colors[1],colors[0]];
// console.log(colors);

// let person = {
//     name: "im",
//     lastName: "ra",
//     age: 12,
//     job: "unemployed"
// }

// const {name,age,job} = person;
// console.log(name,age,job);

// function displayPerson({name,age,job}){
//     console.log(name,age,job);
// };

// displayPerson(person);

// // Array of objects
// const fruits = [{name:"banana"},{name: "mango"},{name:"Coconut"}];

// fruits.push({name:"Tomato"});
// console.log(fruits)

// let num = [1,5,3,4,10,0];

// num.sort(); // sorts lexicographically

// num.sort((a,b)=> a-b) // sorts
// console.log(num);
// console.log(typeof num[0]);

// closure
// function inside a function

// function outer(){
//     let message = "hello";
//     function inner(){
//         console.log(message);
//     }
//     x = inner;
//     x();
// }

// outer();

// function counter(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(count);

//     }

//     return increment;
// }

// const increment_counter = counter();

// increment_counter();
// increment_counter();
// increment_counter();

// import {area,circumferance} from './lib.js';

// console.log(area(2));

// Handaling asynchronous code
// function test(callback){

//     console.log("Task");
//     setTimeout(()=> {console.log("In the timer");callback()},3000);

// }

// function for_callback(){
//     console.log("Callback");
// }

// test(for_callback);

// Error / exception handleing in javascript
// network errors
// promise rejections
// security errors

// try{
//     a  ;
//     throw new Error("Manually made error");
// }

// catch (error){
//     console.error(error)
// }
// finally{
//     console.log("This is finally that always excutes");
// }

// console.log("After error");

// DOM is the document object model
// when loading a webpage the browser gets the html elements
// of that webpage into a document object in a tree like structure of the
// elements

// console.dir(document);

// document.title = "New title"

// document.body.style.backgroundColor = "red"

// const username = " piratemeow";

// const message = document.getElementById("hello");

// message.textContent += username===""?" Guest":username;

// element selector
// document.getElementById()  // returns an element or null
// document.getElementsByClassName() // html collection
// document.getElementsByTagName() // returns an html collection
// document.querySelector() // returns the first matching element or null
// document.querySelectorAll() // nodelist

// const head = document.getElementById("welcome");

// head.style.backgroundColor = "green";
// console.log(head);

// const fruits = document.getElementsByClassName("fruits");

// fruits[1].style.backgroundColor = "yellow";

// console.log(fruits[0]);

// html collections lac a lot of features that arrays have like forEach() method

// we can typecast html collections to an array and then access these features

// const fruits = document.getElementsByClassName("fruits");

// fruits[1].style.backgroundColor = "yellow";

// console.log(fruits[0]);

// Array.from(fruits).forEach((fruit)=>fruit.style.backgroundColor='red');

// Nodelist is like html collection but they are static which means they do not updte automatically
// and have some methods like arrays

// creating a new html element using dom

// const newh1 = document.createElement("h1");

// newh1.textContent = "I do not know what is am doing";
// newh1.style.color = "red";
// newh1.style.textAlign = "center";
// newh1.style.margin = "20px";
// document.getElementById("bx1").append(newh1);
// const newh2 = document.createElement("h1");
// newh2.textContent = "Hello";
// document.getElementById("bx2").prepend(newh2);

// let bx1 = document.getElementById("bx1");
// let bx2 = document.getElementById("bx2");

// document.body.insertBefore(newh1,bx1);

// // to remove an html element

// document.body.removeChild(newh1)

// eventListeners
// .addEventListener (event, callback)
// const mybx = document.getElementById("mybx");

// function changecolor(event){
//     console.log(event);
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Outch!";
// }
// mybx.addEventListener("click",changecolor);

// mybx.addEventListener("mouseover", function (event){
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it!";
// });

// mybx.addEventListener("mouseleave", event =>{event.target.style.backgroundColor = "green";
// event.target.textContent = "Please don't go!";});

// const key = document.getElementById("key");
// let x = 0;
// let y = 0;
// document.addEventListener("keydown",event => {
//     console.log(event);
//     if (event.key.startsWith("Arrow")){
//         switch(event.key){
//             case "ArrowUp":
//                 y-=10;
//                 break;
//             case "ArrowDown":
//                 y+=10;
//                 break;
//             case "ArrowLeft":
//                 x-=10;
//                 break;
//             case "ArrowRight":
//                 x+=10;
//                 break;
//         }
//     }

//     key.style.top = `${y}px`;
//     key.style.left = `${x}px`;
// });

// .classList = js element property to interact with CSS classes
// .add(class)  to add a class
// .remove() to remove a class
// .toggle(class)  removes if present and adds if not
// .replace(oldClass, newClass)
// .contains(class) return true if class exists

// const butto = document.getElementById("button");
// console.log(butto);
// console.log(butto.classList);
// butto.classList.add("classs");

// callback hell and this should be avoided

// function ts1(callback){
//     setTimeout(()=>{console.log("Task 1");
//                 callback()
// },2000);
// }

// function ts2(callback){
//     setTimeout(()=>{console.log("Task 2");
//     callback()
// },1000);
// }

// function ts3(callback){
//     setTimeout(()=>{console.log("Task 3");
//     callback()
// },1500);
// }

// function ts4(callback){
//     setTimeout(()=>{console.log("Task 4");
//     callback()
// },200);
// }

// ts1(()=>{
//     ts2(()=>
//     ts3(()=>{
//         ts4(()=>{
//             console.log("All Done");
//         })
//     }));
// })

// Promise : it is an object to handle asynchonous operations in Js like db, file and resource handleing.
// We do this to avoid callback hell.
// we use method chaining in this.
// function ts1(){

//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             const ts1Complete = true;

//             if (ts1Complete){
//                 resolve("Task1 completed");
//             }
//             else{
//                 reject("Task1 incompleted");
//             }

//         },1200);

//     });
// }

// function ts2(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Task2 completed");
//         },2000);

//     });
// }

// function ts3(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Task3 completed");
//         },300);

//     });
// }

// ts1().then(value => {console.log(value); return ts2()})
//      .then(value => {console.log(value); return ts3()})
//      .then(value => console.log(value))
//      .catch(error => console.log(error));

// function arr(callback){
//     const a = 12;

//     callback(a);
// }

// arr((e) => {console.log(e)});

// promise = new Promise( (resolve,reject) =>{
//     resolve ("the code is resolved " + 12);
//     reject("error");

// });

// promise.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.error(err);
// });

// function ts1(){
//     setTimeout(()=>console.log("the task is done"),2000);
// }

// async function fun(){
//     // throw new Error("this is an error");
//     return "This is an asynchronus function";
// }

// // fun().then((value)=>{console.log(value);}).catch((err) => console.log(err));

// async function fun2(){

//     const val = await fun();
//     console.log(val);
// }

// fun2();

// working with JSON
// json is language independent

// const fruits = ["banana","coconut","mango","peaches"]
// const person = {
//     "id": 3,
//     "name": "Doe",
//     "age": 30
// };

// const jsonString = JSON.stringify(fruits);

// console.log(jsonString);
// const json = JSON.parse(jsonString);
// console.log(json)
// const personString = JSON.stringify(person);
// const json2 = JSON.parse(personString);
// console.log(personString);

// console.log(json2);

// // fetching a json file

// fetch("persons.json").then((response)=> response.json()).then(value => console.log(value)).catch((error)=>console.error(error));

// async function delay_function() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(console.log("task1"));
//     }, 2000);
//   });
// }

// async function delay_function2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(console.log("task2"));
//     }, 2);
//   });
// }

// async function print() {
  // delay_function(); // prints task1 first and then task 2
  // delay_function2();

  // await delay_function(); // these will execute like synchronous code
  // await delay_function2();

  // const ts1 = delay_function();
  // const ts2 = delay_function2();

  // const all = Promise.all([ts1,ts2]); // this make ts1 and t2 to run asynchronously in this thread

}

print();
