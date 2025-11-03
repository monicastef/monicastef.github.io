export const bio = [
  "Hi there! My name is Monica Stef, a 4th-year Computer Science student at Queen's University, passionate about AI, cybersecurity, and building innovative tech solutions that solve real-world problems.",
  "I've had the privilege of interning as a Summer Analyst at Accenture, a Software Developer at BMO, and a Data Engineer at Scotiabank where I worked on exciting, client-facing projects to automate and optimize user-experience and integrate client's suggestions. Aside from internship experience, I’m actively exploring creative projects like a a face-restoration project that restores blurry or damaged images of people using Generative Adversarial Networks (GANs) and transformer architectures. Aside from that, I've worked on Spell Quest: an educational game designed to improve word association for students, and myIBD Compass: a medical assistant app leveraging AI to help users with IBD track symptoms, manage triggers, and gain personalized insights to improve their health. Similar to MyFitnessPal but tailored for IBD care.",
  "Currently, I'm working as an App Developer on Synapsis (a pioneer organization in biotechnology research) and a Project Member at Q3C (Queen's Cryptography and Cybersecurity Club. I think my ongoing development of my skills in software architecture, C++ development, AI use cases, and interactive game design, all while staying involved in such initiatives is a true testament of my curiosity and willingness to learn.",

  "Thanks for visiting, and welcome to my personal portfolio :)",
];

export const skills = [
  {
    title: "Languages",
    skillName: "C++, C#, C, Python, Java, HTML, CSS, PHP, Haskell, Prolog, MATLAB",
    color: "1",
    percentage: "90",
  },
  {
    title: "Frameworks/Libraries",
    skillName: ".NET, React, Node.js, PyTorch, JUnit, pytest",
    color: "6",
    percentage: "70",
  },
  {
    title: "Design",
    skillName: "HTML, CSS, PHP, JavaScript, Typescript, Three.js",
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
    skillName: "GitHub & GitLab, Docker, Jira, Confluence, Azure, IBM ACE, GCP, Figma, Flutter, Cleo, Talend, Figma, Flutter, Wireshark, SEED VM",
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
      projectName: "FairGame",
      image: "images/fgmatching.png",
      summary:
        "DApp using blockchain for secure, anonymous, and bias-free job matching using smart contracts and ZKPs. Designed an intuitive UI: resume uploads, job filtering, and profile management.",
      preview: "https://github.com/monicastef/qhacks2025",
      techStack: ["Midnight Network", "HTML", "CSS", "JavaScript"],
    },
    {
      projectName: "myFace",
      image: "images/qhacks.jpg",
      summary:
        "An AI-powered facial recognition application designed to replace two-factor authentication in Queens University student portal",
      preview: "",
      techStack: ["Python", "OpenCV", "TensorFlow", "Flask"],
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
      image: "images/scummVM.jpeg",
      summary:
        "In-depth architectural model evaluating system components, developer responsibilities, and architectural implications to support collaborative software development and modular design principles.",
      preview: "https://sites.google.com/view/arraysofsunshine/home",
      techStack: ["UML Diagrams", "Jira", "Google Sites"],
    },
    {
      projectName: "Face Restoration using GANs",
      image: "",
      summary:
        "Restoring degraded face images by applying Generative Adversarial Networks (GANs) and transformer architectures, specifically GFPGAN and CodeFormer. ",
      preview: "https://github.com/ajsib/CISC-473-Project/tree/main",
      techStack: ["Pytorch", "Python", "Conda Environment"],
    },
    {
      projectName: "myIBD Compass",
      image: "Medical assistant app leveraging AI to help users with IBD track symptoms, manage triggers, and gain personalized insights to improve their health. Similar to MyFitnessPal but tailored for IBD care.",
      summary:
        "https://github.com/synapsis-org/myIBDCompass-main",
      preview: "",
      techStack: ["React Native", "TypeScript", "SQLite"],
    },
  ],
  gameProjects: [
    {
      projectName: "Spell Quest",
      image: "images/spellQuestPoster.png",
      summary:
        "Interactive word game to help grade school students improve image-to-text association with engaging word themes, increasing difficulty levels, and multiplayer options",
      preview: "",
      techStack: ["C++", "raylib", "SQLite"],
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
    title: "Accenture",
    duration: "June 2025 - Aug 2025",
    subtitle: "Technology Summer Analyst",
    details: [
      `Built and deployed enterprise integrations using IBM ACE on GCP to improve data flow across 20+ business interfaces.`,
      `Monitored application performance and made improvements through optimizations and break-fixes.`,
      `Automated deployments with GitLab CI/CD to decrease release cycles from weekly to daily in some workflows.`,
      `Managed incident resolution and performed root cause analysis for integration issues to reducing downtime.`,
    ],
    tags: ["GCP", "IBM Cloud", "Cleo", "Jira", "GitLab", "Docker"],
    icon: "office ",
  },
  {
    title: "Bank of Montreal",
    duration: "May 2024 - Aug 2024",
    subtitle: "Software Developer Intern",
    details: [
      `Led the development and implementation of client-facing web app features in .NET Core, C#, and ASP.NET, improving user efficiency by 25%.`,
      `Automated money transfer processes, reducing operational time by 30%.`,
      `Streamlined database workflows via MS SQL Server and Azure SQL DB to maintain scalability and security standards.`,
      `Presented technical solutions and insights to stakeholders to align business goals with technical needs.`,
      `Leveraged DevOps tools (JFrog Artifactory and RedHat’s Ansible) for version control and continuous integration.`,
      `Collaborated with cross-functional teams using Jira and Confluence to ensure scalable solutions were delivered.`,
      `Extra Activities: Participated in IBM z/OS hackathon, designed an AI model using IBM’s watsonx, coordinated intern events, Women in Tech mentee`,
    ],
    tags: ["ASP.NET", "C#", "Azure", "SQL", "Artifactory", "Ansible"],
    icon: "office ",
  },
  {
    title: "Scotiabank",
    duration: "June 2023 - Aug 2023",
    subtitle: "Data Engineer Intern",
    details: [
      `Automated ETL pipelines using Talend, reducing manual intervention by 40%.`,
      `Optimized data ingestion workflows, improving system throughput by 20%.`,
      `Analyzed large-scale data using SQL and HQL, creating useful insights for model optimization.`,
      `Partnered with analytics teams to support data integrity in ModelOps initiatives.`,
      `Additional Involvements: Agentic AI Case Competition - built an image understanding agent to cut power outage resolution time in half.`,
    ],
    tags: [
      "Talend",
      "ETL Pipelines",
      "SQL",
      "HQL",
      "ModelOps",
    ],
    icon: "office",
  },
];

export const education = [
  {
    title: "B.Comp. in Computer Science and Artificial Intelligence",
    duration: "2022 - Present",
    subtitle: "Queen's University",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Computer & Software Architecture",
      "Operating Systems",
      "Artificial Intelligence",
      "Database Management System",
      "Software Development Fundamentals",
      "Data Analytics",
      "Computational Theory",
    ],
    icon: "graduation-cap",
  },
  {
    title: "OSSD",
    duration: "2018 - 2022",
    subtitle: "Northern Secondary School",
    details: ["Calculus Award"],
    tags: ["Physics", "Calculus", "Mathematics"],
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
        text: "Github/monicastef.github.io",
        link: "https://github.com/monicastef/monicastef.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Monica Stef.",
      "Last Updated: Fall 2024",
    ],
  },
];
