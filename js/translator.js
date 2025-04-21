const langIcon = document.getElementById("toggle-language-label");
const cvProfile = document.getElementById("cv-profile");
const cvContact = document.getElementById("cv-contact");
const textsToChange = document.querySelectorAll("[data-section]");

const englishMode = async () => {
    langIcon.innerHTML = `
        <img
            class="svg"
            src="./assets/svg/lang-svg/en.svg"
            alt="English Language"
        />
    `;

    cvProfile.setAttribute("href", "./assets/files/CV Kevin Maximiliano Palma Romero - Developer 2025.pdf");
    cvContact.setAttribute("href", "./assets/files/CV Kevin Maximiliano Palma Romero - Developer 2025.pdf");

    const requestJson = await fetch("./assets/languages/en.json");
    const texts = await requestJson.json();

    textsToChange.forEach((text) => {
        const section = text.dataset.section;
        const value = text.dataset.value;
        const info = text.dataset.info;

        try {
            text.innerHTML = texts[section][value][info] ? texts[section][value][info] : texts[section][value];
        } catch{

        }
    });
};

const spanishMode = async () => {
    langIcon.innerHTML = `
        <img
            class="svg"
            src="./assets/svg/lang-svg/es.svg"
            alt="Spanish Language"
        />
    `;

    cvProfile.setAttribute("href", "./assets/files/CV Kevin Maximiliano Palma Romero - Desarrollador 2025.pdf");
    cvContact.setAttribute("href", "./assets/files/CV Kevin Maximiliano Palma Romero - Desarrollador 2025.pdf");

    const requestJson = await fetch("./assets/languages/es.json");
    const texts = await requestJson.json();

    textsToChange.forEach((text) => {
        const section = text.dataset.section;
        const value = text.dataset.value;
        const info = text.dataset.info;   

        try {
            text.innerHTML = texts[section][value][info] ? texts[section][value][info] : texts[section][value];
        } catch{
            
        }
    });
};

export {englishMode, spanishMode};