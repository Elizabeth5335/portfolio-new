import games from "../../assets/images/games.png";
import portfolio from "../../assets/images/portfolio.png";
import quizzical from "../../assets/images/quizzical.png";
import bibliohome from "../../assets/images/bibliohome.png";
import tournament from "../../assets/images/tournament.png";
import medicinedelivery from "../../assets/images/medicinedelivery.png";

const projects = [
  {
    id: 1,
    url: medicinedelivery,
    name: "portfolio.medicaldelivery",
    shortDesk: "portfolio.aboutMD",
    description: "portfolio.descMD",
    technologies: ["MongoDB", "Express", "React", "NodeJS"],
    link: "https://medicine-delivery-3.onrender.com/",
    gitHub: "https://github.com/Elizabeth5335/medicine-delivery",
  },
  {
    id: 2,
    url: quizzical,
    name: "Quizzical",
    shortDesk: "portfolio.aboutQ",
    description: "portfolio.descQ",
    technologies: ["HTML", "CSS", "React"],
    link: "https://elizabeth5335.github.io/quizzical/",
    gitHub: "https://github.com/Elizabeth5335/quizzical",
  },
  {
    id: 3,
    url: portfolio,
    name: "portfolio.portfolio",
    shortDesk: "portfolio.aboutP",
    description: "portfolio.descP",
    technologies: ["HTML", "CSS", "Bootstrap 5", "Yii2"],
    link: "https://yl-portfolio.000webhostapp.com/",
    gitHub: "https://github.com/Elizabeth5335/portfolio",
  },
  {
    id: 4,
    url: games,
    name: "Gamesss",
    shortDesk: "portfolio.aboutG",
    description: "portfolio.descG",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://elizabeth5335.github.io/Games/",
    gitHub: "https://github.com/Elizabeth5335/games",
  },
  {
    id: 5,
    url: bibliohome,
    name: "portfolio.Bibliohome",
    shortDesk: "portfolio.aboutB",
    description: "portfolio.descB",
    technologies: ["HTML", "CSS", "React", "Firebase"],
    link: "https://bibliohome.pl/",
    gitHub: "https://github.com/Elizabeth5335/Bibliohome",
  },
  {
    id: 6,
    url: tournament,
    name: "portfolio.tournament",
    shortDesk: "portfolio.aboutT",
    description: "portfolio.descT",
    technologies: ["HTML", "CSS", "React", "Firebase"],
    link: "https://r6-tournament-ua.web.app/",
    gitHub: "https://github.com/Elizabeth5335/tournament",
  },
];

export default projects;
