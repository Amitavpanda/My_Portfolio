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
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  linkedin,
  twitter,
  instagram,
  github,
  softwareDeveloper,
  softwareDeveloper1,
  java,
  Firebase,
  materialui,
  bootstrap,
  python,
  dsa,
  gannaCover,
  content,
  webapp,
  writing,
  EventManagementCover,
  MyPortfolio,
  NextJs,
  docker,
  mongodb,
  OracleDB
} from "../assets";
import { IoCallSharp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaCircleInfo } from "react-icons/fa6";
import { RiServiceFill } from "react-icons/ri";
import { IoHappySharp } from "react-icons/io5";







export const navLinks = [
  {

    id: "home",
    logo: IoHomeSharp,
  },

  {

    id: "hero",
    logo: FaCircleInfo,
    title: "About"
  },
  {

    id: "services",
    logo: RiServiceFill,
    title: "Services"
  },
  {
    id: "work",
    logo: GoProjectSymlink,
    title: "Work"
  },

  {
    id: "experience",
    logo: MdWorkOutline,
    title: "Experience"
  },

  {
    id: "skills",
    logo: GiSkills,
    title: "Skills"
  },

  {
    id: "testimonials",
    logo: IoHappySharp,
    title: "Testimonials"
  },


  {
    id: "contact",
    logo: IoMdContact,
    title: "Contact"
  },





];


const introduction = [
  {
    overview: [
      "Hi, Myself a Skilled Software Engineer with more than 2 years of Industry experience and skilled in variety of coding languages and frameworks. I can build full stack performant web apps everything from scratch.",
      "With the industry experience I gained in these years enable me to write clean and secure code.  I have experience in frontend development and Backend microservices Architecture." ,
      "I have encountered a diverse range of technologies and frameworks which allow me to quickly learn and master new technologies and tools as per the requirement. ",
      "My Tech Stack and Experience include:",
    ],

    bulletPoints : [
      {
        title: 'Frontend',
        skills: ["React", "JavaScript", "Next.js", "Tailwind CSS", "Bootstrap", "Redux Toolkit", "Material UI"],
      },
      { 
        title: 'Backend',
        skills: ["Java", "Node.js"],

      },
      { 
        title: 'Database',
        skills: ["MongoDB", "Oracle DB", "Firebase"],

      },

      {
        title: 'Tools',
        skills: ["Linux", "Postman", "Visual Studio Code", "IntellIJ", "Git"]

      }

    ]
  }
]

const services = [
  {
    id: "fullStack",
    title: "Full Stack Developer",
    icon: webapp,
    points: [
      "I build full stack web app from scratch to deployment",
      "Using my industry experience, I will deliver the web app according to indstry best practices such as code structure, performance optimisations etc.",
      "I listen closely to your needs and deliver tailored solutions, learned through my work experience.",
      "Check out my GitHub to see examples of my work and how I structure my code.",
      "My tech stack includes React, Nextjs, tailwind css, bootstrap, Expressjs , Typescript, Mongodb, Oracle DB, Java, Python, Framer Motion. Github Actions.",

    ]
  },
  {
    id: "technicalArticle",
    title: "Technical Article Writing",
    icon: writing,
    points: [
      "I explain technical topics in simple language, breaking down complex ideas.",
      " I ensure accuracy and provide valuable insights through detailed research.",
      "I make sure articles rank well on search engines by using relevant keywords.",


    ]
  },
  {
    id: "contentCreation",
    title: "Content Creation",
    icon: content,
    points: [
      "I understand each social media platform's nuances and what content works best.",
      "Well versed with AI tools like ChatGPT and Bing Image Creator to make content more attractive and engaging.",]
  },

];

const links = [
  { title: "LinkedIn", image: linkedin, link: "https://www.linkedin.com/in/amitav-panda-633a001b6/" },
  { title: "Github", image: github, link: "https://github.com/Amitavpanda" },
  { title: "Instagram", image: instagram, link: "https://lnkd.in/gn2GMWG5" },
  { title: "Twitter", image: twitter, link: "https://twitter.com/AmitavPanda99" }]

const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
    years: 4,
  },
  {
    name: "Typescript",
    icon: typescript,
    years: 2,
  },
  {
    name: "NextJs",
    icon: NextJs,
    years: 1,
  },
  {
    name: "Docker",
    icon: docker,
    years: 1,
  },
  {
    name: "Mongodb",
    icon: mongodb,
    years: 2,
  },
  {
    name: "OracleDB",
    icon: OracleDB,
    years: 1,
  },
  {
    name: "React JS",
    icon: reactjs,
    years: 3,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    years: 2,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
    years: 3,
  },
  {
    name: "Java",
    icon: java,
    years: 4,
  },
  {
    name: "Python",
    icon: python,
    years: 4,
  },
  {
    name: "Material UI",
    icon: materialui,
    years: 4,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    years: 4,
  },

  {
    name: "HTML",
    icon: html,
    years: 5,
  },
  {
    name: "CSS3",
    icon: css,
    years: 5,
  },

  {
    name: "git",
    icon: git,
    years: 4,
  },
  {
    name: "Github",
    icon: github,
    years: 4,
  },

  {
    name: "figma",
    icon: figma,
    years: 4,
  },


];

