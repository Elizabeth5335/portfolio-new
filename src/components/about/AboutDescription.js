import { useTranslation } from "react-i18next";

export default function AboutDescription() {
  const { t } = useTranslation("global");

  return (
    <>
      <p>
        {t("about.I-am")} <strong>{t("about.Frontend-developer")}</strong>{" "}
        {t("about.with-one-year")}
      </p>
      <p>{t("about.I-can")}</p>
      <p>
        {t("about.passion")}
        <em>React</em>
        {t("about.passion2")}
      </p>
    </>
  );
}
