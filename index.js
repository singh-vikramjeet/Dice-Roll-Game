// For Dice 1 (On the Left)
let randomVariable1 = Math.random();
// Math.random generates a number between 0 to 0.9
randomVariable1 = randomVariable1 * 6;
// We multiply it with 6 to get a random interval between 1 to 6
randomVariable1 = Math.floor(randomVariable1);// Floor method removes the decimal part
if(randomVariable1 == 0){ // Checking for zero condition
    randomVariable1++;
}
console.log(`Random variable 1 is ${randomVariable1}`);

// Assigning the new dice image accordinf to randomVariable1
document.querySelector(".img1").setAttribute(`src`,`images/dice${randomVariable1}.png`);

// For Dice 2
let randomVariable2 = Math.random();
randomVariable2 = randomVariable2 * 6;
randomVariable2 = Math.floor(randomVariable2);
if(randomVariable2 == 0){
    randomVariable2++;
}
console.log(`Random Variable 2 is ${randomVariable2}`);

document.querySelector(".img2").setAttribute(`src`, `images/dice${randomVariable2}.png`);

// Deciding the winner

let titleText = document.querySelector("h1");

if(randomVariable1 > randomVariable2){
    titleText.innerHTML = "Player 1 Wins";
}
else if (randomVariable2 > randomVariable1){
    titleText.innerHTML = "Player 2 Wins";
}
else{
    titleText.innerHTML = "Draw";
}