const experiences = [
  {
    title: "Product Development Engineer",
    company_name: "COMVIVA",
    icon: softwareDeveloper,
    iconBg: "#383E56",
    date: "March 2022 - July 2022",
    points: [
      "Contributing to the microservice architecture of a dynamic banking application.",
      "Resolved critical production-level issues reported by clients through thorough analysis of logs and extensive examination of the codebase which improved my problem solving skills drastically",
      "Upon identifying the issue, I provide a detailed Root Cause Analysis (RCA) and proceed to implement the necessary fixes. Additionally, I document each fix comprehensively in Confluence to maintain a record of the changes made.",
      "Whether it's adding new features, optimizing existing functionalities, or enhancing performance, I ensure that the changes are seamlessly integrated into the microservices architecture while maintaining high standards of code quality and security.",
    ],
    tech: ["Spring Boot", "Kafka", "Oracle Database", "Docker", "Grafana", "Linux",]
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "ALLD TECHNOLOGY",
    icon: softwareDeveloper1,
    iconBg: "#E6DEDD",
    date: "March 2022 – July 2022`",
    points: [
      "Collaborated on the development of a data management tool.",
      "Built a user-friendly dashboard for a client. Created functional features like a paginated orders table and a searchable employees table.",
      "Used React library to craft attractive and informative graphs for better data visualization. Integrated an editor component to improve userinteraction within the dashboard.",
      "Utilized Redux Toolkit, React, and TypeScript to create a responsive and intuitive userinterface.",

    ],
    tech: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "RTK Query", "TypeScript"],
  },

  {
    title: "Summer Intern",
    company_name: "HighRadius",
    icon: softwareDeveloper1,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - April 2022",
    points: [
      "Built a Full Stack Invoice Management Application",
      "Made the Machine Learning Model using Python to predict the payment data by the customers",
      "Made a receivable dashboard using Material UI, React",
      "Create a Java Servlet to process the data between web and mysql database",
    ],
    tech: ["Python", "ReactJS", "Java", "mySQL DataBase"],
  },
];

const works = [
  {
    title: "My Work",
    subtitle: "Projects",
    description: ["Following projects serve as compelling examples of my skills and experience. Through the provided links to code repositories and live demos, you can witness firsthand my ability to solve complex problems and deliver high-quality solutions.",
      "I have encountered a diverse range of technologies and frameworks, which has equipped me with the adaptability to quickly learn and master new tools. This proficiency allows me to effectively work with different technologies and seamlessly integrate them into projects.",
      "In each project, I prioritize writing clean, secure, and performant code with good file structure and architecture.",
      "This approach will help me become a good software engineer and delivering quality work in long run."],

  },
]


const projects = [


  {
    name: "Ganna Suno",

    description: [
      "A music player web app using React, Redux Toolkit and Firebase. Utilized RTK Query and Rapid API to fetch song details and related artist information.",
      "Implemented user authentication, allowing users to sign in with Google and email/password.",
      "Created a seamless user experience by enabling users to view song details, play songs, and like them.",
      "Will be adding some new unique features which will add some value to the audience and need to fix some bugs and security issues."
    ],

    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "rapid api",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: gannaCover,
    source_code_link: "https://github.com/Amitavpanda/Music_player_ganna_suno",
    status: false,
    web_link: "https://ganna-sunno.web.app/"


  },

  {
    name: "Event Management Web App",
    description: [
      "There is a requirement from a client to build a Full Stack Event Management Web app for his business.",
      "The web app allows users to view the services offered by the event management group, book events, and visualize how their events may look through images.",
      "I handled everything from designing to development to deployment.",
      "I maintained clean and secure code in both the frontend and backend, implementing form validation using Zod to enhance data integrity and security.",
      "Will Fix Bugs if raised by client"
    ],

    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "blue-text-gradient",
      },
      {
        name: "Shadcn ui",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "blue-text-gradient",
      },

    ],

    image: EventManagementCover,
    source_code_link: "https://github.com/Amitavpanda/EventManagementWebApp",
    status: true,
    web_link: "https://shubamangalam.vercel.app/"

  },

  {
    name: "My Portfolio Web App",
    description: [
      "My portfolio, built using React, Tailwind CSS, and Framer Motion, boasts an outstanding UI.It showcases my skills, experience, services, projects, and features a contact form for easy communication.",
      "I've made a conscious effort to adhere to clean code principles and maintain a structured folder organization in line with industry standards.",
      "Additionally, Will be doing future updates and improvements based on my evolving requirements."
    ],

    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },

    ],

    image: MyPortfolio,
    source_code_link: "https://github.com/Amitavpanda/My_Portfolio",
    status: true,
    web_link: "https://my-portfolio-amitav.vercel.app/"
  },


];

const contact = [
  {
    Icon: IoCallSharp,
    content: "+917077404655",
  },
  {
    Icon: BiLogoGmail,
    content: "pandaamitav01@gmail.com",
  }
]

export { services, technologies, experiences, projects, links, contact, introduction, works };