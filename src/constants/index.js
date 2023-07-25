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
    leetcode,
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
    airbnbCover,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const links = [{title : "LinkedIn" , image: linkedin, link : "https://www.linkedin.com/in/amitav-panda-633a001b6/"}, {title : "Github", image: github , link: "https://github.com/Amitavpanda"}, {title : "Instagram", image : instagram, link: "https://lnkd.in/gn2GMWG5"}, {title : "LeetCode", image : leetcode, link: "https://leetcode.com/amitavpanda/"}, {title : "Twitter", image : twitter, link : "https://twitter.com/AmitavPanda99"}]
  
  const technologies = [
    {
      name: "Java",
      icon: java,
      years : 3,
    },
    {
      name: "Python",
      icon: python,
      years : 4,
    },
    {
      name: "JavaScript",
      icon: javascript,
      years : 3,
    },
    {
      name: "DSA",
      icon: dsa,
      years : 4,
    },
    {
      name: "Typescript",
      icon: typescript,
      years : 1,
    },
    {
      name: "HTML",
      icon: html,
      years : 4,
    },
    {
      name: "CSS3",
      icon: css,
      years : 4,
    },
    {
      name: "React JS",
      icon: reactjs,
      years : 3,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      years : 2,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      years : 2,
    },
    {
      name: "Material UI",
      icon: materialui,
      years : 3,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
      years : 4,
    },
    {
      name: "git",
      icon: git,
      years : 4,
    },
    {
      name: "Github",
      icon: github,
      years : 4,
    },

    {
      name: "figma",
      icon: figma,
      years : 4,
    },
 

  ];
  
  const experiences = [
    {
      title: "SDE Intern",
      company_name: "ALLD Technology",
      icon: softwareDeveloper,
      iconBg: "#383E56",
      date: "March 2022 - July 2022",
      points: [
        "Collaborated on the development of a data management tool.",
        "Build a page for clients to add, edit, and delete their data.",
        "Utilized Redux Toolkit, React, and TypeScript to create a responsive and intuitive userinterface.",
      ],
      tech : ["ReactJS", "Java","MaterialUI", "TypeScript", "Redux-Toolkit"]
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
      tech : ["Python", "ReactJS", "Java", "mySQL DataBase"],
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
      name: "Ganna Suno",
      description:"A music player web app using React, Redux Toolkit, and Firebase. Utilized RTK Query and Rapid API to fetch song details and related artist information. Implemented user authentication, allowing users to sign in with Google and email/password. Created a seamless user experience by enabling users to view song details, play songs, and like them.",
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
      status : false,
      web_link : "https://ganna-sunno.web.app/"


    },

    {
      name: "Airbnb Clone",
      description:
        "Developed a front-end Airbnb clone using React and Material-UI. Deployed the project on Firebase.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "material ui",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: airbnbCover,
      source_code_link: "https://github.com/Amitavpanda/Airbnb_clone_ReactJS",
      status : true,
      web_link : "https://clone-air-11616.web.app/"

    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, links };