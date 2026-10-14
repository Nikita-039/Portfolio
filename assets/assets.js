import user_image from './user-image.png';
import project_one from './project-one.png';
import ai_career from './ai-career.png';
import project_three from './project-three.png';
import project_four from './project-four.png'
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import footer_bg_color from './footer-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';


export const assets = {
    user_image,
    project_one,
    ai_career,
    project_three,
    project_four,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    footer_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,

};

export const experienceData = [
    {
        role: "SDE Intern",
        company: "KompGlobal",
        period: "Jan 2026 – Oct 2026",
        description: [
            "Developed and maintained React.js interfaces for Timesheet, Client, and Candidate management modules in a production application.",
            "Implemented the Forgot Password functionality, including form validation, API integration, and user feedback handling.",
            "Fixed production and QA-reported bugs, improving application stability and user experience.",
            "Collaborated with backend developers and QA teams to deliver feature enhancements and resolve application issues."
        ]
    },
    {
        role: "Full Stack Web Developer Intern",
        company: "Edunet Foundation",
        period: "Feb 2025 – March 2025",
        description: [
            "Engineered an online bidding application with JWT-based user authentication and real-time auction capabilities.",
            "Crafted a visually appealing and responsive interface using React.js and Bootstrap.",
            "Implemented a scalable backend architecture with Node.js and MongoDB to ensure seamless performance."
        ]
    }
];

export const workData = [
    {
        title: "E-commerce Website",
        description: "Full-stack e-commerce platform featuring secure user authentication with encrypted credentials, Stripe payment gateway, Cash on Delivery options, role-based Admin Panel, and real-time React Toastify notifications.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
        bgImage: assets.project_one,
        link: "https://forever-frontend-lake-three.vercel.app/"
    },
    {
        title: "AI Career Navigator",
        description: "Full-stack career assistance platform featuring skill & resume-based job matching via external APIs, server-side PDF text extraction using Multer, and an AI Career Chatbot powered by OpenRouter (Llama 3.1).",
        tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "Multer", "Llama 3.1"],
        bgImage: ai_career,
        link: "https://ai-career-navigator-puce.vercel.app/login"
    },
    {
        title: "Task Manager",
        description: "Full-stack task management application enabling real-time status synchronization, dashboard-driven routing for pending/completed tasks, RESTful API integration using Axios, and Vercel production deployment.",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "Axios", "React Router"],
        bgImage: assets.project_four,
        link: "https://github.com/Nikita-039/Task-Manager"
    }
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Full Stack Development', description: 'Building scalable, responsive web applications using React.js, Node.js, Express.js, and MongoDB with clean architecture.', link: '#projects' },
    { icon: assets.code_icon, title: 'Backend & REST APIs', description: 'Engineering secure RESTful APIs, JWT authentication, MongoDB database management, and Stripe payment integration.', link: '#projects' },
    { icon: assets.ui_icon, title: 'Frontend & UI Engineering', description: 'Crafting interactive UI components with React.js, Redux/Redux Toolkit, component-based design, and modern CSS frameworks.', link: '#projects' },
    { icon: assets.graphics_icon, title: 'Logic Building & DSA', description: 'Applying core Data Structures and Algorithms in Java to solve real-world problems and optimize software performance.', link: '#projects' },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages & Skills', description: 'Java, DSA, JavaScript, React.js, Redux, Node.js, Express, MongoDB' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Information Technology, MAIT (2022 - 2026) • 8 CGPA' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'E-Commerce Website, AI Career Navigator, Task Manager' }
];

export const toolsData = [
    assets.vscode, assets.mongodb, assets.git, assets.figma
];