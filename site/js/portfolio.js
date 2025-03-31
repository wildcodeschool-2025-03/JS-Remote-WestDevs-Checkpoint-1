const img = document.querySelector(".avatar img");

img.addEventListener("click", function () {
  if (img.src != "./image/avatar.svg") {
    img.src = "./image/avatar-bis.png";
  } else {
    img.src = "./image/avatar.svg";
  }
});
