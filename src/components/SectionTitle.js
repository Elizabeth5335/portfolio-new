import { useTranslation } from "react-i18next";

export default function SectionTitle(props) {
  const { t } = useTranslation("global");

  return (
    <div className={`section-title ${props.customClass}`}>
      {/* <span>{t(props.title)}</span> */}
      <h1 className="mb-5 m-auto text-center">{t(props.title).toUpperCase()}</h1>

    </div>
  );
}
