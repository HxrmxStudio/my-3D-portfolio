import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    papernestIcon,
    logoBuenardo,
    isdiIcon,
    threejs,
    entelequiaPreview,
    portfolioPreview,
    unsocialPreview
} from "../assets";

export const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Team Player & Learner",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        translations: {
            en: {
                title: "Full Stack Developer - Student",
                company_name: "ISDI Coders Bootcamp",
                date: "2024",
                points: [
                    "Designed and developed full stack web applications using JavaScript, React.js, Node.js, and MongoDB.",
                    "Implemented responsive and mobile-first designs ensuring cross-browser compatibility.",
                    "Collaborated in agile teams to create functional projects, applying version control with Git.",
                    "Integrated RESTful APIs to ensure smooth communication between frontend and backend systems.",
                ],
            },
            es: {
                title: "Desarrollador Full Stack - Estudiante",
                company_name: "ISDI Coders Bootcamp",
                date: "2024",
                points: [
                    "Diseñé y desarrollé aplicaciones web full stack utilizando JavaScript, React.js, Node.js y MongoDB.",
                    "Implementé diseños responsive asegurando la compatibilidad entre navegadores.",
                    "Colaboré en equipo para crear proyectos funcionales, aplicando control de versiones con Git.",
                    "Integré APIs RESTful para garantizar una comunicación fluida entre sistemas frontend y backend.",
                ],
            },
        },
        icon: isdiIcon,
        iconBg: "#E6DEDD",
    },
    {
        translations: {
            en: {
                title: "Team Lead Account Manager & Customer Care B2B - Spain",
                company_name: "Papernest",
                date: "March 2022 - September 2024",
                points: [
                    "Utilized CRM tools such as Salesforce to analyze client data and automate workflows, gaining insight into software integrations.",
                    "Collaborated closely with product teams, providing feedback that informed technical improvements and feature enhancements.",
                    "Developed data-driven dashboards and reports, translating business needs into actionable insights using tech tools.",
                    "Demonstrated leadership and team management skills by mentoring and guiding team members to achieve collective goals.",
                ],
            },
            es: {
                title: "Líder de Equipo - Account Manager & Atención al Cliente B2B - España",
                company_name: "Papernest",
                date: "Marzo 2022 - Septiembre 2024",
                points: [
                    "Utilicé herramientas CRM como Salesforce para analizar datos de clientes y automatizar flujos de trabajo, obteniendo información sobre integraciones de software.",
                    "Colaboré estrechamente con equipos de producto, proporcionando comentarios que impulsaron mejoras técnicas y nuevas funcionalidades.",
                    "Desarrollé dashboards y reportes basados en datos, traduciendo necesidades empresariales en ideas accionables mediante herramientas tecnológicas.",
                    "Desarrolle habilidades de liderazgo y gestión de equipos, mentorizando y guiando a los miembros del equipo para alcanzar objetivos colectivos.",
                ],
            },
        },
        icon: papernestIcon,
        iconBg: "#383E56",
    },
    {
        translations: {
            en: {
                title: "Account Manager - Customer Success & Onboarding Specialist",
                company_name: "Papernest",
                date: "October 2020 - March 2022",
                points: [
                    "Streamlined onboarding processes by identifying improvements and suggesting process automation opportunities.",
                    "Explored APIs and SaaS solutions to ensure seamless integration with client systems.",
                    "Provided technical guidance to clients during onboarding, ensuring alignment with product capabilities.",
                    "Exhibited strong interpersonal and leadership abilities to foster collaboration and improve team performance.",
                ],
            },
            es: {
                title: "Account Manager - Customer Success & Onboarding Specialist",
                company_name: "Papernest",
                date: "Octubre 2020 - Marzo 2022",
                points: [
                    "Optimicé los procesos de onboarding identificando mejoras y sugiriendo oportunidades de automatización.",
                    "Exploré APIs y soluciones SaaS para garantizar una integración fluida con los sistemas de los clientes.",
                    "Proporcioné orientación técnica a los clientes durante el onboarding, asegurando alineación con las capacidades del producto.",
                    "Demostré habilidades interpersonales y de liderazgo para fomentar la colaboración y mejorar el rendimiento del equipo.",
                ],
            },
        },
        icon: papernestIcon,
        iconBg: "#E6DEDD",
    },
    {
        translations: {
            en: {
                title: "E-commerce Manager",
                company_name: "Entelequia Comic-Book Store",
                date: "July 2019 - October 2020",
                points: [
                    "Managed online sales platforms, ensuring their functionality and uptime through technical troubleshooting.",
                    "Analyzed user behavior on the e-commerce website to improve UX/UI and optimize conversion rates.",
                    "Implemented SEO and digital tools to enhance the platform’s visibility and performance.",
                    "Led cross-functional teams to align e-commerce operations with strategic business goals.",
                ],
            },
            es: {
                title: "E-commerce Manager",
                company_name: "Entelequia Comic-Book Store",
                date: "Julio 2019 - Octubre 2020",
                points: [
                    "Gestioné plataformas de ventas online, asegurando su funcionalidad y tiempo de actividad mediante resolución de problemas técnicos.",
                    "Analicé el comportamiento de los usuarios en el sitio web de e-commerce para mejorar la UX/UI y optimizar las tasas de conversión.",
                    "Implementacion de SEO y herramientas digitales para mejorar la visibilidad y el rendimiento de la plataforma.",
                    "Lideré equipos multifuncionales para alinear las operaciones de e-commerce con los objetivos estratégicos del negocio.",
                ],
            },
        },
        icon: logoBuenardo,
        iconBg: "#383E56",
    },
];

