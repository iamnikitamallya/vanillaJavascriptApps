//PLAYER 1 DICE IMAGE

const randNum1 = Math.floor((Math.random()*6)+1);
const diceImage = `images/dice/dice${randNum1}.png`;
const diceImg1 = document.querySelector("img.img1");
diceImg1.setAttribute("src", diceImage);

//PLAYER 2 DICE IMAGE

const randNum2 = Math.floor((Math.random()*6)+1);
const diceImage2 = `images/dice/dice${randNum2}.png`;
const diceImg2 = document.querySelector("img.img2");
diceImg2.setAttribute("src", diceImage2);

if(randNum1 > randNum2) {
    let heading = document.querySelector("h1");
    heading.innerHTML="Player 1 won";
} else if (randNum1 < randNum2) {
    let heading = document.querySelector("h1");
    heading.innerHTML="Player 2 won";
} else if (randNum1 == randNum2) {
    let heading = document.querySelector("h1");
    heading.innerHTML="It's A Due";
}

const btn = document.querySelector("button");
btn.addEventListener("click", play);
function play() {
    location.reload();
}
