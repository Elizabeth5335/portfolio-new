import games from "../../assets/images/games.png";
import project from "../../assets/images/meta-project.png";
import portfolio from "../../assets/images/portfolio.png";
import quizzical from "../../assets/images/quizzical.png";
import resume from "../../assets/images/resume.png";
import tournament from "../../assets/images/tournament.png";

const projects = [
  {
    id: 1,
    url: quizzical,
    name: "Quizzical",
    shortDesk: "portfolio.aboutQ",
    description: "portfolio.descQ",
    technologies: ["HTML", "CSS", "React"],
    link: "https://elizabeth5335.github.io/quizzical/",
    gitHub: "https://github.com/Elizabeth5335/quizzical",
  },
  {
    id: 2,
    url: portfolio,
    name: "portfolio.portfolio",
    shortDesk: "portfolio.aboutP",
    description:
      "portfolio.descP",
    technologies: ["HTML", "CSS", "Bootstrap 5", "Yii2"],
    link: "https://yl-portfolio.000webhostapp.com/",
    gitHub: "https://github.com/Elizabeth5335/portfolio",
  },
  {
    id: 3,
    url: games,
    name: "Gamesss",
    shortDesk: "portfolio.aboutG",
    description:
      "portfolio.descG",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://elizabeth5335.github.io/Games/",
    gitHub: "https://github.com/Elizabeth5335/games",
  },
  {
    id: 4,
    url: tournament,
    name: "portfolio.tournament",
    shortDesk: "portfolio.aboutT",
    description: "portfolio.descT",
    technologies: ["HTML", "CSS", "React", "Firebase"],
    link: "https://r6-tournament-ua.web.app/",
    gitHub: "https://github.com/Elizabeth5335/tournament",
  },
  {
    id: 5,
    url: resume,
    name: "portfolio.resume",
    shortDesk: "portfolio.aboutR",
    description: "portfolio.descR",
    technologies: ["HTML", "CSS", "Bootstrap 5"],
    link: "https://github.com/Elizabeth5335/Resume",
    gitHub: "https://github.com/Elizabeth5335/Resume",
  },
  
  
];

export default projects;
