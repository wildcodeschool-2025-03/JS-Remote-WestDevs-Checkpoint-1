const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar-bis.png";
    // Below doesn't work yet (to switch back to original)
    //avatar.src = (avatar.src === "./image/avatar.svg") ? "./image/avatar-bis.png" : "./image/avatar.svg";
});

//const descriptionSection = document.querySelector(".pink-bg");
const pinkBgElements = document.querySelectorAll(".pink-bg");
const pinkTxtElements = document.querySelectorAll(".pink-text");
const firstName = document.querySelector("#firstname");
const changeNameColorButton = document.querySelector(".change-name-color-button");

changeNameColorButton.addEventListener("click", () => {
    //descriptionSection.style.backgroundColor = prompt("Enter a color :");
    const newColor = prompt("Enter a color :");
    pinkBgElements.forEach((element) => element.style.backgroundColor = newColor)
    pinkTxtElements.forEach((element) => element.style.color = newColor)
    firstName.innerText = prompt("Enter your name :");
    firstName.style.color = "#FFF";
});

const frontDevToolsList = document.querySelector("#front-dev-tools");
const changeToolsButton = document.querySelector(".change-tools-button");
const toolsList = ["VSCode", "Github", "Terminal"];

changeToolsButton.addEventListener("click", () => {
    let newList = "";
    for (let i = 0; i < toolsList.length; i++) {
        newList += `<li>${toolsList[i]}</li>`;
    }
    frontDevToolsList.innerHTML = newList;
});

const backDevToolsList = document.querySelector("#back-dev-tools");
const addToolsButton = document.querySelector(".add-tools-button");
const newSkill = document.querySelector("#new-skill");

addToolsButton.addEventListener("click", () => {
    backDevToolsList.innerHTML += `<li>${newSkill.value}</li>`;
})


