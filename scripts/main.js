import { englishMode, spanishMode } from "./translator.js";
import { darkMode, lightMode } from "./viewmode.js";

const toggleMode = document.getElementById("toggle-mode");
const toggleLang = document.getElementById("toggle-language");

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
