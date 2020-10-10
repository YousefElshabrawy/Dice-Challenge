var img1 = document.querySelector(".img1"),
    img2 = document.querySelector(".img2"),
    randomNumber1 = Math.floor((Math.random() * 6) + 1),
    randomNumber2 = Math.floor((Math.random() * 6) + 1),
    h1 = document.querySelector("h1");

img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
if (randomNumber1 > randomNumber2) {
    h1.innerText = "Player 1 wins. ";
} else if (randomNumber2 > randomNumber1) {
    h1.innerText = "Player 2 wins. ";
} else {
    h1.innerText = "Try Again.";
}