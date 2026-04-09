import { Link } from "react-router-dom";
import styles from "./BottomToggle.module.css";

interface BottomToggleProps {
  activeView: "map" | "list";
}

export default function BottomToggle({ activeView }: BottomToggleProps) {
  return (
    <div className={styles.container}>
      <Link
        to="/map"
        className={`${styles.toggleButton} ${activeView === "map" ? styles.active : styles.inactive}`}
      >
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
          <path d="M8 2v16" />
          <path d="M16 6v16" />
        </svg>
        Kartta
      </Link>
      <Link
        to="/list"
        className={`${styles.toggleButton} ${activeView === "list" ? styles.active : styles.inactive}`}
      >
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
        Lista
      </Link>
    </div>
  );
}
