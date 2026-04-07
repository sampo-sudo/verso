import styles from "./ListSearch.module.css";

interface TopBarProps {
  onFilterClick: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export default function ListSearch({ onFilterClick, searchValue, onSearchChange }: TopBarProps) {
  return (
    <div className={styles.topBar}>
      <button className={styles.filterButton} onClick={onFilterClick} aria-label="Takaisin">
        Suodata
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
