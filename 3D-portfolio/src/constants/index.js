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
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
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
        title: "Full Stack Developer - Student",
        company_name: "ISDI Coders Bootcamp",
        icon: isdiIcon,
        iconBg: "#E6DEDD",
        date: "2024",
        points: [
            "Designed and developed full stack web applications using JavaScript, React.js, Node.js, and MongoDB.",
            "Implemented responsive and mobile-first designs ensuring cross-browser compatibility.",
            "Collaborated in agile teams to create functional and aesthetically pleasing projects, applying version control with Git.",
            "Integrated RESTful APIs to ensure smooth communication between frontend and backend systems.",
        ],
    },
    {
        title: "Team Lead Account Manager B2B - Spain",
        company_name: "Papernest",
        icon: papernestIcon,
        iconBg: "#383E56",
        date: "March 2022 - Present",
        points: [
            "Utilized CRM tools such as Salesforce to analyze client data and automate workflows, gaining insight into software integrations.",
            "Collaborated closely with product teams, providing feedback that informed technical improvements and feature enhancements.",
            "Developed data-driven dashboards and reports, translating business needs into actionable insights using tech tools.",
            "Demonstrated leadership and team management skills by mentoring and guiding team members to achieve collective goals.",
        ],
    },
    {
        title: "Account Manager - Customer Success & Onboarding Specialist",
        company_name: "Papernest",
        icon: papernestIcon,
        iconBg: "#E6DEDD",
        date: "October 2020 - March 2022",
        points: [
            "Streamlined onboarding processes by identifying bottlenecks and suggesting process automation opportunities.",
            "Explored APIs and SaaS solutions to ensure seamless integration with client systems.",
            "Provided technical guidance to clients during onboarding, ensuring alignment with product capabilities.",
            "Exhibited strong interpersonal and leadership abilities to foster collaboration and improve team performance.",
        ],
    },
    {
        title: "E-commerce Manager",
        company_name: "Entelequia Comic-Book Store",
        icon: logoBuenardo,
        iconBg: "#383E56",
        date: "July 2019 - October 2020",
        points: [
            "Managed online sales platforms, ensuring their functionality and uptime through technical troubleshooting.",
            "Analyzed user behavior on the e-commerce website to improve UX/UI and optimize conversion rates.",
            "Implemented SEO and digital tools to enhance the platform’s visibility and performance.",
            "Led cross-functional teams to align e-commerce operations with strategic business goals.",
        ],
    },
    {
        title: "Community Manager",
        company_name: "Entelequia Comic-Book Store",
        icon: logoBuenardo,
        iconBg: "#E6DEDD",
        date: "August 2017 - October 2020",
        points: [
            "Planned and executed digital campaigns using data analytics tools to track performance.",
            "Worked with CMS platforms to manage and publish content for online audiences.",
            "Collaborated with designers and developers to align branding across digital platforms.",
            "Developed leadership skills by coordinating with diverse teams to ensure campaign success.",
        ],
    },
];




const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Entelequia Ecommerce",
        description:
            "A web-based platform for a comic book store, enabling users to browse products, manage shopping carts, and place orders.",
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
        image: entelequiaPreview, // Replace with actual image variable or URL
        source_code_link: "https://github.com/HxrmxStudio/Entelequia-E-commerce",
    },
    {
        name: "Portfolio 3D",
        description:
            "An interactive portfolio showcasing projects and skills using 3D animations and modern web technologies to create an engaging user experience.",
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
        image: portfolioPreview, // Replace with actual image variable or URL
        source_code_link: "https://github.com/HxrmxStudio/my-3D-portfolio",
    },
    {
        name: "Unsocial",
        description:
            "A social media platform allowing users to create posts, respond to nested comments, and interact in real-time. The project features responsive design and a RESTful API backend.",
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
        image: unsocialPreview, // Replace with actual image variable or URL
        source_code_link: "https://github.com/HxrmxStudio/Unsocial--Social-Network",
    },
];


export { services, technologies, experiences, testimonials, projects };