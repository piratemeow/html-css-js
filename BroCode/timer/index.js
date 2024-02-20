function updateclock(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    let timing;
    if (hours>=13){
        timing = `${hours-12}:${minutes}:${seconds}`;
        document.getElementById("label").innerHTML = "PM";
    }
    else{
        timing = `${hours}:${minutes}:${seconds}`;
        document.getElementById("label").innerHTML = "AM";
    }
    

    document.getElementById("clock").innerHTML = timing;

}


setInterval(updateclock,1000);
console.log("f");

