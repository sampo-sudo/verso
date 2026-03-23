import BackButton from "../../components/BackButton/BackButton";
import { CERTIFICATIONS } from "../../data/certifications";
import styles from "./InfoPage.module.css";

const CERT_ORDER = ["vegan", "working", "finnish", "materials"];

export default function InfoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backRow}>
        <BackButton />
      </div>

      <p className={styles.intro}>
        Liikkeille myönnetään ikonit niissä myytävien brändien perusteella.
        Tietoja brändeistä saamme niiden omilta nettisivuilta sekä muista
        julkisista lähteistä, kuten tieteellisistä tutkimuksista ja
        artikkeleista.
      </p>

      {CERT_ORDER.map((key) => {
        const cert = CERTIFICATIONS[key];
        return (
          <div key={key} className={styles.certSection}>
            <div
              className={styles.certIcon}
              style={{ backgroundColor: cert.color }}
            >
              {cert.icon}
            </div>
            <div className={styles.certContent}>
              <div className={styles.certLabel}>{cert.label}</div>
              <p className={styles.certDescription}>{cert.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
