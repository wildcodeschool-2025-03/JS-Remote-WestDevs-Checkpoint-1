const avatarUser = document.querySelector('../site/image/avatar.svg')
avatarUser.addEventListener('click', () => (
    avatarUser.src = "../site/image/avatar-bis.svg";
avatarUser.alt = "Second avatar";
));

const bouton = document.querySelector('.personnalisation')
const paragraphe = document.querySelector('.description pink-bg')

bouton.addEventListener('click', () => (
    const nouveauNom = prompt('Quel est votre prénom ?');
if (nouveauNom) {
    paragraphe.innerHTML = paragraphe.innerHTML.replace('Matt', `<span class="texte-blanc">${nouveauNom}</span>`);
}
    ));

bouton.addEventListener('click', () => (
const nouvelleCouleur = prompt('Quel couleur souhaitez-vous?');
if (nouvelleCouleur) {
    paragraphe.style.background.replace(`${nouvelleCouleur}`);
}
    ));