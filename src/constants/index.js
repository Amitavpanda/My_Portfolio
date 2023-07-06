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
    dsa
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, links };