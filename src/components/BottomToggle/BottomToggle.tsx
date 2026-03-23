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
        <span className={styles.icon}>📖</span>
        Kartta
      </Link>
      <Link
        to="/list"
        className={`${styles.toggleButton} ${activeView === "list" ? styles.active : styles.inactive}`}
      >
        <span className={styles.icon}>≡</span>
        Lista
      </Link>
    </div>
  );
}
