import games from "../../assets/images/games.png";
import project from "../../assets/images/meta-project.png";
import portfolio from "../../assets/images/portfolio.png";
import quizzical from "../../assets/images/quizzical.png";
import resume from "../../assets/images/resume.png";

const projects = [
  {
    id: 1,
    url: quizzical,
    name: "Quizzical",
    shortDesk: "Website with quizes about anime",
    description:
      "Quizzical gets 5 quetions from the Trivia API. You can select any answer. After it they are checked and you can see your score. Tru your best to get 5/5!",
    technologies: ["HTML", "CSS", "React", ],
    link: "https://elizabeth5335.github.io/quizzical/",
    gitHub: "https://github.com/Elizabeth5335/quizzical",
  },
  {
    id: 2,
    url: resume,
    name: "Resume",
    shortDesk: "This website was a kind of test project to show my bootstrap 5 skills.",
    description:
      "It is a one-page website with adaptive layout. It was written using HTML (bootstrap 5), CSS and some JavaScript for animations. The aim of this project was to show my ability to work with bootstrap 5: create responsive tables, long descriptions, images and so on. ",
    technologies: ["HTML", "CSS", "React",  "bootstrap 5"],
    link: "https://github.com/Elizabeth5335/Resume",
    gitHub: "https://github.com/Elizabeth5335/Resume",
  },
  {
    id: 3,
    url: project,
    name: "Meta project",
    shortDesk: "Imitation of portfolio website",
    description:
      "It was a final project for the course 'Advanced React' from Meta. The aim was to show up the React skills. I am the most proud of implementing the form.",
    technologies: ["HTML", "CSS", "React", "Chakra UI", "Formik"],
    link: "https://elizabeth5335.github.io/quizzical/",
    gitHub: "https://github.com/Elizabeth5335/quizzical",
  },
  { id: 4, url: portfolio, name: "Portfolio" },
  {
    id: 5,
    url: games,
    name: "Gamesss",
    shortDesk: "Website with three games.",
    description:
      "It is a website with three different games written with vanilla js. You can play Wordle, Breakout and Tetris!",
    technologies: ["HTML", "CSS", "JS", ],
    link: "https://elizabeth5335.github.io/Games/",
    gitHub: "https://github.com/Elizabeth5335/games",
  },
];

export default projects;
