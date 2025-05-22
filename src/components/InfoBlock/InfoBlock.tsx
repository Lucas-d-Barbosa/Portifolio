import type { IconType } from "react-icons";
import styles from "./InfoBlock.module.css";

interface InfoBlockProps {
  titulo: string;
  cargo: string;
  periodo: string;
  iconBg: IconType | null;
  children: React.ReactNode;
}

export default function InfoBlock({
  titulo,
  cargo,
  periodo,
  iconBg: IconBg,
  children,
}: InfoBlockProps) {
  return (
    <div className={styles.infoBlockWrapper}>
      <div className={styles.infoBlockContainer}>
        <div className={styles.infoBlockHeader}>
          <h4>
            {titulo} - <span style={{ fontStyle: "italic" }}>{cargo}</span>
          </h4>
          <h4>-</h4>
          <h4>
            Período: <span style={{ fontStyle: "italic" }}>{periodo}</span>
          </h4>
        </div>
        <h4>Atividades:</h4>
        <ul className={styles.infoBlockList}>{children}</ul>
      </div>
      {IconBg ? <IconBg className={styles.infoBlockBgIcon} /> : ""}
    </div>
  );
}
