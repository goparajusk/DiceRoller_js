
function diceRoller() {
    const dice_number=document.getElementById("dice_number").value;
    const diceValue=document.getElementById("diceValue");
    const diceImage=document.getElementById("diceImage");
    const listOfValues = [];
    const listOfImages =[];

    for(let i = 0; i<dice_number; i++){
        const random_num=Math.floor(Math.random()*6)+1;
        listOfValues.push(random_num);
        listOfImages.push(`<img src="images/${random_num}.png" alt="Dice: ${random_num}">`);

    }
    diceValue.textContent=`dice: ${listOfValues.join(", ")}`;
    diceImage.innerHTML=listOfImages.join('');
}