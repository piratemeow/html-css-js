let x;
const PI = 3.1416;



document.getElementById("butt").onclick = function(){
    
    x = document.getElementById("in").value;
    x = Number(x);
    document.getElementById("res").textContent = `The area is ${PI*x**2}`;
}