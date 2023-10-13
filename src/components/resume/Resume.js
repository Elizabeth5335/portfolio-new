import blobGreen from "../../assets/images/blob-green-1.png";
import blobPink from "../../assets/images/blob-pink.png";
import "../../styles/Resume.css";

export default function Resume() {
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
    <section id="resume" className="resume">
      <img className="blob-green" src={blobGreen} alt="" />
      <img className="blob-pink" src={blobPink} alt="" />

      <div className="container">
      <div className="section-title resume-title">
        <span>Resume</span>
        <h2>Resume</h2>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item pb-0">
            <h4>Yelyzaveta Lazarieva</h4>
            <p>
              <em>
                Recently I graduated from V.N.Karazin Kharkiv National University. I have
                one year of commercial experience in Frontend development
              </em>
            </p>
              <ul>
                <li>
                  <i className="fa fa-chevron-right"></i> Kharkiv, Ukraine /
                  Łódź, Poland
                </li>
                <li>
                  <i className="fa fa-chevron-right"></i>{" "}
                  <a href="tel:+380991889215">+380 991 889 215</a>;{" "}
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
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Front-End Developer</h4>
            <h5>'June 2022 - June 2023</h5>
            <p>
              <em>'VESCOM, Łódź, Poland</em>
            </p>
            <div>
              <ul>
                <li>
                  <i className="fa fa-chevron-right"></i>Collaborated on projects involving Yii2 and Angular frameworks
                </li>
                <li>
                  <i className="fa fa-chevron-right"></i>Revitalized legacy projects through integration of modern technologies.
                </li>
                <li>
                  <i className="fa fa-chevron-right"></i>Transformed designs into responsive layouts for optimal user experience.
                </li>
                <li>
                  <i className="fa fa-chevron-right"></i>Enhanced existing functionalities to achieve higher performance standards.
                </li>
                <li>Developed a modular, multiple-page website in Angular that incorporated responsive design principles</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>V.N.Karazin Kharkiv National University</h4>
            <h5>2019 - 2023</h5>
            <p>
              <em>Faculty of Computer Science , Speciality: Cyber-security</em>
            </p>
          </div>
          <div className="resume-item">
            <h4>University of Łódź</h4>
            <h5>February - July 2022</h5>
            <p>
              <em>Faculty of Computer Science (as a mobility student)</em>
            </p>
          </div>
          <h3 className="resume-title">Courses</h3>
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
