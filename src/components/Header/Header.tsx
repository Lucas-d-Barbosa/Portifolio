import { MenuIcon, XIcon } from "lucide-react";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClickMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header
      className={`${styles.header} ${menuOpen ? styles.activeHeader : ""}`}
    >
      <div className={styles.containerTop}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="Logo do Desenvolvedor - Lucas Barbosa"
            title="Logo do Desenvolvedor - Lucas Barbosa"
            aria-label="Logo do Desenvolvedor - Lucas Barbosa"
          />
        </div>
        <div
          className={styles.button}
          onClick={handleClickMenu}
          aria-label="Icone de Menu"
        >
          <MenuIcon className={!menuOpen ? styles.show : ""} />
          <XIcon className={menuOpen ? styles.show : ""} />
        </div>
      </div>
      <nav className={menuOpen ? styles.showNav : ""}>
        <ul>
          <li>
            <a href="#main">Início</a>
          </li>

          <li>
            <a href="#soft-skills">Soft Skills</a>
          </li>
          <li>
            <a href="#hard-skills">Hard Skills</a>
          </li>
          <li>
            <a href="#formacao">Formação Academica</a>
          </li>
          <li>
            <a href="#experiencia">Experiência Profissional</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
