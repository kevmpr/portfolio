const toggleMode = document.getElementById("toggle-mode");
const modeIcon = document.getElementById("toggle-mode-label");

const header = document.querySelector(".header");
const profileTitle = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");
const profileDescWord = document.querySelector(".profile__description__word");
const profileSkillsTitle = document.querySelector(".profile--skills__title");
const projectsTitle = document.querySelector(".projects__title");
const aboutmeInfo = document.querySelector(".aboutme__info");
const aboutmeTitle = document.querySelector(".aboutme__title");
const aboutmeInfoTitle = document.querySelector(".aboutme__info__title");
const contactTitle = document.querySelector(".contact__title");
const contactInfoLinks = document.querySelector(".contact__info__links");
const cvLink = document.querySelector(".cvLink");
const footer = document.querySelector(".footer");

const githubIcon = document.querySelectorAll(".githubIcon");
const profileLink = document.querySelectorAll(".profile__links__link");
const profileSkillsHardSkill = document.querySelectorAll(
    ".profile--skills__hard__skill"
);
const project = document.querySelectorAll(".project");
const projectTitle = document.querySelectorAll(".project__text__title");
const projectSubtitle = document.querySelectorAll(".project__text__subtitle");
const webLink = document.querySelectorAll(".webLink");
const repositoryLink = document.querySelectorAll(".repositoryLink");
const presentationLink = document.querySelectorAll(".presentationLink");
const aboutmeInfoTextWord = document.querySelectorAll(
    ".aboutme__info__text__word"
);

toggleMode.addEventListener("change", (event) => {
    const checked = event.target.checked;

    if (checked) {
        darkMode();
    } else {
        lightMode();
    }
});

const darkMode = () => {
    document.body.classList.add("darkmode");

    modeIcon.innerHTML = `
        <img
            class="svg"
            src="./assets/svg/mode-svg/dark-mode.svg"
            alt="Dark mode"
        />
        `;
    githubIcon[0].innerHTML = `
        <img
                src="./assets/svg/contact-svg/github-dark.svg"
                alt="Github"
            />
        `;
    githubIcon[1].innerHTML = `
        <img
                src="./assets/svg/contact-svg/github-dark.svg"
                alt="Github"
            />
    
            kevmpr
        `;
    cvLink.innerHTML = `
        <img
            src="./assets/svg/contact-svg/cv-dark.svg"
            alt="Curriculum Vitae"
        />

        descargar cv
    `;

    header.classList.add("header--darkmode");
    profileTitle.classList.add("profile__title--darkmode");
    profileDesc.classList.add("profile__description--darkmode");
    profileDescWord.classList.add("profile__description__word--darkmode");
    profileSkillsTitle.classList.add("profile--skills__title--darkmode");
    projectsTitle.classList.add("projects__title--darkmode");
    aboutmeInfo.classList.add("aboutme__info--darkmode");
    aboutmeTitle.classList.add("aboutme__title--darkmode");
    aboutmeInfoTitle.classList.add("aboutme__info__title--darkmode");
    contactTitle.classList.add("contact__title--darkmode");
    contactInfoLinks.classList.add("contact__info__links--darkmode");
    footer.classList.add("footer--darkmode");

    profileLink.forEach((element) => {
        element.classList.add("profile__links__link--darkmode");
    });

    profileSkillsHardSkill.forEach((element) => {
        element.classList.add("profile--skills__hard__skill--darkmode");
    });

    project.forEach((element) => {
        element.classList.add("project--darkmode");
    });
    projectTitle.forEach((element) => {
        element.classList.add("project__text__title--darkmode");
    });
    projectSubtitle.forEach((element) => {
        element.classList.add("project__text__subtitle--darkmode");
    });
    webLink.forEach((element) => {
        element.innerHTML = `
            <img
                src="./assets/svg/link-svg/web-dark.svg"
                alt="Web site"
                title="Web site"
            />
        `;
        element.classList.add("webLinkDark");
    });
    repositoryLink.forEach((element) => {
        element.innerHTML = `
            <img
                src="./assets/svg/link-svg/repository-dark.svg"
                alt="Web site"
                title="Web site"
            />
        `;
        element.classList.add("repositoryLinkDark");
    });
    presentationLink.forEach((element) => {
        element.innerHTML = `
            <img
                src="./assets/svg/link-svg/presentation-dark.svg"
                alt="Web site"
                title="Web site"
            />
        `;
        element.classList.add("presentationLinkDark");
    });
    aboutmeInfoTextWord.forEach((element) => {
        element.classList.add("aboutme__info__text__word--darkmode");
    });
};

