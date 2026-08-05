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
        'hero.tagline': 'Diseño infraestructuras Azure resilientes, escalables y optimizadas en costos.',
        'hero.role': 'Azure Cloud Architect | AI Automation & Governance | Infrastructure Design',
        'hero.bio': 'Diseño arquitecturas Azure resilientes, seguras y financieramente eficientes, y desarrollo agentes de IA que automatizan operaciones, auditorías y gobernanza. Si la nube tiene un problema, me gusta resolverlo con ingeniería.',
        'hero.cta': 'Descargar CV',
        'hero.contact': 'Contáctame',
        'hero.roles': 'Azure Cloud Architect|AI Automation & Governance|Infrastructure Design',
        'hero.stat1.value': '5',
        'hero.stat1.label': 'Certificaciones Azure',
        'hero.stat2.value': '1+',
        'hero.stat2.label': 'Años en Cloud',
        'hero.stat3.value': '5+',
        'hero.stat3.label': 'Proyectos Cloud',
        'hero.stat4.value': 'B2',
        'hero.stat4.label': 'Inglés',

        // About
        'about.title': 'Sobre mí',
        'about.description': 'Transformo infraestructuras complejas en soluciones escalables, seguras y financieramente eficientes mediante la convergencia entre el desarrollo de software y la arquitectura cloud. Como Azure Cloud Architect, diseño soluciones de identidad, gobernanza, continuidad de negocio e infraestructura alineadas al Well-Architected Framework y al Cloud Adoption Framework (CAF), con foco en migración de bases de datos de misión crítica, gobernanza híbrida sobre Azure Arc, automatización con agentes de IA (Copilot Studio y Azure AI Foundry), FinOps y arquitecturas de red Zero Trust. Complemento mi perfil con metodología ágil (Scrum, Azure DevOps) y documentación técnica clara como activo estratégico para la continuidad del negocio.',
        'about.education': 'Educación',
        'about.experience': 'Experiencia',
        'about.certifications': 'Certificaciones',
        'about.current': 'Actual',
        'about.techused': 'Tecnologías',
        'about.changelog': 'Historial',
        'changelog.uade': 'Ingeniería en Informática',
        'changelog.azure': 'Azure Cloud Engineer',
        'changelog.cloud': 'Cloud Engineer',
        'changelog.ifts': 'Tecnicatura en Desarrollo de Software',

        // Education entries
        'edu.uade.title': 'Ingeniería en Informática',
        'edu.uade.institution': 'UADE',
        'edu.uade.period': 'Mar 2026 – Nov 2030',
        'edu.uade.status': 'Cursando',
        'edu.uade.description': 'Iniciando la formación de grado para profundizar en los fundamentos científicos y metodológicos de la computación. Mi objetivo es complementar mi experiencia previa como Técnico Superior y Cloud Engineer con una base sólida en ingeniería de sistemas complejos.',
        'edu.uade.details': 'Pensamiento Sistémico: Análisis y modelado de sistemas de información y teoría de sistemas para la optimización de procesos organizacionales\nFundamentos de Ingeniería: Fortalecimiento de la base lógica, algorítmica y matemática (Álgebra y Geometría) aplicada a la resolución de problemas técnicos\nSoft Skills Profesionales: Desarrollo de pensamiento crítico y comunicación efectiva, esenciales para el liderazgo de equipos técnicos y la gestión de proyectos',

        'edu.ifts.title': 'Tecnicatura Superior en Desarrollo de Software',
        'edu.ifts.institution': 'Instituto de Formación Técnica Superior N° 11',
        'edu.ifts.period': 'Ago 2023 - Nov 2025',
        'edu.ifts.status': 'Graduado',
        'edu.ifts.description': 'Formación técnica superior con enfoque en diseño de sistemas escalables, arquitecturas distribuidas y despliegue en entornos Cloud. Graduado con proyecto final de impacto real: plataforma SaaS Inquiro.',
        'edu.ifts.details': 'Proyecto Inquiro (SaaS): Desarrollé en equipo una plataforma SaaS para gestión y análisis inteligente de encuestas mediante IA generativa\nArquitectura Cloud (AWS): Infraestructura resiliente con VPC y segmentación de subredes públicas/privadas en múltiples Zonas de Disponibilidad (AZ), garantizando alta disponibilidad y aislamiento de cargas\nNetworking & Seguridad: Elastic Load Balancing (ELB) y NAT Gateways para alta disponibilidad y salida segura de instancias privadas hacia Internet\nIA & Data Insights: Integración de modelos de lenguaje vía Groq para automatizar el análisis semántico de respuestas y generación de reportes ejecutivos automatizados\nStack Tecnológico: Desarrollo Full-Stack con Node.js (Express), Angular, TypeScript y Tailwind CSS. DynamoDB como base de datos NoSQL escalable para persistencia de encuestas y respuestas\nLiderazgo & Gestión: Liderazgo técnico del equipo bajo metodología Scrum, con gestión del ciclo de vida del proyecto en Notion. Documentación técnica y decisiones de arquitectura a cargo del equipo',

        // Experience entries
        'exp.movistar.title': 'Azure Cloud Architect',
        'exp.movistar.company': 'Movistar Argentina',
        'exp.movistar.type': 'Full-time',
        'exp.movistar.period': 'Jun 2026 – Presente',
        'exp.movistar.location': 'Provincia de Buenos Aires, Argentina · Híbrido',
        'exp.movistar.description': 'Arquitectura y consultoría cloud, con foco en migración de bases de datos, gobernanza híbrida, automatización con IA y seguridad en entornos productivos de misión crítica.\nMigración de Bases de Datos & Alta Disponibilidad: Evalué y diseñé estrategias de migración de SQL Server Standard a Enterprise, comparando Log Shipping y Azure Database Migration Service (DMS), con pruebas offline y online en laboratorio para minimizar downtime en bases de datos productivas 24/7.\nGobernanza Híbrida & Azure Arc: Auditoría de cobertura de Azure Update Manager sobre una flota híbrida VMware/Azure, incluyendo revisión de update rings, identificando servidores sin Azure Arc y sistemas operativos end-of-life, con informes ejecutivos de remediación.\nAutomatización & IA (Copilot Studio / Azure AI Foundry): Diseñé agentes de IA para automatizar tareas operativas y de análisis, entre ellos un orquestador multiagente sobre Copilot Studio con SharePoint Lists como backend, y un agente sobre Azure AI Foundry con Code Interpreter que procesa datos exportados y genera reportes en Word aplicando buenas prácticas de seguridad.\nIntegración On-Premises: Implementé un laboratorio con SQL Server y On-premises Data Gateway para conectar Copilot Studio a bases de datos locales, resolviendo casos reales de integración híbrida.\nSeguridad & Optimización de Costos: Resolví incidencias de Secure Score / Defender for Cloud, auditué licenciamiento de NVAs (PAYG vs BYOL), y gestioné GDAP, roles RBAC y cuotas en Azure.\nSoporte Técnico: Resolví incidentes de redes (VPN Gateway), licenciamiento SQL (Azure Hybrid Benefit) y facturación, colaborando en inglés con soporte de Microsoft.\nCapacitación: Dicté capacitaciones de Microsoft 365 Copilot a clientes y lideré knowledge transfer interno sobre IA generativa.',

        'exp.azure.title': 'Azure Cloud Engineer',
        'exp.azure.company': 'readymind',
        'exp.azure.type': 'Full-time',
        'exp.azure.period': 'Oct 2025 – Jun 2026',
        'exp.azure.location': 'Buenos Aires, Argentina · Híbrido',
        'exp.azure.description': 'Consultoría cloud y evaluaciones técnicas para clientes corporativos, con enfoque en migraciones de gran escala, gobernanza y automatización personalizada.\nAutomatización & Tooling (ACIM & ARGUS): Diseñé y desarrollé plataformas internas full-stack (Astro, Tailwind, Azure Functions) para automatizar la gestión de Service Principals, almacenamiento en Key Vault y auditoría avanzada de tenants mediante KQL (Azure Resource Graph).\nEvaluación de Migración (Azure Migrate): Lideré proyectos de assessment para la transición de entornos on-premise a Azure. Análisis comparativos de costos (TCO) contemplando escenarios PAYG, RI 1y y RI 3y para fundamentar decisiones de inversión.\nEjecución de Migraciones: Movimientos complejos de recursos entre suscripciones y RGs (Lift & Shift / Re-platforming) utilizando ARM Templates, garantizando integridad de dependencias y optimización de ventanas de mantenimiento.\nAzure Arc & Gestión Híbrida: Lideré el onboarding de servidores on-premise y de otras nubes bajo Azure Arc, habilitando monitoreo centralizado (AMA/DCR), gestión de parches con Update Manager y administración remota mediante Windows Admin Center, extendiendo la gobernanza de Azure a entornos híbridos y multicloud.\nGobernanza & FinOps: Auditorías integrales con Azure Advisor y Resource Graph. Implementé recomendaciones de optimización (Reserved Instances, Right-sizing) y seguridad (RBAC Least Privilege, Azure Policy).\nConsultoría & Troubleshooting: Liderazgo de sesiones técnicas con clientes y soporte especializado en arquitecturas híbridas y cloud-native, guiando la resolución de incidentes críticos en vivo.\nAgile DevOps: Automatización de tareas masivas con PowerShell y gestión del ciclo de vida del proyecto bajo metodologías Scrum en Azure DevOps (ADO).',

        'exp.cloud.title': 'Cloud Engineer',
        'exp.cloud.company': 'readymind',
        'exp.cloud.period': 'May 2025 – Sep 2025',
        'exp.cloud.location': 'Remoto',
        'exp.cloud.description': 'Implementación de soluciones de infraestructura y automatización orientadas a la optimización de procesos internos y la adopción de estándares de Microsoft Azure.\nAzure Infrastructure: Aprovisionamiento y administración de recursos IaaS y PaaS, incluyendo máquinas virtuales (VMs) y SQL Databases, asegurando el cumplimiento de buenas prácticas de gobernanza (Resource Groups, Tagging y RBAC).\nBusiness Automation (Low-code): Diseño y despliegue de aplicaciones empresariales con Power Apps y automatización de flujos de trabajo con Power Automate para mejorar la eficiencia operativa interna.\nData Analytics: Desarrollo de tableros interactivos en Power BI para la visualización de indicadores clave, integrando fuentes de datos SQL para facilitar la toma de decisiones basada en datos.',

        // Case Studies
        'casestudies.title': 'Desafíos y Soluciones Cloud',
        'casestudies.subtitle': 'Casos reales de infraestructura, gobernanza y optimización en Microsoft Azure.',
        'casestudies.challengeLabel': 'Desafío',
        'casestudies.solutionLabel': 'Solución',
        'casestudies.stackLabel': 'Stack',
        'projects.impact.label': 'Resultado',
        'projects.impact1': 'Reducción del 80% en el tiempo de asignación de permisos. Detección proactiva de anomalías de acceso en múltiples suscripciones.',
        'projects.impact2': 'Visibilidad completa de 200+ recursos Azure en un solo reporte. Plan de remediación entregado al cliente con prioridades claras.',
        'projects.impact3': 'Migración sin downtime de 15+ VMs y bases de datos entre suscripciones. Continuidad de negocio garantizada durante todo el proceso.',
        'projects.impact4': 'Identificación de un 30% de ahorro potencial en infraestructura. Alineación del gasto técnico con el presupuesto estratégico del cliente.',
        'projects.impact5': 'Documentación técnica adoptada como estándar del equipo. Reducción de la brecha de comprensión entre áreas técnicas y de negocio.',

        // Case Study entries
        'case1.title': 'Automatización de Seguridad y Gobernanza',
        'case1.challenge': 'El cliente requería auditar permisos excesivos y garantizar cumplimiento de políticas de seguridad en múltiples suscripciones Azure. La revisión manual era lenta, propensa a errores y no escalable ante el crecimiento del entorno.',
        'case1.solution': 'Se desarrollaron scripts avanzados en PowerShell para generar reportes automatizados de asignaciones RBAC, detectar roles de alto privilegio y exponer anomalías de acceso. Los reportes se entregaron en formato estructurado para facilitar la toma de decisiones del equipo de seguridad.',

        'case2.title': 'Análisis de Infraestructura y Plan de Remediación',
        'case2.challenge': 'El entorno Azure del cliente carecía de visibilidad sobre recursos huérfanos, configuraciones no óptimas y desvíos de gobernanza acumulados durante su crecimiento. No existía un inventario centralizado ni un proceso de revisión periódica.',
        'case2.solution': 'Se ejecutó un análisis profundo con Cloudockit y Azure Resource Graph para inventariar todos los activos, identificar recursos sin dueño y detectar brechas de configuración. El resultado fue un plan de acción correctivo priorizado, entregado con estimación de impacto por ítem.',

        'case3.title': 'Migración Compleja Cross-Subscription',
        'case3.challenge': 'Se debían mover recursos críticos (VMs, bases de datos, App Services) entre suscripciones distintas con mínimo tiempo de inactividad, en escenarios donde el movimiento nativo de Azure no estaba soportado. El entorno de producción no admitía ventanas de mantenimiento prolongadas.',
        'case3.solution': 'Se ejecutó una estrategia de migración basada en backups de bases de datos, clonación de App Services y recreación de recursos mediante IaC en el destino. Cada fase fue coordinada con ventanas de mantenimiento acordadas, validando dependencias entre RGs y suscripciones antes de cada movimiento.',

        'case4.title': 'Optimización de Costos (FinOps)',
        'case4.challenge': 'El cliente tenía dificultades para estimar y controlar el gasto en su entorno Azure dinámico, sin herramientas que tradujesen el costo técnico en términos comprensibles para el negocio. La falta de visibilidad impedía justificar inversiones en Reserved Instances u otras optimizaciones.',
        'case4.solution': 'Se diseñaron calculadoras personalizadas y reportes de estimación de costos comparando escenarios PAYG, Reserved Instances 1y y 3y. Los entregables permitieron al cliente alinear el gasto técnico con su presupuesto estratégico y tomar decisiones de inversión fundamentadas en datos.',

        'case5.title': 'Comunicación Técnica y Documentación',
        'case5.challenge': 'Existía una brecha significativa entre los equipos técnicos y los stakeholders de negocio al momento de presentar arquitecturas complejas o justificar decisiones de adopción cloud. Los reportes puramente técnicos no generaban adhesión ni comprensión ejecutiva.',
        'case5.solution': 'Se creó documentación detallada y presentaciones visuales de alto impacto usando Canva y herramientas de diagramas, alineadas con el Cloud Adoption Framework (CAF). Las presentaciones tradujeron conceptos técnicos en valor de negocio, facilitando la aprobación de iniciativas y la alineación entre áreas.',

        // Internal Tools
        'acim.title': 'ACIM — Azure Client Identity Manager',
        'acim.challenge': 'Era necesario gestionar identidades de clientes Azure (Service Principals) de forma segura y centralizada, evitando la exposición de secrets en texto plano. Adicionalmente, los archivos de auditoría HTML generados necesitaban ser servidos con acceso controlado, sin exponer las rutas directas al storage.',
        'acim.solution': 'Se desarrolló una plataforma interna full-stack (Astro, Tailwind, Azure Functions) que automatiza el registro de Service Principals: el tenant-id y app-id se persisten en Azure Table Storage, mientras el secret se almacena cifrado en Key Vault. Una Azure Function detecta la creación de archivos HTML en un Storage Account y genera automáticamente un endpoint en una Web App, con autenticación propia que bloquea el acceso directo al HTML sin login.',
        'acim.impact': 'Eliminación de secrets en texto plano mediante Key Vault. Entrega automatizada de archivos de auditoría con acceso controlado por autenticación propia y endpoints dinámicos generados por Azure Functions.',

        'acimargus.title': 'ACIM-ARGUS — Azure Resource Graph Universal Scanner',
        'acimargus.challenge': 'Los auditores necesitaban analizar masivamente recursos de múltiples tenants Azure sin escribir KQL manualmente ni depender de accesos persistentes. El proceso manual era lento, repetitivo y no permitía exportar los resultados para análisis posterior.',
        'acimargus.solution': 'Se desarrolló una herramienta interna de auditoría (Astro, Tailwind, Azure Resource Graph) con interfaz visual de consulta: el usuario selecciona suscripciones, resource groups y tipos de recursos con filtros dinámicos, sin escribir KQL. Incluye templates preconfigurados para los casos más frecuentes (recursos huérfanos, IPs públicas, Private Endpoints sin configurar) y exportación CSV para análisis posterior.',
        'acimargus.impact': 'Auditoría masiva de tenants Azure sin escribir KQL. Templates listos para los casos de uso más frecuentes y exportación CSV para análisis posterior con datos crudos.',

        'sqlmigration.title': 'Migración SQL Server Standard → Enterprise sin Downtime',
        'sqlmigration.challenge': 'La flota de bases de datos SQL Server operaba en producción 24/7 y requería escalar de Standard a Enterprise, pero cualquier corte prolongado impactaba directamente al negocio. No existía una estrategia validada para migrar sin un downtime inaceptable.',
        'sqlmigration.solution': 'Se realizó una evaluación comparativa entre Log Shipping y Azure Database Migration Service (DMS), ejecutando pruebas offline y online en un entorno de laboratorio para medir tiempos de corte y validar la integridad de los datos antes de aplicar la estrategia elegida en producción.',
        'sqlmigration.impact': 'Estrategia de migración validada en laboratorio con downtime minimizado, reduciendo el riesgo de interrupción en bases de datos productivas críticas.',

        'aiagents.title': 'Agentes de IA para Automatización (Copilot Studio & Azure AI Foundry)',
        'aiagents.challenge': 'Tareas operativas y de auditoría recurrentes se realizaban de forma manual, consumiendo tiempo del equipo técnico y dependiendo de fuentes de datos híbridas (on-premises y cloud) sin integración directa entre sí.',
        'aiagents.solution': 'Se diseñaron agentes de IA sobre Copilot Studio y Azure AI Foundry (con Code Interpreter) para automatizar reportes y análisis, integrando un On-premises Data Gateway que conecta SQL Server local, aplicando buenas prácticas de seguridad en cada integración.',
        'aiagents.impact': 'Reportes y análisis operativos automatizados, con integración híbrida de datos on-premises y cloud sin exponer credenciales ni comprometer la seguridad.',

        // Skills
        'skills.title': 'Habilidades',
        'skills.description': 'Tecnologías, herramientas y competencias que aplico en proyectos reales de infraestructura cloud.',
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
        'contact.emailSubtitle': 'Enviar correo',
        'contact.linkedinSubtitle': 'Ver perfil',
        'contact.githubSubtitle': 'Ver proyectos',
        'contact.microsoftLearn': 'Microsoft Learn',
        'contact.microsoftLearnSubtitle': 'Ver certificaciones',
        'contact.heading': 'Hablemos',
        'contact.subheading': '¿Tenés un proyecto en mente?',
        'contact.description': 'Si te interesa mi perfil, tenés una propuesta o simplemente querés charlar, no dudes en escribirme.',
        'contact.cta': 'Enviar un mensaje',

        // Footer
        'footer.text': 'Programado con ❤️ por Kevin',
        'footer.rights': 'Todos los derechos reservados.',
        'footer.madeWith': 'Hecho con ♥ usando Astro y Tailwind CSS',
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
        'hero.tagline': 'I design resilient, scalable, and cost-optimized Azure infrastructures.',
        'hero.role': 'Azure Cloud Architect | AI Automation & Governance | Infrastructure Design',
        'hero.bio': 'I design resilient, secure, and cost-efficient Azure architectures, and build AI agents that automate operations, audits, and governance. If the cloud has a problem, I like solving it with engineering.',
        'hero.cta': 'Download CV',
        'hero.contact': 'Contact me',
        'hero.roles': 'Azure Cloud Architect|AI Automation & Governance|Infrastructure Design',
        'hero.stat1.value': '5',
        'hero.stat1.label': 'Azure Certifications',
        'hero.stat2.value': '1+',
        'hero.stat2.label': 'Years in Cloud',
        'hero.stat3.value': '5+',
        'hero.stat3.label': 'Cloud Projects',
        'hero.stat4.value': 'B2',
        'hero.stat4.label': 'English',

        // About
        'about.title': 'About me',
        'about.description': 'I transform complex infrastructures into scalable, secure, and cost-efficient solutions by converging software engineering and cloud architecture. As an Azure Cloud Architect, I design identity, governance, business continuity, and infrastructure solutions aligned with the Well-Architected Framework and the Cloud Adoption Framework (CAF), focusing on mission-critical database migrations, hybrid governance via Azure Arc, AI-driven automation (Copilot Studio and Azure AI Foundry), FinOps, and Zero Trust network architectures. I round out my profile with agile methodology (Scrum, Azure DevOps) and clear technical documentation as a strategic asset for business continuity.',
        'about.education': 'Education',
        'about.experience': 'Experience',
        'about.certifications': 'Certifications',
        'about.current': 'Current',
        'about.techused': 'Tech used',
        'about.changelog': 'Timeline',
        'changelog.uade': 'Bachelor of Science in Computer Engineering',
        'changelog.azure': 'Azure Cloud Engineer',
        'changelog.cloud': 'Cloud Engineer',
        'changelog.ifts': 'Associate Degree in Software Development',

        // Education entries
        'edu.uade.title': 'Bachelor of Science in Computer Engineering',
        'edu.uade.institution': 'UADE',
        'edu.uade.period': 'Mar 2026 – Nov 2030',
        'edu.uade.status': 'In progress',
        'edu.uade.description': 'Starting an undergraduate program to deepen the scientific and methodological foundations of computing. My goal is to complement my prior experience as a Software Developer and Cloud Engineer with a solid foundation in complex systems engineering.',
        'edu.uade.details': 'Systemic Thinking: Analysis and modeling of information systems and systems theory for the optimization of organizational processes\nEngineering Fundamentals: Strengthening logical, algorithmic, and mathematical foundations (Algebra and Geometry) applied to solving technical problems\nProfessional Soft Skills: Development of critical thinking and effective communication, essential for technical team leadership and project management',

        'edu.ifts.title': 'Associate Degree in Software Development',
        'edu.ifts.institution': 'Instituto de Formación Técnica Superior N° 11',
        'edu.ifts.period': 'Aug 2023 - Nov 2025',
        'edu.ifts.status': 'Graduated',
        'edu.ifts.description': 'Higher technical education focused on scalable system design, distributed architectures, and Cloud deployment. Graduated with a real-impact final project: the Inquiro SaaS platform.',
        'edu.ifts.details': 'Inquiro Project (SaaS): Co-developed a SaaS platform for intelligent survey management and AI-driven analysis using generative language models\nCloud Architecture (AWS): Resilient infrastructure with VPC and public/private subnet segmentation across multiple Availability Zones (AZ), ensuring high availability and workload isolation\nNetworking & Security: Elastic Load Balancing (ELB) and NAT Gateways for high availability and secure outbound traffic from private instances\nAI & Data Insights: Language model integration via Groq to automate semantic analysis of survey responses and generation of automated executive reports\nTech Stack: Full-Stack development with Node.js (Express), Angular, TypeScript, and Tailwind CSS. DynamoDB as scalable NoSQL database for survey and response persistence\nLeadership & Management: Technical team leadership under Scrum methodology, with project lifecycle managed in Notion. Technical documentation and architecture decisions owned by the team',

        // Experience entries
        'exp.movistar.title': 'Azure Cloud Architect',
        'exp.movistar.company': 'Movistar Argentina',
        'exp.movistar.type': 'Full-time',
        'exp.movistar.period': 'Jun 2026 – Present',
        'exp.movistar.location': 'Buenos Aires Province, Argentina · Hybrid',
        'exp.movistar.description': 'Cloud architecture and consulting, focused on database migration, hybrid governance, AI automation, and security in mission-critical production environments.\nDatabase Migration & High Availability: Assessed and designed SQL Server Standard-to-Enterprise migration strategies, comparing Log Shipping and Azure Database Migration Service (DMS), with offline and online lab testing to minimize downtime on 24/7 production databases.\nHybrid Governance & Azure Arc: Audited Azure Update Manager coverage across a hybrid VMware/Azure fleet, including update ring review, identifying servers without Azure Arc and end-of-life operating systems, with executive remediation reports.\nAutomation & AI (Copilot Studio / Azure AI Foundry): Designed AI agents to automate operational and analytical tasks, including a multi-agent orchestrator on Copilot Studio with SharePoint Lists as the backend, and an Azure AI Foundry agent with Code Interpreter that processes exported data and generates Word reports following security best practices.\nOn-Premises Integration: Built a lab with SQL Server and On-premises Data Gateway to connect Copilot Studio to local databases, solving real hybrid integration cases.\nSecurity & Cost Optimization: Resolved Secure Score / Defender for Cloud findings, audited NVA licensing (PAYG vs BYOL), and managed GDAP, RBAC roles, and Azure quotas.\nTechnical Support: Resolved networking incidents (VPN Gateway), SQL licensing (Azure Hybrid Benefit), and billing issues, collaborating in English with Microsoft support.\nTraining: Delivered Microsoft 365 Copilot training to clients and led internal knowledge transfer on generative AI.',

        'exp.azure.title': 'Azure Cloud Engineer',
        'exp.azure.company': 'readymind',
        'exp.azure.type': 'Full-time',
        'exp.azure.period': 'Oct 2025 – Jun 2026',
        'exp.azure.location': 'Buenos Aires, Argentina · Hybrid',
        'exp.azure.description': 'Cloud consulting and technical assessments for corporate clients, focused on large-scale migrations, governance, and custom automation.\nAutomation & Tooling (ACIM & ARGUS): Designed and developed full-stack internal platforms (Astro, Tailwind, Azure Functions) to automate Service Principal management, Key Vault storage, and advanced tenant auditing via KQL (Azure Resource Graph).\nMigration Assessment (Azure Migrate): Led assessment projects for the transition from on-premise environments to Azure. Comparative cost analysis (TCO) across PAYG, 1y RI, and 3y RI scenarios to support investment decisions.\nMigration Execution: Complex resource movements between subscriptions and RGs (Lift & Shift / Re-platforming) using ARM Templates, ensuring dependency integrity and optimized maintenance windows.\nAzure Arc & Hybrid Management: Led the onboarding of on-premise and other-cloud servers under Azure Arc, enabling centralized monitoring (AMA/DCR), patch management with Update Manager, and remote administration via Windows Admin Center, extending Azure governance to hybrid and multicloud environments.\nGovernance & FinOps: Comprehensive audits with Azure Advisor and Resource Graph. Implemented optimization (Reserved Instances, Right-sizing) and security (RBAC Least Privilege, Azure Policy) recommendations.\nConsulting & Troubleshooting: Led technical sessions with clients and specialized support in hybrid and cloud-native architectures, guiding live critical incident resolution.\nAgile DevOps: Bulk task automation with PowerShell and project lifecycle management under Scrum methodologies in Azure DevOps (ADO).',

        'exp.cloud.title': 'Cloud Engineer',
        'exp.cloud.company': 'readymind',
        'exp.cloud.period': 'May 2025 – Sep 2025',
        'exp.cloud.location': 'Remote',
        'exp.cloud.description': 'Implementation of infrastructure solutions and automation focused on internal process optimization and the adoption of Microsoft Azure standards.\nAzure Infrastructure: Provisioning and management of IaaS and PaaS resources, including virtual machines (VMs) and SQL Databases, ensuring compliance with governance best practices (Resource Groups, Tagging, and RBAC).\nBusiness Automation (Low-code): Design and deployment of enterprise applications with Power Apps and workflow automation with Power Automate to improve internal operational efficiency.\nData Analytics: Development of interactive Power BI dashboards for key indicator visualization, integrating SQL data sources to support data-driven decision-making.',

        // Case Studies
        'casestudies.title': 'Cloud Solutions & Case Studies',
        'casestudies.subtitle': 'Real-world cases of infrastructure, governance, and optimization on Microsoft Azure.',
        'casestudies.challengeLabel': 'Challenge',
        'casestudies.solutionLabel': 'Solution',
        'casestudies.stackLabel': 'Stack',
        'projects.impact.label': 'Impact',
        'projects.impact1': '80% reduction in permission assignment time. Proactive detection of access anomalies across multiple subscriptions.',
        'projects.impact2': 'Full visibility of 200+ Azure resources in a single report. Prioritized remediation plan delivered to the client.',
        'projects.impact3': 'Zero-downtime migration of 15+ VMs and databases across subscriptions. Business continuity maintained throughout the entire process.',
        'projects.impact4': 'Identified 30% potential infrastructure cost savings. Technical spending aligned with the client\'s strategic budget.',
        'projects.impact5': 'Technical documentation adopted as the team standard. Reduced comprehension gap between technical and business areas.',

        // Case Study entries
        'case1.title': 'Security Automation & Governance',
        'case1.challenge': 'The client needed to audit excessive permissions and enforce security policy compliance across multiple Azure subscriptions. Manual review was slow, error-prone, and unable to scale with the growing environment.',
        'case1.solution': 'Advanced PowerShell scripts were developed to generate automated RBAC assignment reports, extract high-privilege roles, and surface access anomalies. Deliverables were structured to directly support the security team\'s decision-making process.',

        'case2.title': 'Infrastructure Analysis & Remediation Plan',
        'case2.challenge': 'The client\'s Azure environment lacked visibility into orphaned resources, suboptimal configurations, and governance gaps accumulated over time. There was no centralized inventory or periodic review process in place.',
        'case2.solution': 'A deep analysis was performed using Cloudockit and Azure Resource Graph to inventory all assets, identify ownerless resources, and detect configuration gaps. The outcome was a prioritized corrective action plan delivered with estimated impact per item.',

        'case3.title': 'Complex Cross-Subscription Migration',
        'case3.challenge': 'Critical resources (VMs, databases, App Services) needed to be moved between different subscriptions with minimal downtime, in scenarios where Azure\'s native move was not supported. The production environment could not tolerate extended maintenance windows.',
        'case3.solution': 'A migration strategy was executed using database backups, App Service cloning, and IaC-based resource recreation at the destination. Each phase was coordinated with agreed maintenance windows, with cross-RG and cross-subscription dependency validation before every move.',

        'case4.title': 'Cost Optimization (FinOps)',
        'case4.challenge': 'The client struggled to estimate and control spending in their dynamic Azure environment, with no tools to translate technical costs into business-understandable terms. The lack of visibility made it hard to justify investments in Reserved Instances or other optimizations.',
        'case4.solution': 'Custom calculators and cost estimation reports were designed comparing PAYG, 1y Reserved Instances, and 3y Reserved Instances scenarios. The deliverables allowed the client to align technical spending with their strategic budget and make investment decisions backed by data.',

        'case5.title': 'Technical Communication & Documentation',
        'case5.challenge': 'There was a significant gap between technical teams and business stakeholders when presenting complex architectures or justifying cloud adoption decisions. Purely technical reports failed to generate executive buy-in or shared understanding.',
        'case5.solution': 'Detailed documentation and high-impact visual presentations were created using Canva and diagramming tools, aligned with the Cloud Adoption Framework (CAF). The presentations translated technical concepts into business value, facilitating initiative approval and cross-team alignment.',

        // Internal Tools
        'acim.title': 'ACIM — Azure Client Identity Manager',
        'acim.challenge': 'Azure client identities (Service Principals) needed to be managed securely and centrally, preventing secrets from being stored in plain text. Additionally, the generated HTML audit files required controlled access without exposing direct storage paths.',
        'acim.solution': 'A full-stack internal platform (Astro, Tailwind, Azure Functions) was built to automate Service Principal registration: tenant-id and app-id are persisted in Azure Table Storage, while secrets are stored encrypted in Key Vault. An Azure Function detects HTML file creation in a Storage Account and auto-generates a Web App endpoint with custom authentication, blocking direct HTML access without login.',
        'acim.impact': 'Secrets eliminated from plain text via Key Vault. Automated audit file delivery with access controlled by custom authentication and dynamic endpoints generated by Azure Functions.',

        'acimargus.title': 'ACIM-ARGUS — Azure Resource Graph Universal Scanner',
        'acimargus.challenge': 'Auditors needed to mass-analyze resources across multiple Azure tenants without writing KQL manually or relying on persistent access credentials. The manual process was slow, repetitive, and provided no way to export results for downstream analysis.',
        'acimargus.solution': 'An internal auditing tool (Astro, Tailwind, Azure Resource Graph) was built with a visual query interface: users select subscriptions, resource groups, and resource types with dynamic filters — no KQL required. Includes pre-built templates for the most common audit cases (orphan resources, public IPs, unconfigured Private Endpoints) and CSV export for downstream raw-data analysis.',
        'acimargus.impact': 'Mass auditing of Azure tenants without writing KQL. Ready-made templates for the most common audit cases and CSV export for downstream analysis with raw data.',

        'sqlmigration.title': 'SQL Server Standard-to-Enterprise Migration Without Downtime',
        'sqlmigration.challenge': 'The SQL Server database fleet ran in 24/7 production and needed to scale from Standard to Enterprise, but any extended cutover directly impacted the business. No validated strategy existed to migrate without unacceptable downtime.',
        'sqlmigration.solution': 'A comparative evaluation was performed between Log Shipping and Azure Database Migration Service (DMS), running offline and online tests in a lab environment to measure cutover times and validate data integrity before applying the chosen strategy in production.',
        'sqlmigration.impact': 'Lab-validated migration strategy with minimized downtime, reducing the risk of disruption on critical production databases.',

        'aiagents.title': 'AI Agent Automation (Copilot Studio & Azure AI Foundry)',
        'aiagents.challenge': 'Recurring operational and audit tasks were performed manually, consuming technical team time and depending on hybrid data sources (on-premises and cloud) with no direct integration between them.',
        'aiagents.solution': 'AI agents were designed on Copilot Studio and Azure AI Foundry (with Code Interpreter) to automate reports and analysis, integrating an On-premises Data Gateway to connect local SQL Server, applying security best practices across every integration.',
        'aiagents.impact': 'Automated operational reports and analysis, with hybrid on-premises and cloud data integration without exposing credentials or compromising security.',

        // Skills
        'skills.title': 'Skills',
        'skills.description': 'Technologies, tools and skills I apply in real cloud infrastructure projects.',
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
        'contact.emailSubtitle': 'Send email',
        'contact.linkedinSubtitle': 'View profile',
        'contact.githubSubtitle': 'View projects',
        'contact.microsoftLearn': 'Microsoft Learn',
        'contact.microsoftLearnSubtitle': 'View certifications',
        'contact.heading': "Let's talk",
        'contact.subheading': 'Got a project in mind?',
        'contact.description': 'If you like my profile, have a proposal, or just want to chat — feel free to reach out.',
        'contact.cta': 'Send a message',

        // Footer
        'footer.text': 'Built with ❤️ by Kevin',
        'footer.rights': 'All rights reserved.',
        'footer.madeWith': 'Made with ♥ using Astro & Tailwind CSS',
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
