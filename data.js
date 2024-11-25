export const bio = [
  "Hi there! My name is Monica Stef, a 3rd-year Computer Science student at Queen's University, passionate about AI, cybersecurity, and building innovative tech solutions that solve real-world problems.",
  "I've had the privilege of interning as a Data Engineer at Scotiabank and as a Software Developer at BMO, where I worked on exciting, client-facing projects to automate and optimize user-experience and integrate client's suggestions. Aside from internship experience, I’m actively exploring creative projects like a nightlife app to track bar lines in Kingston, myFace: an AI-powered authentication tool for Queen’s University’s student portal, Spell Quest: an educational game designed to improve word association for students, and a build-your-own Conenctions game inspired by the New York Times Connections!",
  "Currently, I'm refining my skills in software architecture, C++ development, and interactive game design, all while staying involved in initiatives like Queen's Women in Computing (QWIC), Queen's Conference on Business & Technology, QHacks, and tutoring math and computer science.",

  "Thanks for visiting, and welcome to my digital space :)",
];

export const skills = [
  {
    title: "Languages",
    skillName: "C++, C#, C, Python, Java",
    color: "1",
    percentage: "90",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "React, Node.js, TensorFlow, PyTorch, Flask, Django",
    color: "6",
    percentage: "70",
  },
  {
    title: "Design",
    skillName: "HTML, CSS, JavaScript, Three.js",
    color: "4",
    percentage: "80",
  },
  {
    title: "Game Development",
    skillName: "Unreal Engine (C++), raylib",
    color: "7",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "GitHub, Jira, Confluence, Azure DevOps",
    color: "3",
    percentage: "80",
  },
  {
    title: "Databases",
    skillName: "MS SQL Server, Azure SQL DB, SQLite",
    color: "3",
    percentage: "80",
  },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [
    {
      projectName: "myFace",
      image: "images/myFace.jpg",
      summary:
        "An AI-powered facial recognition application designed to replace two-factor authentication in Queen’s University student portal",
      preview: "",
      techStack: ["Python", "OpenCV", "TensorFlow", "Flask"],
    },
    {
      projectName: "Build Your Own New York Times Connections",
      image: "",
      summary:
        "Inspired by the New York Times \"Connections\", allows users to create custom puzzles by grouping four words with shared themes",
      preview: "",
      techStack: ["React", "Node.js", "MongoDB"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/logo.png",
      summary:
        "Personal website to display, skills, projects and interests.",
      preview: "https://github.com/monicastef/monicastef.github.io.git",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "ScummVM Software Architecture",
      image: "scummVM.jpeg",
      summary:
        "In-depth architectural model evaluating system components, developer responsibilities, and architectural implications to support collaborative software development and modular design principles.",
      preview: "https://sites.google.com/view/arraysofsunshine/home",
      techStack: ["UML Diagrams", "Jira", "Google Sites"],
    },
  ],
  gameProjects: [
    {
      projectName: "Spell Quest",
      image: "",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  /* freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ], */
};

export const experience = [
  {
    title: "Shiprocket (Bigfoot Solution Private Limited)",
    duration: "September 2022 - Present",
    subtitle: "Software Engineer",
    details: ["Working in support and escalation team."],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "truck ",
  },
  {
    title: "Biofourmis India Private Limited",
    duration: "April 2022 - Jul 2023",
    subtitle: "Software Engineer",
    details: [
      `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
      `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
            recognition with the Biofourmis Bravo award in Q1, 2023.`,
      `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
      `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
      `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
      `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
            management, and enhanced application performance.`,
      `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
      `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
            resulting in reduced audio issues and increased user satisfaction.`,
      `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
            and enhancing features.`,
    ],
    tags: [
      "JavaScript",
      "Angular",
      "RxJS",
      "NGXS",
      "TypeScript",
      "RxState",
      "Webpack",
      "Optimization",
    ],
    icon: "heartbeat",
  },
  {
    title: "Novopay Solutions Private Limited",
    duration: "June 2020 - April 2022",
    subtitle: "Software Engineer",
    details: [
      `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
      `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
      `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
      `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "qrcode",
  },
  {
    title: "ThinkPedia LLP",
    duration: "May 2019 - June 2019",
    subtitle: "SDE Intern",
    details: [
      `Developed a customer web application for social media management, supporting the advertisement domain.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
    icon: "group",
  },
];

export const education = [
  {
    title: "B.Tech. in Computer Science and Engineering",
    duration: "2016 - 2020",
    subtitle: "National Institute of Technology, Warangal",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Class 12th in Science and Mathematics",
    duration: "",
    subtitle: "Board of Secondary Education, Rajasthan",
    details: [],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
    //   {
    //     text: "Linkedin",
    //     link: "https://www.linkedin.com/in/vinaysomawat/",
    //   },
    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
      {
        text: "Github/vinaysomawat.github.io",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
