import styles from "./MapsSearch.module.css";

interface MapSearchProps {
  onButtonClick: () => void;
}

export default function MapSearch({ onButtonClick }: MapSearchProps) {
  return (
    <div className={styles.topBar}>
      <button className={styles.searchButton} onClick={onButtonClick} aria-label="Suodata">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '6px'}}>
          <circle cx="11" cy="11" r="8" />
          <path d="M23 23l-6.5-6.5" />
        </svg>
        Suodata ja hae
      </button>
    </div>
  );
}