const lightMode = () => {
    document.body.classList.remove("darkmode");
    modeIcon.innerHTML = `
         <img
            class="svg"
            src="./assets/svg/mode-svg/light-mode.svg"
            alt="Light mode"
            />
            `;
    githubIcon[0].innerHTML = `
            <img
                    src="./assets/svg/contact-svg/github.svg"
                    alt="Github"
                />
            `;
    githubIcon[1].innerHTML = `
            <img
                    src="./assets/svg/contact-svg/github.svg"
                    alt="Github"
                />
        
                kevmpr
            `;
    cvLink.innerHTML = `
            <img
                src="./assets/svg/contact-svg/cv.svg"
                alt="Curriculum Vitae"
            />
    
            descargar cv
        `;
    header.classList.remove("header--darkmode");
    profileTitle.classList.remove("profile__title--darkmode");
    profileDesc.classList.remove("profile__description--darkmode");
    profileDescWord.classList.remove("profile__description__word--darkmode");
    profileSkillsTitle.classList.remove("profile--skills__title--darkmode");
    projectsTitle.classList.remove("projects__title--darkmode");
    aboutmeInfo.classList.remove("aboutme__info--darkmode");
    aboutmeTitle.classList.remove("aboutme__title--darkmode");
    aboutmeInfoTitle.classList.remove("aboutme__info__title--darkmode");
    contactTitle.classList.remove("contact__title--darkmode");
    contactInfoLinks.classList.remove("contact__info__links--darkmode");
    footer.classList.remove("footer--darkmode");

    profileLink.forEach((element) => {
        element.classList.remove("profile__links__link--darkmode");
    });
    profileSkillsHardSkill.forEach((element) => {
        element.classList.remove("profile--skills__hard__skill--darkmode");
    });
    project.forEach((element) => {
        element.classList.remove("project--darkmode");
    });
    projectTitle.forEach((element) => {
        element.classList.remove("project__text__title--darkmode");
    });
    projectSubtitle.forEach((element) => {
        element.classList.remove("project__text__subtitle--darkmode");
    });
    webLink.forEach((element) => {
        element.innerHTML = `
            <img
                src="./assets/svg/link-svg/web.svg"
                alt="Web site"
                title="Web site"
                />
                `;
        element.classList.remove("webLinkDark");
    });
    repositoryLink.forEach((element) => {
        element.innerHTML = `
                <img
                src="./assets/svg/link-svg/repository.svg"
                alt="Web site"
                title="Web site"
                />
                `;
        element.classList.remove("repositoryLinkDark");
    });
    presentationLink.forEach((element) => {
        element.innerHTML = `
                <img
                src="./assets/svg/link-svg/presentation.svg"
                alt="Web site"
                title="Web site"
                />
                `;
        element.classList.remove("presentationLinkDark");
    });

    aboutmeInfoTextWord.forEach((element) => {
        element.classList.remove("aboutme__info__text__word--darkmode");
    });
};

let toggleLang = document.getElementById("toggle-language");
let langIcon = document.getElementById("toggle-language-label");

toggleLang.addEventListener("change", (event) => {
    let checked = event.target.checked;

    if (checked) {
        englishMode();
    } else {
        spanishMode();
    }
});
const englishMode = () => {
    langIcon.innerHTML = `
        <img
            class="svg"
            src="./assets/svg/lang-svg/es.svg"
            alt="Spanish toggle-language"
        />
        `;
};

const spanishMode = () => {
    langIcon.innerHTML = `
        <img
            class="svg"
            src="./assets/svg/lang-svg/en.svg"
            alt="English toggle-language"
        />
        `;
};
