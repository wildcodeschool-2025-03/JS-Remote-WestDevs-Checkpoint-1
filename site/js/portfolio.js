
// modification image
const modificationAvatar = document.querySelector(".avatarClick");

modificationAvatar.addEventListener("click", () => {
    modificationAvatar.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Ragondin_%28Myocastor_coypus%29_%2819%29.jpg/500px-Ragondin_%28Myocastor_coypus%29_%2819%29.jpg"
})

// newButton
const conteneurForButton = document.querySelector(".conteneurButton")
const newButton = document.createElement("button");
const addFirstname = document.querySelector("#firstname");

newButton.textContent = "Modify text and color"
conteneurForButton.appendChild(newButton);


newButton.addEventListener("click", () => {

})

