const iconMenu = document.querySelector("#toogle-menu");
const mainMenu = document.querySelector("#main-menu");

iconMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("main-menu-show");
})