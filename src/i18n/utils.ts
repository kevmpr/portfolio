export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const translations = {
    es: {
        // Nav
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.projects': 'Soluciones Cloud',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contacto',

        // Hero
        'hero.greeting': 'Hola, soy',
        'hero.name': 'Kevin Maximiliano Palma Romero',
        'hero.role': 'Azure Cloud Engineer',
        'hero.bio': 'Azure Cloud Engineer en Readymind, especializado en infraestructura, networking y gobierno sobre Microsoft Azure. Combino ejecución técnica hands-on con interacción con clientes y documentación alineada al Cloud Adoption Framework (CAF).',
        'hero.cta': 'Descargar CV',
        'hero.contact': 'Contáctame',

        // About
        'about.title': 'Sobre mí',
        'about.description': 'Participo en proyectos de consultoría cloud trabajando en despliegue de infraestructura, migraciones, movimientos cross-subscription y análisis de arquitectura. Mi formación en desarrollo de software me permite abordar la infraestructura cloud con una visión estructurada, orientada a arquitectura, documentación técnica y mejora continua.',
        'about.education': 'Educación',
        'about.experience': 'Experiencia',
        'about.certifications': 'Certificaciones',

        // Education entries
        'edu.uade.title': 'Ingeniería en Informática',
        'edu.uade.institution': 'UADE',
        'edu.uade.period': 'Mar 2026 – Presente',
        'edu.uade.status': 'En curso',
        'edu.uade.description': 'Profundizando en fundamentos de ingeniería informática, arquitectura de sistemas y gestión de proyectos tecnológicos.',

        'edu.ifts.title': 'Tecnicatura Superior en Desarrollo de Software',
        'edu.ifts.institution': 'Instituto de Formación Técnica Superior N° 11',
        'edu.ifts.period': 'Ago 2023 - Nov 2025',
        'edu.ifts.status': 'Graduado',
        'edu.ifts.description': 'Formación sólida e integral en desarrollo de software, abarcando todo el ciclo de vida de las aplicaciones.',
        'edu.ifts.details': 'Desarrollo Back-end y Front-end\nBases de datos relacionales y no relacionales\nArquitectura de software, diseño orientado a objetos y patrones\nDesarrollo de aplicaciones web y móviles\nPruebas de software, QA y metodologías de trabajo\nFundamentos de redes, sistemas y servicios cloud',

        // Experience entries
        'exp.azure.title': 'Azure Cloud Engineer',
        'exp.azure.company': 'Readymind',
        'exp.azure.type': 'Full-time',
        'exp.azure.period': 'Oct 2025 - Presente',
        'exp.azure.location': 'Buenos Aires, Argentina · Híbrido',
        'exp.azure.description': 'Participación en proyectos de consultoría cloud sobre Microsoft Azure, interactuando con clientes y área comercial para relevamiento técnico y definición de soluciones.\nAnálisis de inventarios y arquitectura utilizando Azure Resource Graph, Azure Advisor y Cloudockit, generando recomendaciones de optimización, seguridad y gobierno.\nEjecución de migraciones y movimientos de recursos (cross-subscription, resource groups) y recreación de infraestructura según requerimientos técnicos.\nDespliegue y configuración de recursos Azure: Virtual Machines, VNets, NSG, Web Apps, App Service Plans, SQL Server, MySQL Flexible Server, Function Apps, API Management, Private Endpoints, DNS, Application Gateway, entre otros.\nAutomatización de tareas mediante PowerShell, incluyendo exportación de RBAC, gestión de roles y eliminación masiva de recursos.\nEstimación de costos utilizando Azure Pricing Calculator y análisis inicial de prácticas FinOps.\nElaboración de documentación técnica, reportes ejecutivos y presentaciones para comunicar avances y entregables a clientes.',

        'exp.cloud.title': 'Cloud Engineer',
        'exp.cloud.company': 'Readymind',
        'exp.cloud.period': 'May 2025 - Sep 2025',
        'exp.cloud.location': 'Remoto',
        'exp.cloud.description': 'Contribuir en iniciativas internas orientadas a Microsoft Azure, low-code y soluciones de datos, adquiriendo experiencia base dentro del ecosistema Microsoft.\nObtener experiencia práctica en servicios principales de Azure mediante laboratorios técnicos y ejercicios guiados.\nAplicar conceptos fundamentales de infraestructura cloud, operación y buenas prácticas en entornos controlados.\nDesarrollar comprensión de arquitectura cloud, gobierno básico y modelos de despliegue como preparación para responsabilidades de infraestructura.',

        // Case Studies
        'casestudies.title': 'Desafíos y Soluciones Cloud',
        'casestudies.challengeLabel': 'Desafío',
        'casestudies.solutionLabel': 'Solución',
        'casestudies.stackLabel': 'Stack',

        // Case Study entries
        'case1.title': 'Automatización de Seguridad y Gobernanza',
        'case1.challenge': 'Necesidad de auditar permisos excesivos y garantizar cumplimiento de políticas de seguridad en múltiples suscripciones.',
        'case1.solution': 'Desarrollo de scripts avanzados en PowerShell para generar reportes automatizados de asignaciones RBAC y detectar anomalías de acceso.',

        'case2.title': 'Análisis de Infraestructura y Plan de Remediación',
        'case2.challenge': 'Falta de visibilidad sobre recursos huérfanos y configuraciones no óptimas en un entorno Azure en crecimiento.',
        'case2.solution': 'Implementación de un análisis profundo utilizando Cloudockit y Azure Resource Graph (ARG) para inventariar activos y generar un plan de acción correctivo.',

        'case3.title': 'Migración Compleja Cross-Subscription',
        'case3.challenge': 'Mover recursos críticos entre grupos de recursos y suscripciones diferentes con mínimo tiempo de inactividad, donde el movimiento nativo no era soportado.',
        'case3.solution': 'Ejecución de una estrategia de migración basada en backups de bases de datos, clonación de App Services y recreación de recursos mediante IaC en el destino.',

        'case4.title': 'Optimización de Costos (FinOps)',
        'case4.challenge': 'Dificultad para estimar y controlar el gasto en entornos de nube dinámicos.',
        'case4.solution': 'Diseño y generación de calculadoras personalizadas y reportes de estimación de costos para alinear el gasto técnico con el presupuesto del negocio.',

        'case5.title': 'Comunicación Técnica y Documentación',
        'case5.challenge': 'Brecha de comunicación entre los equipos técnicos y los stakeholders de negocio sobre arquitecturas complejas.',
        'case5.solution': 'Creación de documentación detallada y presentaciones visuales de alto impacto (Canva/Diagrams) para facilitar la toma de decisiones y el entendimiento del CAF (Cloud Adoption Framework).',

        // Skills
        'skills.title': 'Habilidades',
        'skills.technical': 'Habilidades Técnicas',
        'skills.soft': 'Habilidades Blandas',
        'skills.languages': 'Idiomas',

        // Soft skills
        'soft.collab': 'Colaboración y Comunicación',
        'soft.cognitive': 'Cognitivas y Resolución de Problemas',
        'soft.organization': 'Organización y Responsabilidad',
        'soft.teamwork': 'Trabajo en equipo',
        'soft.communication': 'Comunicación y escucha activa',
        'soft.negotiation': 'Negociación',
        'soft.critical': 'Pensamiento crítico',
        'soft.adaptability': 'Adaptabilidad',
        'soft.planning': 'Planificación y gestión del tiempo',
        'soft.ethics': 'Ética profesional',

        // Languages
        'lang.multilingual': 'Comunicación Multilingüe',
        'lang.spanish': 'Español (Nativo)',
        'lang.english': 'Inglés (Upper-Intermediate B2)',

        // Contact
        'contact.title': 'Contacto',
        'contact.subtitle': '¿Tenés un proyecto en mente? ¡Hablemos!',
        'contact.email': 'Email',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.reveal': 'Click para ver',
        'contact.emailDesc': 'Enviame un correo',
        'contact.linkedinDesc': 'Conectemos',
        'contact.githubDesc': 'Mirá mis repos',

        // Footer
        'footer.text': 'Programado con ❤️ por Kevin',
        'footer.rights': 'Todos los derechos reservados.',
    },
    en: {
        // Nav
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Cloud Solutions',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': "Hi, I'm",
        'hero.name': 'Kevin Maximiliano Palma Romero',
        'hero.role': 'Azure Cloud Engineer',
        'hero.bio': 'Azure Cloud Engineer at Readymind, specialized in infrastructure, networking, and governance on Microsoft Azure. I combine hands-on technical execution with client interaction and documentation aligned with the Cloud Adoption Framework (CAF).',
        'hero.cta': 'Download CV',
        'hero.contact': 'Contact me',

        // About
        'about.title': 'About me',
        'about.description': "I participate in cloud consulting projects working on infrastructure deployment, migrations, cross-subscription movements, and architecture analysis. My software development background allows me to approach cloud infrastructure with a structured vision, oriented towards architecture, technical documentation, and continuous improvement.",
        'about.education': 'Education',
        'about.experience': 'Experience',
        'about.certifications': 'Certifications',

        // Education entries
        'edu.uade.title': 'Computer Engineering',
        'edu.uade.institution': 'UADE',
        'edu.uade.period': 'Mar 2026 – Present',
        'edu.uade.status': 'In progress',
        'edu.uade.description': 'Deepening knowledge in computer engineering fundamentals, systems architecture, and technology project management.',

        'edu.ifts.title': 'Software Development Technician',
        'edu.ifts.institution': 'Instituto de Formación Técnica Superior N° 11',
        'edu.ifts.period': 'Aug 2023 - Nov 2025',
        'edu.ifts.status': 'Graduated',
        'edu.ifts.description': 'Strong and comprehensive training in software development, covering the entire application lifecycle.',
        'edu.ifts.details': 'Back-end & Front-end Development\nRelational & non-relational databases\nSoftware architecture, OOP design & patterns\nWeb & mobile application development\nSoftware testing, QA & work methodologies\nNetworking fundamentals, systems & cloud services',

        // Experience entries
        'exp.azure.title': 'Azure Cloud Engineer',
        'exp.azure.company': 'Readymind',
        'exp.azure.type': 'Full-time',
        'exp.azure.period': 'Oct 2025 - Present',
        'exp.azure.location': 'Buenos Aires, Argentina · Hybrid',
        'exp.azure.description': 'Participation in cloud consulting projects on Microsoft Azure, engaging with clients and commercial areas for technical requirement gathering and solution definition.\nInventory and architecture analysis using Azure Resource Graph, Azure Advisor, and Cloudockit, generating optimization, security, and governance recommendations.\nExecution of migrations and resource movements (cross-subscription, resource groups) and infrastructure recreation per technical requirements.\nDeployment and configuration of Azure resources: Virtual Machines, VNets, NSG, Web Apps, App Service Plans, SQL Server, MySQL Flexible Server, Function Apps, API Management, Private Endpoints, DNS, Application Gateway, among others.\nTask automation via PowerShell, including RBAC export, role management, and bulk resource deletion.\nCost estimation using Azure Pricing Calculator and initial FinOps practices analysis.\nPreparation of technical documentation, executive reports, and presentations to communicate progress and deliverables to clients.',

        'exp.cloud.title': 'Cloud Engineer',
        'exp.cloud.company': 'Readymind',
        'exp.cloud.period': 'May 2025 - Sep 2025',
        'exp.cloud.location': 'Remote',
        'exp.cloud.description': 'Contributing to internal initiatives focused on Microsoft Azure, low-code, and data solutions, acquiring foundational experience within the Microsoft ecosystem.\nGaining hands-on experience with core Azure services through technical labs and guided exercises.\nApplying fundamental cloud infrastructure, operations, and best practice concepts in controlled environments.\nDeveloping understanding of cloud architecture, basic governance, and deployment models as preparation for infrastructure responsibilities.',

        // Case Studies
        'casestudies.title': 'Cloud Solutions & Case Studies',
        'casestudies.challengeLabel': 'Challenge',
        'casestudies.solutionLabel': 'Solution',
        'casestudies.stackLabel': 'Stack',

        // Case Study entries
        'case1.title': 'Security Automation & Governance',
        'case1.challenge': 'Need to audit excessive permissions and ensure compliance with security policies across multiple subscriptions.',
        'case1.solution': 'Development of advanced PowerShell scripts to generate automated RBAC assignment reports and detect access anomalies.',

        'case2.title': 'Infrastructure Analysis & Remediation Plan',
        'case2.challenge': 'Lack of visibility into orphaned resources and suboptimal configurations in a growing Azure environment.',
        'case2.solution': 'Implementation of a deep analysis using Cloudockit and Azure Resource Graph (ARG) to inventory assets and generate a corrective action plan.',

        'case3.title': 'Complex Cross-Subscription Migration',
        'case3.challenge': 'Moving critical resources across resource groups and different subscriptions with minimum downtime, where native movement was not supported.',
        'case3.solution': 'Execution of a migration strategy based on database backups, App Service cloning, and resource recreation via IaC at the destination.',

        'case4.title': 'Cost Optimization (FinOps)',
        'case4.challenge': 'Difficulty estimating and controlling spending in dynamic cloud environments.',
        'case4.solution': 'Design and generation of custom calculators and cost estimation reports to align technical spending with business budgets.',

        'case5.title': 'Technical Communication & Documentation',
        'case5.challenge': 'Communication gap between technical teams and business stakeholders regarding complex architectures.',
        'case5.solution': 'Creation of detailed documentation and high-impact visual presentations (Canva/Diagrams) to facilitate decision-making and CAF (Cloud Adoption Framework) understanding.',

        // Skills
        'skills.title': 'Skills',
        'skills.technical': 'Technical Skills',
        'skills.soft': 'Soft Skills',
        'skills.languages': 'Languages',

        // Soft skills
        'soft.collab': 'Collaboration & Communication',
        'soft.cognitive': 'Cognitive & Problem Solving',
        'soft.organization': 'Organization & Responsibility',
        'soft.teamwork': 'Teamwork',
        'soft.communication': 'Communication & active listening',
        'soft.negotiation': 'Negotiation',
        'soft.critical': 'Critical thinking',
        'soft.adaptability': 'Adaptability',
        'soft.planning': 'Planning & time management',
        'soft.ethics': 'Professional ethics',

        // Languages
        'lang.multilingual': 'Multilingual Communication',
        'lang.spanish': 'Spanish (Native)',
        'lang.english': 'English (Upper-Intermediate B2)',

        // Contact
        'contact.title': 'Contact',
        'contact.subtitle': "Have a project in mind? Let's talk!",
        'contact.email': 'Email',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.reveal': 'Click to reveal',
        'contact.emailDesc': 'Send me an email',
        'contact.linkedinDesc': "Let's connect",
        'contact.githubDesc': 'Check my repos',

        // Footer
        'footer.text': 'Built with ❤️ by Kevin',
        'footer.rights': 'All rights reserved.',
    },
} as const;

export type TranslationKey = keyof typeof translations.es;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in translations) return lang as keyof typeof translations;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
    return function t(key: TranslationKey) {
        return translations[lang][key] || translations[defaultLang][key];
    };
}

export function getLocalizedPath(lang: string, hash: string = '') {
    return `/${lang}/${hash}`;
}
