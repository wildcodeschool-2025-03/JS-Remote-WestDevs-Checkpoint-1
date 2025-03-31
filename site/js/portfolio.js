const avatar = document.querySelector("#firstBanner img");

avatar.addEventListener("click", () => {
    avatar.src = "/site/image/avatar.svg";
});

const firstname = document.querySelector("#firstname");
const pinkSection = document.querySelector(".description pink-bg")

const button = document.createElement("button");
button.innerHTML = type = "button"
button.type = "button"
button.name = "Modify text and color"
pinkSection.appendChild(button);

button.addEventListener("click", () => {
    prompt = ("Write your name");
    prompt.innerText = `${firstname}`

});
