import styles from "./TopBar.module.css";

interface TopBarProps {
  onFilterClick: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export default function TopBar({ onFilterClick, searchValue, onSearchChange }: TopBarProps) {
  return (
    <div className={styles.topBar}>
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Hae tai suodata"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <button className={styles.filterButton} onClick={onFilterClick} aria-label="Suodata">
        ≡
      </button>
    </div>
  );
}
