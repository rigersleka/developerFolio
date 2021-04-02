/* Change this file to get your personal Portfolio */

// Summary And Greeting Section
import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Rigers Leka",
  title: "Hi all, I'm Rigers",
  subTitle: emoji(
    "A passionate FrontEnd Software Developer 🚀 having an experience of designing and building Webapp with JavaScript / Reactjs / Angular and some other cool libraries and frameworks."
  ),
  resumeLink:
    //Upload CV on your drive
    "https://drive.google.com/file/d/10pQmM0B_KESwy70cssM1DMfwdPToH74C/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/rigersleka",
  linkedin: "https://www.linkedin.com/in/rigers-leka/",
  gmail: "rigers.leka@yahoo.com",
  gitlab: "https://gitlab.com/rigers-leka",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/15415819/rigers-leka",
  // instagram: 'https://www.instagram.com/davidrakosi/',
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) and SPA Stacks in normal"),
    emoji("⚡ Integration of third party services such as Firebase"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "react js/ts",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  schools: [
    {
      schoolName: "University Polytechnic of Tirana",
      logo: require("./assets/images/politechnicLogo.png"),
      subHeader: "Master of Science in Computer Engineering",
      duration: "September 2017 - April 2019",
      desc: "Graduated in Computer Engineering with good grades.",
      descBullets: [
        "Web Development",
        "Object-Oriented Programming With Java",
        "Computer Hardware 2",
        "Operating Systems 2",
      ],
    },
    {
      schoolName: "University Polytechnic of Tirana",
      logo: require("./assets/images/politechnicLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Data structures and algorithms with C",
        "Databases",
        "Computer Hardware",
        "Operating Systems",
        "Electronic Circuits and Logic Design Laboratory.",
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Angular 6+", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "React JS/TS",
      progressPercentage: "90%",
    },
    {
      Stack: "Aps.Net C#",
      progressPercentage: "40%",
    },
    {
      Stack: "MySql",
      progressPercentage: "40%",
    },

  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Moveo Albania",
      companylogo: require("./assets/images/moveoLogo.png"),
      date: "March 2021 – Present",
      desc: "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        // "Streaming live on YouTube",
        // "Creating tutorials"
      ],
    },
    {
      role: "Software Developer (FE)",
      company: "Linfa.shpk",
      companylogo: require("./assets/images/linfaLogo.png"),
      date: "March 2019 – March 2021",
      desc: "My core activities includes as described above.",
      descBullets: [
        "Effectively translated client requirements into application design and system requirements.",
        "Creating new features.",
        "Performing bug fixies.",
        "Worked well independently and within a team setting.",
        "Creating new features, functionalities and capabilities",
        "Write test blocks for testing services, components.",
      ],
    },
    {
      role: "Software Developer (FE)",
      company: "Freelancer",
      companylogo: require("./assets/images/freelancerLogo.jpg"),
      date: "March 2019 – March 2021",
      desc:
        "Key qualifications and responsibilities as part of a small team of developers.",
      descBullets: [
        "Implementing small and medium websites from concept through deployment with a responsive, mobile-first approach.",
        "Bug fixies in Angular, React apps.",
        "Maintain Web Static pages.",
        "Testing to indetify bugs and technical issues before and after deploing.",
        "Documenting bug reports, tickets and any code changes.",
      ],
    },
    {
      role: "Software Developer (BE)",
      company: "Co.M.Media",
      companylogo: require("./assets/images/commediaLogo.png"),
      date: "July 2017 – September 2018",
      desc: "Key qualifications and responsibilities:",
      descBullets: [
        "Experienced .Net Developer focusing on back end app written in C#.",
        "Worked with Xamarin(android). Hence that Passenger Assistant is created from scratch by me.",
      ],
    },
    {
      role: "IT Consulant",
      company: "Pelikan Security",
      companylogo: require("./assets/images/pelikanSecurityLogo.png"),
      date: "July 2016 – May 2017",
      desc:
        "Maintain and improve of existing company network, servers.",
      descBullets: [
        "Investigating, diagnosing and solving computer software and hardware faults.",
        "Security Camera installer.",
        "Installing and configuring computer hardware, software, systems, networks, printers and scanners.",
        "Maintaining mail accounts and configuring on employee’s PC.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "rigersleka", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/projectQuidLogo.png"),
      projectName: "Quid",
      projectDesc: "Focused on business tools, expert support and much more for companies and individuals.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://quidglobal.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/comingsoon.jpg"),
      projectName: "LSS2 - Links Selection System 2",
      projectDesc: "System that helps companies filtering applicants more easily.",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
    {
      image: require("./assets/images/projectBancaGeneraliLogo.png"),
      projectName: "Banca Generali",
      projectDesc: "System of bank for employers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.bancageneraliprivate.it/homepage",
        },
      ],
    },
    {
      image: require("./assets/images/projectJaguarLogo.png"),
      projectName: "Jaguar & Landrover with FcaBank",
      projectDesc: "Monthly car payment",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.jaguarnewportbeach.com/payment-calculator/",
        },
      ],
    },
    {
      image: require("./assets/images/projectFcaBankLogo.png"),
      projectName: "FCA and Leasys Bank with Amazon",
      projectDesc: "Possibility to rent cars. Project includes: Amazon Login Button  integration, steps part of module, where you can rent the car etc",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fcabank.de/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/politechnicLogo.png"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+355) 693420434",
  email_address: "rigers.leka@yahoo.com",
};

// Twitter Section
const twitterDetails = {
  //userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
