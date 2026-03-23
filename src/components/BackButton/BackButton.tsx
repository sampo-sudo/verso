import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

interface BackButtonProps {
  onClick?: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button className={styles.backButton} onClick={handleClick} aria-label="Takaisin">
      &lt;
    </button>
  );
}
