import styles from "./Skill.module.css";
interface SkillProps {
  nome: string;
  children?: React.ReactNode;
}
export default function Skill({ nome, children }: SkillProps) {
  return (
    <div className={styles.skill}>
      <div className={styles.icon}>{children}</div>
      <span className={styles.nome}>{nome}</span>
    </div>
  );
}
