import { socials } from "./socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcons() {
  return (
    <>
      {socials.map((social) => {
        return (
          <a
            className="social-icon"
            key={social.url}
            href={social.url}
            target="_blank"
            aria-label={social.desc}
          >
            <FontAwesomeIcon icon={social.icon} size="2x" />
          </a>
        );
      })}
    </>
  );
}
