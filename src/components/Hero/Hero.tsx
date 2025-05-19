import styles from "./Hero.module.css";
import profileImg from "../../assets/images/perfil.png";
export function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.containerImg}>
          <img src={profileImg} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>Francisco Lucas Barbosa</h1>
        <h2>Desenvolvedor Full-stack</h2>
        <p>
          Sou apaixonado por tecnologia e desenvolvimento web. Busco criar
          soluções modernas, eficientes e com foco na experiência do usuário.
        </p>

        <div className={styles.buttons}>
          <button>Contato</button>
          <button>Download CV</button>
        </div>
      </div>
    </main>
  );
}
