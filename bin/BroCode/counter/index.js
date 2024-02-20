const decreases = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const label = document.getElementById("counterLabel");

let count = 0;

decreases.onclick = function(){
    count--;
    label.textContent = count;
}

reset.onclick = function(){
    count = 0;
    label.textContent = count;
}

increase.onclick = function(){
    count++;
    label.textContent = count;
}