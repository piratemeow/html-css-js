const display = document.getElementById("display");
let val = 0
function appendToDisplay(input){
    display.value +=input;
}


function clearDisplay(){
    display.value = null;
}


function calculate(){
    try{
        val = eval(display.value)
        display.value = val;

    }
    catch(error){
        display.value = "ERROR";
    }

}

function ans(){
    display.value = val;
}

