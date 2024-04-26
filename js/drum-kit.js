const drumKit = document.querySelectorAll(".drum").length;

for(let i=0; i<drumKit; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(e){
    playDrum(this.innerHTML);
    animateBtn(this.innerHTML);
  });
}

function playDrum(key) {
  switch(key) {
    case "w":
    const tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    const tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    const tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    const tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    const crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "k":
    const kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "l":
    const snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
  }
}

function animateBtn(key) {
  const activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  },5)
}

function animateBtn(key) {
  const activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  },5)
}