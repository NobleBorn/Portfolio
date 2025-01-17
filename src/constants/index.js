import charm from "/assets/images/charm.png"
import HW from "/assets/images/HW.png"
import css from "/assets/icons/css.svg"
import git from "/assets/icons/git.svg"
import github from "/assets/icons/github.svg"
import html from "/assets/icons/html.svg"
import javascript from "/assets/icons/javascript.svg"
import linkedin from "/assets/icons/linkedin.svg"
import nodejs from "/assets/icons/nodejs.svg"
import react from "/assets/icons/react.svg"
import tailwindcss from "/assets/icons/tailwindcss.svg"
import java from "/assets/icons/java.svg"
import python from "/assets/icons/python.svg"
import cpp from "/assets/icons/cpp.svg"
import docker from "/assets/icons/docker.svg"
import postgresql from "/assets/icons/postgresql.svg"
import junit from "/assets/icons/junit.svg"


export const skills = [
    {
      imageUrl: java,
      name: "Java",
      type: "Backend",
    },  
    {
      imageUrl: python,
      name: "Python",
      type: "Backend",
    },
    {
      imageUrl: cpp,
      name: "C++",
      type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
      imageUrl: junit,
      name: "JUnit",
      type: "Testing",
    },
    {
      imageUrl: docker,
      name: "Docker",
      type: "DevOps",
    },
];

export const experiences = [
    {
        title: "Ledare",
        company_name: "Hello World!",
        icon: HW,
        iconBg: "#a2d2ff",
        date: "Nov 2024 - Present",
        points: [
            "Served as a mentor, providing guidance and support to young talents exploring the field of technology.",
            "Led and managed 7-week courses, ensuring structured and effective teaching tailored to different skill levels.",
            "Delivered engaging workshops and activities to inspire young learners in Python, web development, and other technical skills.",
            "Fostered a positive, inclusive learning environment that encouraged both technical growth and personal development for participants.",
        ],
    },
    {
        title: "IT-Manager",
        company_name: "CHARM Committee",
        icon: charm,
        iconBg: "#fbc3bc",
        date: "Jun 2023 - Present",
        points: [
            "Led technical support operations, efficiently resolving system issues and addressing user concerns to ensure seamless workflows.",
            "Excelled in data management by organizing and analyzing large datasets using Excel, optimizing reporting and decision-making processes.",
            "Identified and implemented alternative solutions to resolve technical issues, ensuring continuity.",
            "Cultivated valuable soft skills such as multitasking, stress management, teamwork, task organization and prioritization, improved communication, planning and adaptability.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/NobleBorn',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mojtaba-alizade-6b0a8b294',
    }
];
  
export const myProjects = [
  {
    title: 'Enigma',
    desc: 'The Enigma Encryption System is a Java-based application that provides a secure and efficient method for encrypting and decrypting messages.',
    subdesc:
      'The application provides an intuitive graphical user interface (GUI) that allows users to easily interact with the system. The Enigma Encryption System is designed to be easily extensible.',
    href: 'https://github.com/NobleBorn/Enigma',
    texture: '/assets/videos/project1.mp4',
    logo: '/assets/images/enigma.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/images/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/icons/java.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: '/assets/icons/css.svg',
      },
    ],
  },
  {
    title: 'Python Tutorial Package',
    desc: 'The main purpose of this work is to supplement the existing material for introductory programming courses with a digital learning aid that provides a step-by-step and more natural knowledge development. The application also contains an admin function where teachers themselves can add and modify exercises.',
    subdesc:
      'This was my Bachelor`s thesis project which was completed collaboratively with others : Johan Berg, Agnes Brogeby, Jonathan Edenlund, Malin Kihlström and Oscar Palm.',
    href: 'https://github.com/NobleBorn/Python-Tutorial-Package',
    texture: '/assets/videos/project2.mp4',
    logo: '/assets/images/maskot.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/images/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/images/react.svg',
      },
      {
        id: 2,
        name: 'Next.js',
        path: '/assets/icons/nextjs.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/images/typescript.png',
      },
      {
        id: 4,
        name: 'CSS',
        path: '/assets/icons/css.svg',
      },
      {
        id: 5,
        name: 'Docker',
        path: '/assets/icons/docker.svg',
      },
    ],
  },
  {
    title: 'QuizApp : A self-study Tool',
    desc: 'QuizApp is a self-study app designed to help you learn in ways that suit you best. You can create and review flashcards to focus on key points or try old-fashioned style quizzes with multiple-choice answers to test your knowledge.',
    subdesc:
      'This project was part of the Agile Methodologies course and was completed collaboratively with others :  Arash Amiry, Gustav Berndtzen, Nils Bengtsson Svanstedt, Felix Erngård, Pontus Engström, Alexander Persson and Omar Younes.',
    href: 'https://github.com/NobleBorn/QuizApp?tab=readme-ov-file',
    texture: '/assets/videos/project3.mp4',
    logo: '/assets/images/quizApp.png',
    logoStyle: {
      backgroundColor: '#1C1A43',//#60f5a1
      //background: 'linear-gradient(0deg, #CFA7F550, #CFA7F550), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(220, 190, 245, 0.8) 100%);', //'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)'
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',//rgba(35, 131, 96, 0.3)
    },
    spotlight: '/assets/images/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/icons/java.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: '/assets/icons/css.svg',
      },
    ],
  },
  {
    title: 'FotoVault : A Secure Photo Storage',
    desc: 'This application provides a gallery for users to upload, download, view, and manage images easily via a web interface. It supports features like image search, filtering, sorting, and more. For a more detailed view of the app, visit.',
    subdesc:
      'This project was part of the Web Application course and was completed collaboratively with three others :  Harry Danell, Rikard Roos and Omar Younes.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/assets/videos/project4.mp4',
    logo: '/assets/images/fotoVault.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/images/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/images/react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/icons/javascript.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/images/typescript.png',
      },
      {
        id: 4,
        name: 'CSS',
        path: '/assets/icons/css.svg',
      },
    ],
  },
];