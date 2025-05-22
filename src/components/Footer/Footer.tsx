import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Rodapé do site">
      <div className={styles.areaLogo}>
        <img src={logo} alt="" />
      </div>
      <h2>
        "Transformando ideias em soluções digitais. Vamos construir algo
        incrível juntos?"
      </h2>
      <h2>&copy; 2025 Lucas Barbosa. Todos os direitos reservados.</h2>
      <div className={styles.areaRedes}>
        <a
          href="https://linkedin.com/in/francisco-barbosa-aa16b82b7"
          target="_blank"
        >
          <button aria-label="Botão para entrar em contato por linkedin">
            <FaLinkedin />
          </button>
        </a>
        <a href="mailto:flucas.dev@gmail.com" target="_blank">
          <button aria-label="Botão para entrar em contato por email">
            <BiLogoGmail />
          </button>
        </a>
      </div>
    </footer>
  );
}
