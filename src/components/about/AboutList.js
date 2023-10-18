import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function AboutList() {
  const { t } = useTranslation("global");

  return (
    <div className="row">
      <div className="row">
        <div className="col-xxl-6">
          <ul className="about-list">
            <li>
              <FontAwesomeIcon icon={faChevronRight} />
              <strong> {t("about.Name")}: </strong>
              <span>{t("about.Yelyzaveta")}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} />
              <strong> {t("about.Website")}: </strong>
              <a href="http://yelyzavetalazarieva.space/">
                <span>http://yelyzavetalazarieva.space/</span>
              </a>
            </li>
            <li>
              <div className="row">
                <div className="col-auto pe-1">
                  <FontAwesomeIcon icon={faChevronRight} />
                  <strong> {t("about.Phone")}: </strong>
                </div>
                <div className="col ps-0">
                  <a href="tel:+380991889215">
                    <span>+380 991 889 215</span>
                  </a>
                  <br />
                  <a href="tel:+48695178074">
                    <span>+48 695 178 074</span>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} />
              <strong> E-mail: </strong>
              <a href="mailto:lazareva15elizaveta@gmail.com">
                <span>lazareva15elizaveta@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xxl-6">
          <ul className="about-list">
            <li>
              <FontAwesomeIcon icon={faChevronRight} />
              <strong> {t("about.Birthday")}: </strong> <span>15.02.2002</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} />
              <strong> {t("about.Age")}:</strong> <span>21</span>
            </li>
            <li>
              <div className="row">
                <div className="col-auto pe-1">
                  <FontAwesomeIcon icon={faChevronRight} />
                  <strong>{t("about.City")}: </strong>
                </div>
                <div className="col ps-0">
                  <span>
                    {t("about.Kharkiv")}
                    <br />
                    {t("about.Łódź")}
                  </span>
                </div>
              </div>
            </li>
            <li className="education">
              <FontAwesomeIcon icon={faChevronRight} />
              <strong className="label"> {t("about.Education")}: </strong>
              <span> {t("about.Karazin")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
