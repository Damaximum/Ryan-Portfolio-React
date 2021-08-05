import {
  portfolioPng,
  codingPng,
  moviePng,
  notePng,
  productivityPng,
  readmePng,
  techPng,
} from "./images/index.js";

export const projects = [
  {
    title: "HTML/CSS",
    subtitle: "Basic Portfolio",
    description:
      "My first actual big work with HTML and CSS is the original portfolio, created from scratch.",
    image: portfolioPng,
    link: "https://github.com/Damaximum/Ryan-Portfolio",
    live: "https://damaximum.github.io/Ryan-Portfolio/",
  },
  {
    title: "Javascript",
    subtitle: "Coding Quiz",
    description:
      "I have developed a great understanding of Javascript. As a demonstration, this is a Coding Quiz I have coded, as part of Coding Bootcamp. It is run entirely by Javascript.",
    image: codingPng,
    link: "https://github.com/Damaximum/CBC-Code-Qui",
    live: "https://damaximum.github.io/CBC-Code-Quiz/",
  },
  {
    title: "API Project",
    subtitle: "Productivity Hub",
    description:
      "This is a demonstration of what I've learned and mastered in the Coding Bootcamp. It had challenged what I've learned as well as my creativity and communication skills. ",
    image: productivityPng,
    link: "https://github.com/Damaximum/Productivity-Hub",
    live: "https://damaximum.github.io/Productivity-Hub/",
  },
  {
    title: "NODE",
    subtitle: "README Generator",
    description:
      "This README Generator demonstrates my proficiency with NodeJS. Due to the focus on Node, there is no live application, but it does have a tutorial for isntallation and use.",
    image: readmePng,
    link: "https://github.com/Damaximum/CBC-README-Generator",
    live: "https://www.youtube.com/watch?v=VZIJiNx0GsE",
  },
  {
    title: "Express",
    subtitle: "Note Taker",
    description:
      "This is a Note Taker application that was made as a demonstration of my capability with Express.",
    image: notePng,
    link: "https://github.com/Damaximum/CBC-Note-Taker",
    application: "https://glacial-shelf-77021.herokuapp.com/notes",
    live: "https://glacial-shelf-77021.herokuapp.com/notes",
  },
  {
    title: "MySQL",
    subtitle: "Tech Blog",
    description:
      "This Tech Blog is a demonstration of my mastery of SQL along with Express and Node. This is an application of a blog, where both the front-end and the back-end were created by me.",
    image: techPng,
    link: "https://github.com/Damaximum/CBC-Tech-Blog",
    application: "https://cbc-tech-blog.herokuapp.com/",
    live: "https://cbc-tech-blog.herokuapp.com/",
  },
  {
    title: "Full-Stack Project",
    subtitle: "Movie Party",
    description:
      "This was a project that used all the things I've learned so far in UCSD's Coding Bootcamp. Both a front end and a backend had to be created, all the while testing my communication and planning skills.",
    image: moviePng,
    link: "https://github.com/Damaximum/Movie-Party",
    application: "https://movie-party-project.herokuapp.com/",
    live: "https://movie-party-project.herokuapp.com/",
  },
];

export const skills = [
  "HTML",
  "CSS (Bootstrap, HandleBars)",
  "JavaScript",
  "jQuery",
  "React.js",
  "IndexedDB",
  "Node.js",
  " Express.js",
  "SQL",
  "Sequelize",
  "MongoDB",
  "Mongoose",
  "NoSQL",
  "APIs",
];
