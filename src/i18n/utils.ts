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
        'hero.role': 'Azure Cloud Engineer | Platform Engineering | Infrastructure Automation',
        'hero.bio': 'Construyo infraestructura cloud que escala, automatizo lo que debería automatizarse y diseño plataformas internas que eliminan silos entre el código y la operación. Si la nube tiene un problema, me gusta resolverlo con ingeniería.',
        'hero.cta': 'Descargar CV',
        'hero.contact': 'Contáctame',
        'hero.roles': 'Azure Cloud Engineer|Platform Engineer|Infrastructure Automation',
        'hero.stat1.value': '4',
        'hero.stat1.label': 'Certificaciones Azure',
        'hero.stat2.value': '1+',
        'hero.stat2.label': 'Años en Cloud',
        'hero.stat3.value': '5+',
        'hero.stat3.label': 'Proyectos Cloud',
        'hero.stat4.value': 'B2',
        'hero.stat4.label': 'Inglés',

        // About
        'about.title': 'Sobre mí',
        'about.description': 'Transformo infraestructuras complejas en soluciones escalables y seguras mediante la convergencia entre el desarrollo de software y la arquitectura cloud. Mi base como Técnico Superior en Desarrollo de Software me permite abordar Microsoft Azure con un enfoque de ingeniería, priorizando la automatización y el diseño de herramientas personalizadas que optimizan la operación. Lidero procesos de consultoría técnica para entornos corporativos de alta madurez, garantizando que la adopción de la nube sea resiliente, segura y financieramente eficiente, alineando cada solución a los estándares del Cloud Adoption Framework (CAF).',
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
        'edu.uade.description': 'Formación de grado orientada a profundizar en los fundamentos científicos y metodológicos de la computación. Objetivo: complementar la experiencia práctica como Técnico Superior y Cloud Engineer con una base sólida en ingeniería de sistemas complejos, arquitecturas distribuidas y metodología de investigación aplicada.',
        'edu.uade.details': 'Pensamiento Sistémico: Análisis y modelado de sistemas de información y teoría de sistemas para la optimización de procesos organizacionales complejos\nFundamentos de Ingeniería: Fortalecimiento de la base lógica, algorítmica y matemática (Álgebra y Geometría) aplicada a la resolución de problemas técnicos de alta complejidad\nSoft Skills Profesionales: Desarrollo de pensamiento crítico y comunicación efectiva, esenciales para el liderazgo de equipos técnicos y la gestión estratégica de proyectos',

        'edu.ifts.title': 'Tecnicatura Superior en Desarrollo de Software',
        'edu.ifts.institution': 'Instituto de Formación Técnica Superior N° 11',
        'edu.ifts.period': 'Ago 2023 - Nov 2025',
        'edu.ifts.status': 'Graduado',
        'edu.ifts.description': 'Formación técnica superior con enfoque en diseño de sistemas escalables, arquitecturas distribuidas y despliegue en entornos Cloud. Graduado con proyecto final de impacto real: plataforma SaaS Inquiro.',
        'edu.ifts.details': 'Proyecto Inquiro (SaaS): Desarrollé en equipo una plataforma SaaS para gestión y análisis inteligente de encuestas mediante IA generativa\nArquitectura Cloud (AWS): Infraestructura resiliente con VPC y segmentación de subredes públicas/privadas en múltiples Zonas de Disponibilidad (AZ), garantizando alta disponibilidad y aislamiento de cargas\nNetworking & Seguridad: Elastic Load Balancing (ELB) y NAT Gateways para alta disponibilidad y salida segura de instancias privadas hacia Internet\nIA & Data Insights: Integración de modelos de lenguaje vía Groq para automatizar el análisis semántico de respuestas y generación de reportes ejecutivos automatizados\nStack Tecnológico: Desarrollo Full-Stack con Node.js (Express), Angular, TypeScript y Tailwind CSS. DynamoDB como base de datos NoSQL escalable para persistencia de encuestas y respuestas\nLiderazgo & Gestión: Liderazgo técnico del equipo bajo metodología Scrum, con gestión del ciclo de vida del proyecto en Notion. Documentación técnica y decisiones de arquitectura a cargo del equipo',

        // Experience entries
        'exp.azure.title': 'Azure Cloud Engineer',
        'exp.azure.company': 'Readymind',
        'exp.azure.type': 'Full-time',
        'exp.azure.period': 'Oct 2025 – Presente',
        'exp.azure.location': 'Buenos Aires, Argentina · Híbrido',
        'exp.azure.description': 'Consultoría cloud y evaluaciones técnicas para clientes corporativos de alta madurez, con enfoque en migraciones de gran escala, gobernanza avanzada y automatización personalizada. Actúo como puente entre las necesidades comerciales y la ejecución técnica, garantizando que cada solución sea resiliente, segura y financieramente eficiente bajo los estándares del Cloud Adoption Framework (CAF).\nAutomatización & Tooling (ACIM & ARGUS): Diseñé y desarrollé plataformas internas full-stack (Astro, Tailwind, Azure Functions) para automatizar la gestión de Service Principals, almacenamiento seguro en Key Vault y auditoría avanzada de tenants mediante KQL con Azure Resource Graph.\nMigraciones de Recursos: Movimientos complejos de recursos entre suscripciones y Resource Groups (Lift & Shift / Re-platforming) mediante ARM Templates. Análisis de migrabilidad, dependencias entre RGs/suscripciones, recursos en producción y coordinación de ventanas de mantenimiento.\nEvaluación de Migración (Azure Migrate): Lideré proyectos de assessment on-premise → Azure. Análisis comparativos de TCO contemplando escenarios PAYG, RI 1y y RI 3y para fundamentar decisiones de inversión estratégica.\nAuditoría de Tenant: Análisis integral desde el portal, Azure Advisor y Azure Resource Graph. Identificación de buenas prácticas en costos (right-sizing, Reserved Instances, backups, recursos huérfanos, Spot VMs), gobernanza (tags, naming convention, RBAC, Least Privilege, Policies) y seguridad (Zero Trust, Hub & Spoke, Entra ID, Landing Zone).\nGobernanza & FinOps: Auditorías con Azure Advisor y Resource Graph. Recomendaciones de optimización (Reserved Instances, Right-sizing) y seguridad (RBAC Least Privilege, Azure Policy) en entornos multiregión.\nScripting con IA: Desarrollo de scripts PowerShell asistidos por agentes IA para extracción de roles con high privilege, borrado masivo de RGs, migración de bases de datos entre servidores e instalación de módulos.\nConsultoría & Troubleshooting: Sesiones técnicas con clientes para presentación de avances y resultados. Guía en modo manos remotas (el cliente ejecuta, Readymind guía). Troubleshooting en vivo e incidentes críticos en arquitecturas híbridas y cloud-native.\nComercial & Post-sales: Reuniones con el equipo comercial para definición de próximos pasos y propuestas de servicios post-sales a clientes.\nAgile DevOps: Gestión de tareas en Azure DevOps bajo metodología Scrum: planning, daily, review por sprint semanal y retrospectiva mensual. Automatización de operaciones masivas con PowerShell.',

        'exp.cloud.title': 'Cloud Engineer',
        'exp.cloud.company': 'Readymind',
        'exp.cloud.period': 'May 2025 – Sep 2025',
        'exp.cloud.location': 'Remoto',
        'exp.cloud.description': 'Implementación de soluciones de infraestructura y automatización orientadas a la optimización de procesos internos y la adopción de estándares de Microsoft Azure en entornos empresariales.\nAzure Infrastructure (IaaS & PaaS): Aprovisionamiento y administración de máquinas virtuales (VMs) y SQL Databases. Implementación de buenas prácticas de gobernanza: Resource Groups, Tagging estratégico y RBAC para control de accesos.\nBusiness Automation (Low-code): Diseño y despliegue de aplicaciones empresariales con Power Apps. Automatización de flujos de trabajo con Power Automate para mejorar la eficiencia operativa interna y reducir tareas manuales repetitivas.\nData Analytics & BI: Desarrollo de tableros interactivos en Power BI integrando fuentes de datos SQL, para visualización de indicadores clave (KPIs) y soporte a la toma de decisiones basada en datos.',

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
        'hero.role': 'Azure Cloud Engineer | Platform Engineering | Infrastructure Automation',
        'hero.bio': 'I build cloud infrastructure that scales, automate what should be automated, and design internal platforms that eliminate silos between code and operations. If the cloud has a problem, I like solving it with engineering.',
        'hero.cta': 'Download CV',
        'hero.contact': 'Contact me',
        'hero.roles': 'Azure Cloud Engineer|Platform Engineer|Infrastructure Automation',
        'hero.stat1.value': '4',
        'hero.stat1.label': 'Azure Certifications',
        'hero.stat2.value': '1+',
        'hero.stat2.label': 'Years in Cloud',
        'hero.stat3.value': '5+',
        'hero.stat3.label': 'Cloud Projects',
        'hero.stat4.value': 'B2',
        'hero.stat4.label': 'English',

        // About
        'about.title': 'About me',
        'about.description': 'I transform complex infrastructures into scalable, secure solutions by converging software engineering and cloud architecture. My background as a Software Development Technician lets me approach Microsoft Azure with an engineering mindset, prioritizing automation and custom tooling that streamlines operations. I lead technical consulting processes for high-maturity corporate environments, ensuring cloud adoption is resilient, secure, and financially efficient under Cloud Adoption Framework (CAF) standards.',
        'about.education': 'Education',
        'about.experience': 'Experience',
        'about.certifications': 'Certifications',
        'about.current': 'Current',
        'about.techused': 'Tech used',
        'about.changelog': 'Timeline',
        'changelog.uade': 'Computer Engineering',
        'changelog.azure': 'Azure Cloud Engineer',
        'changelog.cloud': 'Cloud Engineer',
        'changelog.ifts': 'Software Development Technician',

        // Education entries
        'edu.uade.title': 'Computer Engineering',
        'edu.uade.institution': 'UADE',
        'edu.uade.period': 'Mar 2026 – Nov 2030',
        'edu.uade.status': 'In progress',
        'edu.uade.description': 'Undergraduate program aimed at deepening scientific and methodological foundations of computing. Goal: complement practical experience as a Software Developer and Cloud Engineer with a solid foundation in complex systems engineering, distributed architectures, and applied research methodology.',
        'edu.uade.details': 'Systemic Thinking: Analysis and modeling of information systems and systems theory for the optimization of complex organizational processes\nEngineering Fundamentals: Strengthening logical, algorithmic, and mathematical foundations (Algebra and Geometry) applied to solving high-complexity technical problems\nProfessional Soft Skills: Development of critical thinking and effective communication, essential for technical team leadership and strategic project management',

        'edu.ifts.title': 'Software Development Technician',
        'edu.ifts.institution': 'Instituto de Formación Técnica Superior N° 11',
        'edu.ifts.period': 'Aug 2023 - Nov 2025',
        'edu.ifts.status': 'Graduated',
        'edu.ifts.description': 'Higher technical education focused on scalable system design, distributed architectures, and Cloud deployment. Graduated with a real-impact final project: the Inquiro SaaS platform.',
        'edu.ifts.details': 'Inquiro Project (SaaS): Co-developed a SaaS platform for intelligent survey management and AI-driven analysis using generative language models\nCloud Architecture (AWS): Resilient infrastructure with VPC and public/private subnet segmentation across multiple Availability Zones (AZ), ensuring high availability and workload isolation\nNetworking & Security: Elastic Load Balancing (ELB) and NAT Gateways for high availability and secure outbound traffic from private instances\nAI & Data Insights: Language model integration via Groq to automate semantic analysis of survey responses and generation of automated executive reports\nTech Stack: Full-Stack development with Node.js (Express), Angular, TypeScript, and Tailwind CSS. DynamoDB as scalable NoSQL database for survey and response persistence\nLeadership & Management: Technical team leadership under Scrum methodology, with project lifecycle managed in Notion. Technical documentation and architecture decisions owned by the team',

        // Experience entries
        'exp.azure.title': 'Azure Cloud Engineer',
        'exp.azure.company': 'Readymind',
        'exp.azure.type': 'Full-time',
        'exp.azure.period': 'Oct 2025 – Present',
        'exp.azure.location': 'Buenos Aires, Argentina · Hybrid',
        'exp.azure.description': 'Cloud consulting and technical assessments for high-maturity corporate clients, focused on large-scale migrations, advanced governance, and custom automation. I act as a bridge between business needs and technical execution, ensuring every solution is resilient, secure, and financially efficient under Cloud Adoption Framework (CAF) standards.\nAutomation & Tooling (ACIM & ARGUS): Designed and developed full-stack internal platforms (Astro, Tailwind, Azure Functions) to automate Service Principal management, secure Key Vault storage, and advanced tenant auditing via KQL with Azure Resource Graph.\nResource Migrations: Complex resource movements between subscriptions and Resource Groups (Lift & Shift / Re-platforming) using ARM Templates. Migratability analysis, cross-RG/subscription dependency mapping, production resource handling, and maintenance window coordination.\nMigration Assessment (Azure Migrate): Led on-premise → Azure assessment projects. TCO comparative analysis across PAYG, 1y RI, and 3y RI scenarios to support strategic investment decisions.\nTenant Auditing: Full analysis from the portal, Azure Advisor, and Azure Resource Graph. Best practice identification across cost (right-sizing, Reserved Instances, backups, orphan resources, Spot VMs), governance (tags, naming convention, RBAC, Least Privilege, Policies), and security (Zero Trust, Hub & Spoke, Entra ID, Landing Zone).\nGovernance & FinOps: Azure Advisor and Resource Graph audits. Optimization recommendations (Reserved Instances, Right-sizing) and security hardening (RBAC Least Privilege, Azure Policy) across multi-region environments.\nAI-Assisted Scripting: PowerShell scripts developed with AI agents for high-privilege role extraction, bulk RG deletion, cross-server database migration, and module installation.\nConsulting & Troubleshooting: Technical sessions with clients covering progress presentations and results. Remote-hands guidance sessions (client executes, Readymind guides). Live troubleshooting and critical incident resolution in hybrid and cloud-native architectures.\nCommercial & Post-sales: Meetings with the commercial team to define next steps and craft post-sales service proposals for clients.\nAgile DevOps: Task management in Azure DevOps under Scrum: planning, daily stand-up, weekly sprint review, and monthly retrospective. Bulk operation automation with PowerShell.',

        'exp.cloud.title': 'Cloud Engineer',
        'exp.cloud.company': 'Readymind',
        'exp.cloud.period': 'May 2025 – Sep 2025',
        'exp.cloud.location': 'Remote',
        'exp.cloud.description': 'Implementation of infrastructure solutions and automation focused on internal process optimization and adoption of Microsoft Azure standards in enterprise environments.\nAzure Infrastructure (IaaS & PaaS): Provisioning and management of virtual machines (VMs) and SQL Databases. Governance best practices: Resource Groups, strategic Tagging, and RBAC for access control.\nBusiness Automation (Low-code): Design and deployment of enterprise applications with Power Apps. Workflow automation with Power Automate to improve internal operational efficiency and reduce repetitive manual tasks.\nData Analytics & BI: Interactive Power BI dashboards integrating SQL data sources for KPI visualization and data-driven decision support.',

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