const projects = [
    {
        translations: {
            en: {
                name: "Entelequia Ecommerce",
                description:
                    "Entelequia Ecommerce is a web platform inspired by my family's comic book store, combining my passion for comics with technology. The platform allows users to explore a diverse catalog of comics, manage shopping carts, and securely place orders using Stripe as the payment gateway.",
            },
            es: {
                name: "Entelequia Ecommerce",
                description:
                    "Entelequia Ecommerce es una plataforma web inspirada en la tienda de cómics de mi familia, combinando mi pasión por los cómics con la tecnología. La plataforma permite a los usuarios explorar un diverso catálogo de cómics, gestionar carritos de compras y realizar pedidos de forma segura utilizando Stripe como pasarela de pago.",
            },
        },
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: entelequiaPreview,
        source_code_link: "https://github.com/HxrmxStudio/Entelequia-E-commerce",
    },
    {
        translations: {
            en: {
                name: "Portfolio 3D",
                description:
                    "An interactive portfolio showcasing projects and skills using 3D animations and modern web technologies to create an engaging user experience.",
            },
            es: {
                name: "Portfolio 3D",
                description:
                    "Un portafolio interactivo que muestra proyectos y habilidades utilizando animaciones 3D y tecnologías web modernas para crear una experiencia atractiva para el usuario.",
            },
        },
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: portfolioPreview,
        source_code_link: "https://github.com/HxrmxStudio/my-3D-portfolio",
    },
    {
        translations: {
            en: {
                name: "Unsocial",
                description:
                    "A social media platform allowing users to create posts, respond to nested comments, and interact in real-time. This was my first project with which I discovered what it is to be a full stack developer.",
            },
            es: {
                name: "Unsocial",
                description:
                    "Una plataforma de redes sociales que permite a los usuarios crear publicaciones, responder a comentarios anidados e interactuar en tiempo real. Este fue mi primer proyecto con el que descubrí lo que es ser un desarrollador full stack.",
            },
        },
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: unsocialPreview,
        source_code_link: "https://github.com/HxrmxStudio/Unsocial--Social-Network",
    },
];

export { services, technologies, experiences, projects };