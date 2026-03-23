import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <svg
          className={styles.leaf}
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 50 C10 50, 10 10, 50 10 C50 10, 20 15, 10 50Z"
            fill="#4CAF50"
          />
          <path
            d="M10 50 C20 30, 30 20, 50 10"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <h1 className={styles.title}>Verso</h1>
      <button className={styles.startButton} onClick={() => navigate("/map")}>
        Aloita
      </button>
    </div>
  );
}
