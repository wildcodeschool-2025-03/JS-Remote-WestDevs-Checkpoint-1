// Change the avatar
const avatar = document.querySelector(".avatar-img");

avatar.addEventListener("click", () => {
	avatar.src = "./image/avatar.svg";
});
// button to change color of cssVar and value of the span
const firstName = document.querySelector("#firstname");
const description = document.querySelector(".description");

const buttonChange = document.createElement("button");
buttonChange.classList.add("pink-button");
description.appendChild(buttonChange);
buttonChange.textContent = "Modify text and color";

const root = document.querySelector(":root");

buttonChange.addEventListener("click", () => {
	firstName.textContent = prompt("test ?");
	firstName.style.color = "white";
	const newColor = prompt("Votre couleur ?");
	root.style.setProperty("--lightWildColor", newColor);
});
// Change the colors of the <a>
const everyAnchor = document.querySelectorAll("a");
const colors = ["blue", "red", "yellow", "green", "#750ff7"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
everyAnchor.forEach((anchor) => {
	anchor.style.color = randomColor;
});

// To change the textcontent inside the li and add button for it

const list = document.querySelector("#front-dev-tools");
const li = document.querySelectorAll("#front-dev-tools li");
const buttonModify = document.createElement("button");
buttonModify.classList.add("modify-button");
list.appendChild(buttonModify);
buttonModify.textContent = "Modify";

buttonModify.addEventListener("click", () => {
	const newLiValue = ["gitHub", "VScode", "Terminal"];
	li.forEach((li, index) => {
		li.textContent = newLiValue[index];
	});
});

const input = document.querySelector(".text-place");
const listInColumn = document.querySelector(".column ul");
const form = document.querySelector(".the-form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const text = input.value.trim();
	if (text !== "") {
		createTaskElement(text);
		input.value = "";
	} else {
		alert("Veuillez entrer une tâche");
	}
});

function createTaskElement(text) {
	const newLi = document.createElement("li");
	newLi.textContent = text;
	listInColumn.appendChild(newLi);
}
