import styles from "./MapsSearch.module.css";

interface MapSearchProps {
  onButtonClick: () => void;
}

export default function MapSearch({ onButtonClick }: MapSearchProps) {
  return (
    <div className={styles.topBar}>
      <button className={styles.searchButton} onClick={onButtonClick} aria-label="Suodata">
        🔍 Suodata ja hae
      </button>
    </div>
  );
}
