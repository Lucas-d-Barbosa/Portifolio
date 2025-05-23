import { MenuIcon, XIcon } from "lucide-react";
import logo from "../../assets/images/logo-light.png";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClickMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header
      className={`${styles.header} ${menuOpen ? styles.activeHeader : ""}`}
      aria-label="Cabeçalho do site"
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
            <a href="#main" aria-label="Link para o início">
              Início
            </a>
          </li>

          <li>
            <a href="#soft-skills" aria-label="Link para as soft skills">
              Soft Skills
            </a>
          </li>
          <li>
            <a href="#hard-skills" aria-label="Link para as hard skills">
              Hard Skills
            </a>
          </li>
          <li>
            <a href="#formacao" aria-label="Link para a formação acadêmica">
              Formação Acadêmica
            </a>
          </li>
          <li>
            <a
              href="#experiencia"
              aria-label="Link para a experiência profissional"
            >
              Experiência Profissional
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
