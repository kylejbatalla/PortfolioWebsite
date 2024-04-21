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
    coderdojo,
    footlocker,
    meta,
    SDSC,
    snapchat,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "photography",
      title: "Photography",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Android Development",
      icon: web,
    },
    {
      title: "Full-Stack Development",
      icon: mobile,
    },
    {
      title: "Photography",
      icon: backend,
    },
    {
      title: "Clothing Brand Owner",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Android Software Engineer",
      company_name: "Snap Inc. - Santa Monica, Ca",
      icon: snapchat,
      iconBg: "#FFFFF",
      date: "August 2022 - November 2023",
      points: [
        "Integrated code coverage reporting into CI/CD pipeline by executing and pushing coverage data to Github and Google BigQuery database utilizing GCP (Google Cloud Platform), helping increase overall team code coverage by 10%.",
        "Designed and implemented auto-enable camera flash feature in low lighting conditions on Snapchat camera page using MVP architectural patterns, RxJava, and Dagger dependency injection for asynchronous programming.",
        "Delivered multiple UI changes on Snapchat Lens Explorer page exposing up to 3.5 million Android users with some changes resulting in double impression count rates, up to 100% increase during A/B testing",
        "Designed a simple Bash script frame-rate drop simulator tool for .mp4 videos using an implementation of FFMPEG",
        "Involved in full feature life cycles including planning, designing, implementing, code reviewing, testing, and impact analysis in a fast paced environment.",
        "Responsible for responding to small tasks and tickets weekly including feature enhancements, bug fixes, and testing in addition to collaborating with project managers and designers to ensure deadlines are met.",
      ],
    },
    {
      title: "Front-End Software Engineer Intern",
      company_name: "San Diego Supercomputer Center - Remote",
      icon: SDSC,
      iconBg: "#FAFAFA",
      date: "Jun 2021 - Sept 2021",
      points: [
        "Responsible for developing and maintaining front end code for profile and main feed page for a mock social media application and as well as creating corresponding user stories, UI design, and wireframing.",
        "Troubleshooted and diagnosed bugs in weekly application testing. Reported and created tickets relating to bug fixes and assigned corresponding engineers to such tickets",
        "Collaborated with the back end team and project manager to meet sprint goals, implement new features in a timely manner, and optimize functionality for a responsive web application while practicing agile methodology",
      ],
    },
    {
      title: "Programming Instructor",
      company_name: "Coder Dojo Hartnell College - Soledad, Ca",
      icon: coderdojo,
      iconBg: "#FFFFFF",
      date: "Sept 2017 - Nov 2017",
      points: [
        "Educated students about the basics of computer programming using introductory topics in Java suitable for elementary school children.",
        "Led and managed classroom activities while creating a collaborative learning environment meant to engage young students about the importance of programming and technology",
      ],
    },
    {
      title: "Sales Associate",
      company_name: "Foot Locker - Salinas, Ca",
      icon: footlocker,
      iconBg: "#FFFFFF",
      date: "Jun 2016 - Sept 2018",
      points: [
        "Utilized various sales techniques with customers and implemented communication and team building methods with colleagues to increase accessory sales and improve inventory audits",
        "Provided training and support for new hires including job shadowing, mentorship, and feedback sessions to ensure a smooth onboarding process.",
        "Performed daily tasks such as solving customer inquiries, inventory and sales floor management, and building and maintaining excellent customer relationships.",
      ],
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
  
  export { services, technologies, experiences, testimonials, projects };