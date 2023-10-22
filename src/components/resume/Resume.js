import blobGreen from "../../assets/images/blob-green-1.png";
import blobPink from "../../assets/images/blob-pink.png";
import "../../styles/Resume.css";
import { ThemeContext } from "../../ThemeContext";
import React from "react";
import { useTranslation } from "react-i18next";
import { certificates } from "./certificates";
import SectionTitle from "../SectionTitle";
import ResumeItem from "./ResumeItem";
import {Col, Row, Container} from "react-bootstrap"

export default function Resume() {
  const { t } = useTranslation("global");
  const { theme } = React.useContext(ThemeContext);

  return (
    <section id="resume" className="resume" data-theme={theme}>
      {/* <img className="blob-green" src={blobGreen} alt="" />
      <img className="blob-pink" src={blobPink} alt="" /> */}

      <Container>
        <SectionTitle title="resume.resume" customClass="resume-main-title" />

        <Row>
          <Col lg={6}>
            <h3 className="resume-title">{t("resume.summary")}</h3>

            <ResumeItem
              h4={t("resume.Yelyzaveta")}
              em={t("resume.graduated")}
              list={[
                t("resume.cities"),
                <>
                  <a href="tel:+380991889215">+380 991 889 215</a>
                  <br />
                  <a href="tel:+48695178074">+48 695 178 074</a>
                </>,
                <a href="mailto:lazareva15elizaveta@gmail.com">
                  <span>lazareva15elizaveta@gmail.com</span>
                </a>,
              ]}
            />

            <h3 className="resume-title">{t("resume.experience")}</h3>

            <ResumeItem
              h4="Yelyzaveta Lazarieva"
              h5={`${t("resume.June")} 2022 - ${t("resume.June")} 2023`}
              em={`VESCOM, ${t("resume.Lodz")}`}
              list={[
                t("resume.prevJob1"),
                t("resume.prevJob2"),
                t("resume.prevJob3"),
                t("resume.prevJob4"),
                t("resume.prevJob5"),
              ]}
            />
          </Col>
          <Col lg={6}>
            <h3 className="resume-title">{t("resume.education")}</h3>

            <ResumeItem
              h4={t("resume.Karazin")}
              h5="2019 - 2023"
              em={t("resume.facultyK")}
            />

            <ResumeItem
              h4={t("resume.LodzUni")}
              h5={`${t("resume.febJul")} 2022`}
              em={t("resume.facultyL")}
            />

            <h3 className="resume-title">{t("resume.courses")}</h3>

            <ResumeItem
              h4="Meta Front-End Developer Professional Certificate"
              h5="2023"
              em={t("resume.facultyL")}
              list={certificates.map((certificate) => (
                <div key={certificate.code}>
                  {certificate.name}
                  <a href={certificate.url} target="_blank">
                    Coursera - {certificate.code}
                  </a>
                </div>
              ))}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
