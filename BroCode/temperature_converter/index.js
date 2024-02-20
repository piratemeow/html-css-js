
const textbox = document.getElementById("textbox");
const tofar = document.getElementById("tofar");
const tocel = document.getElementById("tocel");
const result = document.getElementById("result");
const button = document.getElementById("butt");
const reset = document.getElementById("reset");

button.onclick = function(){
    
    
    let ans;
    if (tofar.checked){
        if (textbox.value==""){
            result.textContent = "Select a unit";
            return;

        }
        
        let x = Number(textbox.value);
        ans = ((x/5)*9)+32;
        result.textContent = ans + "° F";

    }
    else if (tocel.checked){
        if (textbox.value==""){
            result.textContent = "Select a unit";
            return;
        }
        
        let x = Number(textbox.value);
        ans = ((x-32)/9)*5;
        result.textContent = ans + "° C";
    }
    else{
        result.textContent = "Select a unit";
        return;
    }
   
    
    
}

reset.onclick = function(){
    tocel.checked = false;
    tofar.checked = false;
    textbox.value = null;
    result.innerHTML = "";
}