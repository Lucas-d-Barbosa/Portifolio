import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.areaLogo}>
        <img src={logo} alt="" />
      </div>
      <h2>
        "Transformando ideias em soluções digitais. Vamos construir algo
        incrível juntos?"
      </h2>
      <h2>&copy; 2025 Lucas Barbosa. Todos os direitos reservados.</h2>
    </footer>
  );
}
