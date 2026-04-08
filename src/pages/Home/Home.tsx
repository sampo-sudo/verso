import { useNavigate } from "react-router-dom";
import homepageLogo from "../../assets/homepage_logo.svg";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img src={homepageLogo} alt="Verso" className={styles.logo} />
      </div>
      <h1 className={styles.title}>Verso</h1>
      <button className={styles.startButton} onClick={() => navigate("/map")}>
        Aloita
      </button>
    </div>
  );
}
