function generatePassword(){

    const passLength = document.getElementById("passLength").value;
    const includeLowerCase = document.getElementById("lower").checked;
    const includeUpperCase = document.getElementById("upper").checked;
    const includeNumber = document.getElementById("number").checked;
    const includeSumbols = document.getElementById("symbols").checked;

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*";

    let allowedChars = "";
    let password = "";
    allowedChars += includeLowerCase?lowerCaseChars:"";
    allowedChars += includeUpperCase?upperCaseChars:"";
    allowedChars += includeNumber?numberChars:"";
    allowedChars += includeSumbols?symbolChars:"";
    document.getElementById("warning").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    if (passLength<=0){
        document.getElementById("warning").textContent =("Password must be atleast of length 1");
        return;
    }
   
    if (allowedChars.length==0){
        document.getElementById("warning").textContent ="Atleast one parameter has to be selected";
        return;
    }

    for (let i = 0;i<passLength;i++){
        const randomindex = Math.floor(Math.random()*(allowedChars.length));
        password += allowedChars[randomindex];
    }
    console.log(passLength);
    document.getElementById("result").textContent = `${password}`;
    return ;
}


function copy(){
    const p = document.getElementById("result").innerHTML;
    if (p===""){
        alert("Generate a Password First");
        return;
    }

    const textToCopy = document.getElementById("result").textContent;
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy).then
    (function(){
        alert("Text copied to clipboard: " + textToCopy);
    })
    .catch(function(err){
        console.error("Unable to copy text",err);
    })
  
}
