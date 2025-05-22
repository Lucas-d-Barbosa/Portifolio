import type React from "react";
import styles from "./Section.module.css";
interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}
export default function Section({
  children,
  title,
  subtitle,
  id,
}: SectionProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.sectionTitle}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}
