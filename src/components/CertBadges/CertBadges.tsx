import { CERTIFICATIONS } from "../../data/certifications";
import styles from "./CertBadges.module.css";

interface CertBadgesProps {
  certifications: string[];
  size?: "sm" | "popup" | "md" | "lg";
  noWrap?: boolean;
}

export default function CertBadges({ certifications, size = "sm", noWrap = false }: CertBadgesProps) {
  return (
    <div className={`${styles.container} ${noWrap ? styles.noWrap : ""}`}>
      {certifications.map((key) => {
        const cert = CERTIFICATIONS[key];
        if (!cert) return null;
        return (
          <span
            key={key}
            className={`${styles.badge} ${styles[size]}`}
            style={size === "sm" ? { backgroundColor: cert.color } : undefined}
            title={cert.label}
          >
            {size !== "sm" && (
              <img src={cert.icon} alt={cert.label} className={styles.iconImg} />
            )}
          </span>
        );
      })}
    </div>
  );
}
