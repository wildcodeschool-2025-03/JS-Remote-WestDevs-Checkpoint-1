const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
  const firstImage = "avatar.svg";

  if (avatar.src.endsWith(firstImage)) {
    avatar.src = "./image/avatar-bis.png";
  } else {
    avatar.src = "./image/avatar.svg";
  }
});

const promptName = document.querySelector("#prompt-name");

promptName.addEventListener("click", () => {
  const promptedName = prompt("What's your firstname ?");
  const firstname = document.getElementById("firstname");
  const choosenColor = prompt("Choose a color");
  const pinkBackgrounds = document.querySelectorAll(".pink-bg");
  const pinkTexts = document.querySelectorAll(".pink-text");

  console.log(pinkBackgrounds);

  firstname.textContent = promptedName;
  firstname.style.color = "white";
  pinkBackgrounds.forEach((element) => {
    element.style.backgroundColor = choosenColor;
  });
  pinkTexts.forEach((element) => {
    element.style.color = choosenColor;
  });
});

const linkColorButton = document.getElementById("link-color-changer");

linkColorButton.addEventListener("click", () => {
  const links = document.querySelectorAll("a");
  const choosenColor = prompt("What color do you want for links ?");
  links.forEach((element) => {
    element.style.color = choosenColor;
  });
});

const modifyButton = document.querySelector("#modify-button");

modifyButton.addEventListener("click", () => {
  const lisToChange = document.getElementById("front-dev-tools");
  lisToChange.innerHTML = `<li>VSCode</li>
            <li>Git</li>
            <li>NODE.js</li>`;
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector(".skills input");
  const liPlace = document.getElementById("back-dev-tools");

  const newLi = document.createElement("li");
  newLi.textContent = input.value;
  liPlace.appendChild(newLi);
  input.value = "";
});
