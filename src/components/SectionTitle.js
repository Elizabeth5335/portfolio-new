import { useTranslation } from "react-i18next";

export default function SectionTitle(props) {
  const { t } = useTranslation("global");

  return (
    <div className={`section-title ${props.customClass}`}>
      <span>{t(props.title)}</span>
      <h2>{t(props.title)}</h2>
    </div>
  );
}
