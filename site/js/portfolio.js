document.getElementById("avatar").addEventListener("click", function () {
    if (this.src.includes("avatar.svg")) {
        this.src = "./image/avatar-bis.png";
    } else {
        this.src = "./image/avatar.svg";
    }
});
