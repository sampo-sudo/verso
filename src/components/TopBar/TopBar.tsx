import styles from "./TopBar.module.css";

interface TopBarProps {
  onFilterClick: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export default function TopBar({ onFilterClick, searchValue, onSearchChange }: TopBarProps) {
  return (
    <div className={styles.topBar}>
      <button className={styles.filterButton} onClick={onFilterClick} aria-label="Takaisin">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
      </button>
      <div className={styles.searchBar}>
        {!searchValue && (
          <span className={styles.searchIcon}>🔍</span>
        )}
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Hae nimellä"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchValue && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={() => onSearchChange("")}
            aria-label="Tyhjennä haku"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
