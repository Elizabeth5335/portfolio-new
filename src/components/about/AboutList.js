import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, ListGroup } from "react-bootstrap";

export default function AboutList() {
  const { t } = useTranslation("global");

  return (
    <Row>
      <Row>
        <Col xxl={6}>
          <ListGroup variant="flush" className="about-list">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faChevronRight} />
              <strong> {t("about.Name")}: </strong>
              <span>{t("about.Yelyzaveta")}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faChevronRight} />
              <strong> {t("about.Website")}: </strong>
              <a href="http://yelyzavetalazarieva.space/">
                <span>http://yelyzavetalazarieva.space/</span>
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex">
                <div className="pe-1">
                  <FontAwesomeIcon icon={faChevronRight} />
                  <strong> {t("about.Phone")}: </strong>
                </div>
                <div>
                  <a href="tel:+380991889215">
                    <span>+380 991 889 215</span>
                  </a>
                  <br />
                  <a href="tel:+48695178074">
                    <span>+48 695 178 074</span>
                  </a>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faChevronRight} />
              <strong> E-mail: </strong>
              <a href="mailto:lazareva15elizaveta@gmail.com">
                <span>lazareva15elizaveta@gmail.com</span>
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xxl={6}>
          <ListGroup variant="flush" className="about-list">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faChevronRight} />
              <strong> {t("about.Birthday")}: </strong> <span>15.02.2002</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faChevronRight} />
              <strong> {t("about.Age")}:</strong> <span>21</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex">
                <div className="pe-1">
                  <FontAwesomeIcon icon={faChevronRight} />
                  <strong className="ps-1">{t("about.City")}: </strong>
                </div>
                <div>
                  <span>
                    {t("about.Kharkiv")}
                    <br />
                    {t("about.Łódź")}
                  </span>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="education">
              <FontAwesomeIcon icon={faChevronRight} />
              <strong className="label"> {t("about.Education")}: </strong>
              <span> {t("about.Karazin")}</span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Row>
  );
}
