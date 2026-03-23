import { CERTIFICATIONS } from "../../data/certifications";
import styles from "./CertBadges.module.css";

interface CertBadgesProps {
  certifications: string[];
  size?: "sm" | "md" | "lg";
}

export default function CertBadges({ certifications, size = "sm" }: CertBadgesProps) {
  return (
    <div className={styles.container}>
      {certifications.map((key) => {
        const cert = CERTIFICATIONS[key];
        if (!cert) return null;
        return (
          <span
            key={key}
            className={`${styles.badge} ${styles[size]}`}
            style={{ backgroundColor: cert.color }}
            title={cert.label}
          >
            {size !== "sm" && cert.icon}
          </span>
        );
      })}
    </div>
  );
}
