const avatar = document.querySelector(".step2 img");

avatar.addEventListener("click", () => {

    if (avatar.src.endsWith("avatar-bis.png")) {
        avatar.src = "/site/image/avatar.svg";
    } else {

        avatar.src = "/site/image/avatar-bis.png";
    }
});

const modifyButton = document.querySelector("#modifyButton");

modifyButton.addEventListener("click", () => {

    const firstname = prompt("Enter your name");
})