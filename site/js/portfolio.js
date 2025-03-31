const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar-bis.png";
    // Below doesn't work yet. 
    //avatar.src = (avatar.src === "./image/avatar.svg") ? "./image/avatar-bis.png" : "./image/avatar.svg";
});

//const descriptionSection = document.querySelector(".pink-bg");
const pinkBgElements = document.querySelectorAll(".pink-bg");
const pinkTxtElements = document.querySelectorAll(".pink-text");
const firstName = document.querySelector("#firstname");
const changeNameColorButton = document.querySelector(".description button");

changeNameColorButton.addEventListener("click", () => {
    //descriptionSection.style.backgroundColor = prompt("Enter a color :");
    const newColor = prompt("Enter a color :");
    pinkBgElements.forEach((element) => element.style.backgroundColor = newColor)
    pinkTxtElements.forEach((element) => element.style.color = newColor)
    firstName.innerText = prompt("Enter your name :");
    firstName.style.color = "#FFF";
});

