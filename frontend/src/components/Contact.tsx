import style from "../app/style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactComponent() {
  return (
    <>
      <button className={style.contactButton}>
        <FontAwesomeIcon icon={faWhatsapp} /> Falar com consultor
      </button>
      <span className={style.contactSpan}>(31) 3441-0240</span>
    </>
  );
}
