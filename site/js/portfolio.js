const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
    avatar.src = './image/avatar-bis.png';
});

const changeName = document.querySelector("#firstname");
const button = document.querySelector("#button");
const user = document.querySelector(".pink-bg");

button.addEventListener("click", () => {
    let color = prompt("Enter a color:");
    let name = prompt("enter your name ?");
    
    changeName.style.color = "white";
    changeName.innerHTML = name;
    user.style.backgroundColor = color;
});