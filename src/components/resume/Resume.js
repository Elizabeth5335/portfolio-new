import blobGreen from "../../assets/images/blob-green-1.png";
import blobPink from "../../assets/images/blob-pink.png";
import "../../styles/Resume.css";
  import { ThemeContext } from "../../ThemeContext";
  import React from "react";
  import { useTranslation } from "react-i18next";

export default function Resume() {
  const { t, i18n } = useTranslation("global");


  const {theme, setTheme} = React.useContext(ThemeContext);


  const certificates = [
    {
      name: "Version Control",
      url: "https://www.coursera.org/account/accomplishments/certificate/WK3QUGHTH7NV",
      code: "WK3QUGHTH7NV",
    },
    {
      name: "HTML and CSS in depth",
      url: "https://www.coursera.org/account/accomplishments/certificate/984KZ2A453K2",
      code: "984KZ2A453K2",
    },
    {
      name: "Programming with JavaScript",
      url: "https://www.coursera.org/account/accomplishments/certificate/86MGHA59NR6S",
      code: "86MGHA59NR6S",
    },
    {
      name: "React Basics",
      url: "https://www.coursera.org/account/accomplishments/certificate/DNBSKU4NNRY6",
      code: "DNBSKU4NNRY6",
    },
    {
      name: "Advanced React",
      url: "https://www.coursera.org/account/accomplishments/certificate/8DZ6T2RS2HPN",
      code: "8DZ6T2RS2HPN",
    },
  ];

  return (
    <section id="resume" className="resume" data-theme={theme}>
      <img className="blob-green" src={blobGreen} alt="" />
      <img className="blob-pink" src={blobPink} alt="" />
 
      <div className="container">
      <div className="section-title resume-main-title">
        <span>{t("resume.resume")}</span>
        <h2>{t("resume.resume")}</h2>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">{t("resume.summary")}</h3>
          <div className="resume-item pb-0">
            <h4>{t("resume.Yelyzaveta")}</h4>
            <p>
              <em>
              {t("resume.graduated")}
              </em>
            </p>
              <ul>
                <li>
                  <i className="fa fa-chevron-right"></i> {t("resume.cities")}
                </li>
                <li>
                  <i className="fa fa-chevron-right"></i>
                  <a href="tel:+380991889215">+380 991 889 215</a>;
                  <a href="tel:+48695178074">+48 695 178 074</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right"></i>{" "}
                  <a href="mailto:lazareva15elizaveta@gmail.com">
                    <span>lazareva15elizaveta@gmail.com</span>
                  </a>
                </li>
              </ul>
          </div>
          <h3 className="resume-title">{t("resume.experience")}</h3>
          <div className="resume-item">
            <h4>Front-End Developer</h4>
            <h5>{t("resume.June")} 2022 - {t("resume.June")} 2023</h5>
            <p>
              <em>VESCOM, {t("resume.Lodz")}</em>
            </p>
            <div>
              <ul>
                <li>
                 {t("resume.prevJob1")}</li>
                <li>
                 {t("resume.prevJob2")}
                </li>
                <li>
                  {t("resume.prevJob3")}
                </li>
                <li>
                  {t("resume.prevJob4")}
                </li>
                <li>{t("resume.prevJob5")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">{t("resume.education")}</h3>
          <div className="resume-item">
            <h4>{t("resume.Karazin")}</h4>
            <h5>2019 - 2023</h5>
            <p>
              <em>{t("resume.facultyK")}</em>
            </p>
          </div>
          <div className="resume-item">
            <h4>{t("resume.LodzUni")}</h4>
            <h5>{t("resume.febJul")} 2022</h5>
            <p>
              <em>{t("resume.facultyL")}</em>
            </p>
          </div>
          <h3 className="resume-title">{t("resume.courses")}</h3>
          <div className="resume-item">
            <h4>Meta Front-End Developer Professional Certificate</h4>
            <h5>2023</h5>
            <ul>
              {certificates.map((certificate) => (
                <li key={certificate.code} >
                  {certificate.name}
                  <a href={certificate.url} target="_blank"> Coursera - {certificate.code}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
