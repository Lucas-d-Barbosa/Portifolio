import type React from "react";
import styles from "./Section.module.css";
interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}
export function Section({ children, title, subtitle }: SectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}
