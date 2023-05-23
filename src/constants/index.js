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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    nextjs,
    travel_advisor,
    Summarize,
} from "../assets";

export const navLinks = [{
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

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "ThreeJs Developer",
        icon: backend,
    },
    {
        title: "NextJs Developer",
        icon: creator,
    },
];

const technologies = [{
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
        name: "Next JS",
        icon: nextjs,
    },

];




const projects = [
    // {
    //     name: "Smart HealthCare Management System",
    //     description: "A full stack web based system to manage a healthcare organization's full operation to make it easy for both doctor's to see patients and for patients to see available doctors and book appointment and with additional provided benifits.",
    //     tags: [{
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "mongodb",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "tailwind",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     //image: carrent,
    //     source_code_link: "https://github.com/",
    // },
    {
        name: "Travel Advisor",
        description: "An online based advisor system to help people find the best hotels, and restaurants with additional ratings, and the weather update around them.",
        tags: [{
            name: "react",
            color: "blue-text-gradient",
        }, ],
        image: travel_advisor,
        source_code_link: "https://github.com/Faiaz98/travel_advisor",
    },
    {
        name: "Article Summarizer",
        description: "An AI based system that  precisely summarizes lengthy article for the users.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: Summarize,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, projects };