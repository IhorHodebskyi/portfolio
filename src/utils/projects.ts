import { cineManiaImages, hotelImages, phoneBookImages } from "./imagesPaths";
import { ProjectTab } from "./types";

export const PROJECTS_TAB: ProjectTab[] = [
  {
    title: "Phone Book",
    images: phoneBookImages,
    description:
      "Web application for storing contacts, logging in, global status management, requests for storing and displaying contexts (Reduch toolkit). The backend is responsible for validating the user and communicating with the database where the contacts are stored.",
    link: "https://ihorhodebskyi.github.io/goit-react-hw-08-phonebook/",
    role: "Full stack developer.",
    project: "Pet project.",
    techStack:
      "JavaScript, React, Styled components, Formik, Redux Toolkit, Persisted, Webpack, Node.js, Express, MongoDB, Mongoose, Jsonwebtoken, Dotenv, Cors.",
  },
  {
    title: "Cinemania",
    images: cineManiaImages,
    description:
      "A web-based movie search engine developed using the TMDB API. The main programming language for this project was JavaScript. As a developer, I was responsible for pagination and bug fixes, overall code quality, and helping the team with other sections.",
    link: "https://ihorhodebskyi.github.io/project-neverland/",
    role: "Team lead",
    project: "Team project",
    techStack: "HTML, CSS, JavaScript, Axios, BasicLightbox, Tui-pagination, Parcel",
  },
  {
    title: "Mimino",
    images: hotelImages,
    description:
      "A multi-page website of a restaurant-hotel complex. As a developer, my responsibilities involved creating the Header, Hero, Footer",
    link: "https://evgenyaroviy.github.io/web-wizards/index.html",
    role: "Front end developer",
    project: "Team project",
    techStack: "HTML, CSS, JavaScript, Vite.js",
  },
];
