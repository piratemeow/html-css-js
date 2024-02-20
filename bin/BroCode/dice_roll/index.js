function rollDice(){
    const numofDice = document.getElementById("diceNumber").value;
    const diceResult = document.getElementById("result");
    const diceImages = document.getElementById("diceImage");
    const values = [];
    const images = [];
    console.log(typeof numofDice);
    for (let i=0;i<numofDice;i++){
        const value = Math.floor(Math.random()*(6)) + 1;
        //console.log(value);
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    console.log(images);
    diceImages.innerHTML = images.join(" ");
}