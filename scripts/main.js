let toggleMode = document.getElementById("toggle-mode");
let modeIcon = document.getElementById("toggle-mode-label");


let toggleLang = document.getElementById("toggle-language");
let langIcon = document.getElementById("toggle-language-label");

toggleMode.addEventListener("change", (event) => {
    let checked = event.target.checked;

    if (checked) {
        darkMode();
    } else {
        lightMode();
    }
});

toggleLang.addEventListener("change", (event) => {
    let checked = event.target.checked;

    if (checked) {
        englishMode();
    } else {
        spanishMode();
    }
});


const darkMode = () => {
    document.body.classList.add("dark-mode");
    modeIcon.innerHTML = `
        <img
            class="svg"
            src="./assets/svg/mode-svg/dark-mode.svg"
            alt="Dark mode"
        />
        `;
};

const lightMode = () => {
    document.body.classList.remove("dark-mode");
    modeIcon.innerHTML = `
         <img
            class="svg"
            src="./assets/svg/mode-svg/light-mode.svg"
            alt="Light mode"
        />
        `;
};

const englishMode = () => {
    langIcon.innerHTML = `
        <img
            class="svg"
            src="./assets/svg/lang-svg/es.svg"
            alt="Spanish toggle-language"
        />
        `;
}

const spanishMode = () => {
    langIcon.innerHTML = `
        <img
            class="svg"
            src="./assets/svg/lang-svg/en.svg"
            alt="English toggle-language"
        />
        `;
}
