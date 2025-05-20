import styles from "./Skill.module.css";
interface SkillProps {
  nome: string;
  children?: React.ReactNode;
}
export function Skill({ nome, children }: SkillProps) {
  console.log(nome, children);
  return (
    <div className={styles.skill}>
      <div className={styles.icon}>{children}</div>
      <span className={styles.nome}>{nome}</span>
    </div>
  );
}
