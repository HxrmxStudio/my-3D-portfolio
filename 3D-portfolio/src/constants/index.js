import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
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
    maindericon,
    threejs,
    ruby,
    entelequiaPreview,
    portfolioPreview,
    unsocialPreview,
    logiFrozenPreview,
    linkedinExtension,
    bochitaCrypto
} from "../assets"

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
        name: "TypeScript",
        icon: typescript,
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
    {
        name: "ruby",
        icon: ruby,
    },
];

const experiences = [
    {
        translations: {
            en: {
                title: "Full Stack Developer",
                company_name: "MainderAI",
                date: "January 2025 - Present",
                points: [
                    "Built a multiposting integration with Ruby on Rails, automating job distribution.",
                    "Optimized API endpoints for seamless Frontend-Backend communication.",
                    "Integrated external APIs to automate workflows and enhance system capabilities.",
                    "Improved UX by refining user interactions and system responsiveness.",
                    "Maintained a LinkedIn profile extraction Chrome extension with TypeScript and React.",
                ],
            },
            es: {
                title: "Full Stack Developer",
                company_name: "MainderAI",
                date: "Enero 2025 - Presente",
                points: [
                    "Desarrollé una integración de multiposting con Ruby on Rails, automatizando la distribución de ofertas.",
                    "Optimicé endpoints de API para mejorar la comunicación Frontend-Backend.",
                    "Integré APIs externas para automatizar procesos y potenciar el sistema.",
                    "Mejoré la UX refinando interacciones y respuesta del sistema.",
                    "Mantuve una extensión de Chrome para extracción de LinkedIn con TypeScript y React.",
                ],
            },
        },

        icon: maindericon,
        iconBg: "#E6DEDD",
    },
    {
        translations: {
            en: {
                title: "Team Lead Account Manager & Customer Care B2B",
                company_name: "Papernest",
                date: "March 2022 - September 2024",
                points: [
                    "Leveraged Salesforce to analyze client data and automate workflows.",
                    "Collaborated with product teams to drive technical improvements and feature updates.",
                    "Created data-driven dashboards and reports, aligning business needs with actionable insights.",
                    "Mentored team members, enhancing performance and achieving collective goals.",
                ],
            },
            es: {
                title: "Líder de Equipo - Account Manager & Atención al Cliente B2B ",
                company_name: "Papernest",
                date: "Marzo 2022 - Septiembre 2024",
                points: [
                    "Utilicé Salesforce para analizar datos de clientes y automatizar flujos de trabajo.",
                    "Colaboré con equipos de producto para impulsar mejoras técnicas y nuevas funcionalidades.",
                    "Creé dashboards y reportes basados en datos, alineando necesidades empresariales con ideas accionables.",
                    "Mentoricé a los miembros del equipo, mejorando el rendimiento y alcanzando objetivos colectivos.",
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
                    "Optimized onboarding processes with automation improvements.",
                    "Ensured seamless integration by exploring APIs and SaaS solutions.",
                    "Provided technical support to align client onboarding with product capabilities.",
                    "Leveraged leadership and interpersonal skills to enhance team collaboration.",
                ],
            },
            es: {
                title: "Account Manager - Customer Success & Onboarding Specialist",
                company_name: "Papernest",
                date: "Octubre 2020 - Marzo 2022",
                points: [
                    "Optimicé procesos de onboarding con mejoras de automatización.",
                    "Garanticé integraciones fluidas explorando APIs y soluciones SaaS.",
                    "Brindé soporte técnico para alinear el onboarding con las capacidades del producto.",
                    "Apliqué habilidades de liderazgo e interpersonales para mejorar la colaboración del equipo.",
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
                    "Managed online sales platforms, ensuring functionality and uptime.",
                    "Improved UX/UI and conversion rates through user behavior analysis.",
                    "Enhanced platform visibility using SEO and digital tools.",
                    "Aligned e-commerce operations with strategic business goals.",
                ],
            },
            es: {
                title: "E-commerce Manager",
                company_name: "Entelequia Comic-Book Store",
                date: "Julio 2019 - Octubre 2020",
                points: [
                    "Gestioné plataformas de ventas online, asegurando su funcionalidad y tiempo de actividad.",
                    "Mejoré la UX/UI y las tasas de conversión mediante análisis de comportamiento de usuarios.",
                    "Mejoré la visibilidad de la plataforma con SEO y herramientas digitales.",
                    "Alineé operaciones de e-commerce con objetivos estratégicos del negocio.",
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
                name: "LinkedIn Profile Extractor",
                description:
                    "A Google Chrome extension developed at MainderAI to automate LinkedIn profile extraction. Built with TypeScript and React, it integrates scalable APIs and features a seamless UX/UI design for optimal user experience.",
            },
            es: {
                name: "Extractor de Perfiles de LinkedIn",
                description:
                    "Extensión de Google Chrome desarrollada en MainderAI para automatizar la extracción de perfiles de LinkedIn. Construida con TypeScript y React, integra APIs escalables y cuenta con un diseño UX/UI fluido para una experiencia óptima.",
            },


        },
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "apis integration",
                color: "yellow-text-gradient",
            },
            {
                name: "UX/UI design",
                color: "purple-text-gradient",
            },
            {
                name: "automation",
                color: "pink-text-gradient",
            },
        ],
        image: linkedinExtension,
        source_code_link1: "https://chromewebstore.google.com/detail/mainder-linkedin-tool/ibkmpjhdaeggjgkpcemceedkiddjkbba",
        source_code_link2: "https://github.com/HxrmxStudio/"
    },
    {
        translations: {
            en: {
                name: "Web3 Transaction App",
                description:
                    "A React.js app that connects Ethereum wallets via MetaMask, using Solidity to create and deploy Smart Contracts for blockchain transactions.",
            },
            es: {
                name: "Aplicación de Transacciones Web3",
                description:
                    "App en React.js que conecta billeteras Ethereum mediante MetaMask y utiliza Solidity para crear y desplegar Smart Contracts para transacciones en blockchain.",
            },
        },
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "solidity",
                color: "yellow-text-gradient",
            },
            {
                name: "blockchain",
                color: "purple-text-gradient",
            },
            {
                name: "metamask",
                color: "orange-text-gradient",
            },
            {
                name: "ethereum",
                color: "green-text-gradient",
            },
        ],
        image: bochitaCrypto,
        source_code_link1: "https://github.com/HxrmxStudio/Bochita-Crypto",
        source_code_link2: "https://github.com/HxrmxStudio/Bochita-Crypto"
    },
    {
        translations: {
            en: {
                name: "LogiFrozen Web",
                description:
                    "A professional landing page designed for a logistics company specializing in frozen food transport. The website emphasizes brand identity, customer engagement, and showcases services with a modern and responsive design.",
            },
            es: {
                name: "LogiFrozen Web",
                description:
                    "Landing page profesional diseñada para una empresa de logística especializada en el transporte de alimentos congelados. El sitio destaca la identidad de la marca, el compromiso con los clientes y presenta servicios con un diseño moderno y responsivo.",
            },
        },
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "seo",
                color: "pink-text-gradient",
            },
        ],
        image: logiFrozenPreview,
        source_code_link1: "https://github.com/HxrmxStudio/LogiFrozen-LandingPage",
        source_code_link2: "https://logi-frozen-landing-page.vercel.app/"
    },
    {
        translations: {
            en: {
                name: "Portfolio 3D",
                description:
                    "An interactive portfolio showcasing my projects and skills using 3D animations and modern web technologies to create an engaging user experience.",
            },
            es: {
                name: "Portfolio 3D",
                description:
                    "Portafolio interactivo que muestra mis proyectos y habilidades utilizando animaciones 3D y tecnologías web modernas para crear una experiencia atractiva para el usuario.",
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
        source_code_link1: "https://github.com/HxrmxStudio/my-3D-portfolio",
        source_code_link2: "https://emiliano-rozas.com/",
    },
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
        source_code_link1: "https://github.com/HxrmxStudio/Entelequia-E-commerce",
        source_code_link2: "https://entelequia-frontend.vercel.app/",
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
        source_code_link1: "https://github.com/HxrmxStudio/Unsocial--Social-Network",
        source_code_link2: "https://github.com/HxrmxStudio/Unsocial--Social-Network"
    },
];

export { services, technologies, experiences, projects };