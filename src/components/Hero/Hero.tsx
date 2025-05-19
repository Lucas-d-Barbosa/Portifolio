import styles from "./Hero.module.css";
import profileImg from "../../assets/images/perfil.png";
export function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.left}>
        <h1>Francisco Lucas Barbosa</h1>
        <h2>Desenvolvedor Full-stack</h2>
        <p>
          Sou apaixonado por tecnologia e desenvolvimento web. Busco criar
          soluções modernas, eficientes e com foco na experiência do usuário.
        </p>
        <p>
          Domino tecnologias como JavaScript, TypeScript, Angular, React, Vue,
          Java, Spring Boot, PHP, Laravel e SQL, desenvolvendo soluções
          completas do front-end ao back-end.
        </p>
        <div className={styles.buttons}>
          <button>Contato</button>
          <button>Download CV</button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.containerImg}>
          <img src={profileImg} alt="" />
        </div>
      </div>
    </main>
  );
}
