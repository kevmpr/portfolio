const modeIcon = document.getElementById("toggle-mode-label");

const header = document.querySelector(".header");
const navSections = document.querySelector(".nav__sections");
const profileTitle = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");
const skillsTitle = document.querySelector(".skills__title");
const skillsContainer = document.querySelector(".skills__container");
const projectsTitle = document.querySelector(".projects__title");
const aboutmeInfo = document.querySelector(".aboutme__info");
const aboutmeTitle = document.querySelector(".aboutme__title");
const aboutmeInfoTitle = document.querySelector(".aboutme__info__title");
const contactTitle = document.querySelector(".contact__title");
const contactInfoLinks = document.querySelector(".contact__info__links");
const footer = document.querySelector(".footer");

const githubIcon = document.querySelectorAll(".githubIcon");
const profileLink = document.querySelectorAll(".profile__links__link");
const skill = document.querySelectorAll(".skill");
const project = document.querySelectorAll(".project");
const projectTitle = document.querySelectorAll(".project__text__title");
const projectSubtitle = document.querySelectorAll(".project__text__subtitle");
const skillTitle = document.querySelectorAll(".skill__title");
const skillContTool = document.querySelectorAll(".skill__container__tool");

const webLink = document.querySelectorAll(".webLink");
const repositoryLink = document.querySelectorAll(".repositoryLink");
const presentationLink = document.querySelectorAll(".presentationLink");

const darkMode = () => {
    const profileDescWord = document.querySelector(
        ".profile__description__word"
    );
    const aboutmeInfoText = document.querySelectorAll(".aboutme__info__text");
    const skillImg = document.querySelectorAll(".skill__tool__img");

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

    header.classList.add("header--darkmode");
    navSections.classList.add("nav__sections--darkmode");
    profileTitle.classList.add("profile__title--darkmode");
    profileDesc.classList.add("profile__description--darkmode");
    profileDescWord.classList.add("profile__description__word--darkmode");
    projectsTitle.classList.add("projects__title--darkmode");
    aboutmeInfo.classList.add("aboutme__info--darkmode");
    aboutmeTitle.classList.add("aboutme__title--darkmode");
    aboutmeInfoTitle.classList.add("aboutme__info__title--darkmode");
    contactTitle.classList.add("contact__title--darkmode");
    contactInfoLinks.classList.add("contact__info__links--darkmode");
    skillsTitle.classList.add("skills__title--darkmode");
    skillsContainer.classList.add("skills__container--darkmode");
    footer.classList.add("footer--darkmode");

    profileLink.forEach((element) => {
        element.classList.add("profile__links__link--darkmode");
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
    skillTitle.forEach((element) => {
        element.classList.add("skill__title--darkmode");
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
    aboutmeInfoText.forEach((element) => {
        element.classList.add("aboutme__info__text--darkmode");
    });
    skill.forEach((element) => {
        element.classList.add("skill--darkmode");
    });

    skillContTool.forEach((element) => {
        element.classList.add("skill__container__tool--darkmode");
    });

    skillImg[0].setAttribute(
        "src",
        "./assets/svg/skills/soft-skills-svg/teamwork-dark.svg"
    );
    skillImg[1].setAttribute(
        "src",
        "./assets/svg/skills/soft-skills-svg/planningtime-dark.svg"
    );
    skillImg[2].setAttribute(
        "src",
        "./assets/svg/skills/soft-skills-svg/criticalthinking-dark.svg"
    );
    skillImg[3].setAttribute(
        "src",
        "./assets/svg/skills/soft-skills-svg/proethics-dark.svg"
    );
    skillImg[4].setAttribute(
        "src",
        "./assets/svg/skills/soft-skills-svg/communication-dark.svg"
    );
    skillImg[5].setAttribute(
        "src",
        "./assets/svg/skills/soft-skills-svg/negotiation-dark.svg"
    );
    skillImg[6].setAttribute(
        "src",
        "./assets/svg/skills/soft-skills-svg/adaptability-dark.svg"
    );
    skillImg[7].setAttribute(
        "src",
        "./assets/svg/skills/languages-svg/lang-dark.svg"
    );
    skillImg[8].setAttribute(
        "src",
        "./assets/svg/skills/languages-svg/lang-dark.svg"
    );
};

const lightMode = () => {
    const profileDescWord = document.querySelector(
        ".profile__description__word"
    );
    const aboutmeInfoText = document.querySelectorAll(".aboutme__info__text");
    const skillImg = document.querySelectorAll(".skill__tool__img");

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

    header.classList.remove("header--darkmode");
    navSections.classList.remove("nav__sections--darkmode");
    profileTitle.classList.remove("profile__title--darkmode");
    profileDesc.classList.remove("profile__description--darkmode");
    profileDescWord.classList.remove("profile__description__word--darkmode");
    projectsTitle.classList.remove("projects__title--darkmode");
    aboutmeInfo.classList.remove("aboutme__info--darkmode");
    aboutmeTitle.classList.remove("aboutme__title--darkmode");
    aboutmeInfoTitle.classList.remove("aboutme__info__title--darkmode");
    contactTitle.classList.remove("contact__title--darkmode");
    contactInfoLinks.classList.remove("contact__info__links--darkmode");
    skillsTitle.classList.remove("skills__title--darkmode");
    skillsContainer.classList.remove("skills__container--darkmode");
    footer.classList.remove("footer--darkmode");

    profileLink.forEach((element) => {
        element.classList.remove("profile__links__link--darkmode");
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
    skillTitle.forEach((element) => {
        element.classList.remove("skill__title--darkmode");
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

    aboutmeInfoText.forEach((element) => {
        element.classList.remove("aboutme__info__text--darkmode");
    });
    skill.forEach((element) => {
        element.classList.remove("skill--darkmode");
    });
    skillContTool.forEach((element) => {
        element.classList.remove("skill__container__tool--darkmode");
    });

    for (let i = 0; i < skillImg.length; i++) {
        if (i == 0) {
            skillImg[i].setAttribute(
                "src",
                "./assets/svg/skills/soft-skills-svg/teamwork.svg"
            );
        }
        if (i == 1) {
            skillImg[i].setAttribute(
                "src",
                "./assets/svg/skills/soft-skills-svg/planningtime.svg"
            );
        }
        if (i == 2) {
            skillImg[i].setAttribute(
                "src",
                "./assets/svg/skills/soft-skills-svg/criticalthinking.svg"
            );
        }
        if (i == 3) {
            skillImg[i].setAttribute(
                "src",
                "./assets/svg/skills/soft-skills-svg/proethics.svg"
            );
        }
        if (i == 4) {
            skillImg[i].setAttribute(
                "src",
                "./assets/svg/skills/soft-skills-svg/communication.svg"
            );
        }
        if (i == 5) {
            skillImg[i].setAttribute(
                "src",
                "./assets/svg/skills/soft-skills-svg/negotiation.svg"
            );
        }
        if (i == 6) {
            skillImg[i].setAttribute(
                "src",
                "./assets/svg/skills/soft-skills-svg/adaptability.svg"
            );
        }
        if (i == 7) {
            skillImg[i].setAttribute(
                "src",
                "./assets/svg/skills/languages-svg/lang.svg"
            );
        }
        if (i == 8) {
            skillImg[i].setAttribute(
                "src",
                "./assets/svg/skills/languages-svg/lang.svg"
            );
        }
    }
};

export { darkMode, lightMode };
