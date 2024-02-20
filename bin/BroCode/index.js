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