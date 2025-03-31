const divImage = document.querySelector("div img");
divImage.addEventListener("click", () => {
    divImage.src = "./image/avatar-bis.png";
    divImage.alt = "avatarBis";
});

const firstName = document.querySelector('#firstname');
firstName.innerText = ("Leïla");
firstName.style.color = "white";

const firstArticle = document.querySelector("section.description.pink-bg");
firstArticle.style.backgroundColor = "#750ff7";
const footer = document.querySelector("footer.description.pink-bg");
footer.style.backgroundColor = "#750ff7";
const tille = document.querySelector("h4.pink-text");
title.style.backgroundColor = "#750ff7";