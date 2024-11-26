export const bio = [
  "Hi there! My name is Monica Stef, a 3rd-year Computer Science student at Queen's University, passionate about AI, cybersecurity, and building innovative tech solutions that solve real-world problems.",
  "I've had the privilege of interning as a Data Engineer at Scotiabank and as a Software Developer at BMO, where I worked on exciting, client-facing projects to automate and optimize user-experience and integrate client's suggestions. Aside from internship experience, I’m actively exploring creative projects like a nightlife app to track bar lines in Kingston, myFace: an AI-powered authentication tool for Queen’s University’s student portal, Spell Quest: an educational game designed to improve word association for students, and a build-your-own Connections game inspired by the New York Times Connections!",
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
        "An AI-powered facial recognition application designed to replace two-factor authentication in Queens University student portal",
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
      image: "images/scummVM.jpeg",
      summary:
        "In-depth architectural model evaluating system components, developer responsibilities, and architectural implications to support collaborative software development and modular design principles.",
      preview: "https://sites.google.com/view/arraysofsunshine/home",
      techStack: ["UML Diagrams", "Jira", "Google Sites"],
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
    icon: "truck ",
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
    ],
    tags: [
      "Talend",
      "ETL Pipelines",
      "SQL",
      "HQL",
      "ModelOps",
    ],
    icon: "heartbeat",
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
