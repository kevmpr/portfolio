import { englishMode, spanishMode } from "./translator.js";
import { darkMode, lightMode } from "./viewmode.js";

const toggleMode = document.getElementById("toggle-mode");
const toggleLang = document.getElementById("toggle-language");
const menu = document.getElementById("menu");
const imgMenu = document.querySelector(".img__menu");

toggleMode.addEventListener("change", (event) => {
    const checked = event.target.checked;

    if (checked) {
        darkMode();
    } else {
        lightMode();
    }
});

toggleLang.addEventListener("change", (event) => {
    const checked = event.target.checked;

    if (checked) {
        englishMode();
    } else {
        spanishMode();
    }
});

menu.addEventListener("change", (event) => {
    const checked = event.target.checked;

    if (checked) {
        imgMenu.setAttribute("src", "./assets/svg/menu-svg/exit.svg");
    } else {
        imgMenu.setAttribute("src", "./assets/svg/menu-svg/menu.svg");
    }
});
