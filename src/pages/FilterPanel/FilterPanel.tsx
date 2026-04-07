import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import StarRating from "../../components/StarRating/StarRating";
import { useFilters } from "../../context/FilterContext";
import styles from "./FilterPanel.module.css";

const FILTER_ROWS = [
  { key: "vegan", label: "Vegaaninen", color: "#FFB6C1", icon: "\uD83D\uDC30" },
  { key: "finnish", label: "Kotimainen", color: "#4A90D9", icon: "\uD83C\uDDEB\uD83C\uDDEE" },
  { key: "materials", label: "Kestävät materiaalit", color: "#4CAF50", icon: "\uD83C\uDF33" },
  { key: "working", label: "Kestävät työolot", color: "#FFD700", icon: "\uD83D\uDCAA" },
];

const CLOTHES_TOGGLES = [
  { key: "juhalvaatteet", label: "Juhalvaatteet" },
  { key: "urheilu", label: "Urheilu" },
  { key: "lasten", label: "Lasten" },
  { key: "naisten", label: "Naisten" },
  { key: "miesten", label: "Miesten" },
];

export default function FilterPanel() {
  const navigate = useNavigate();
  const { filters, setFilters } = useFilters();

  const handleSearchChange = (value: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: value }));
  };

  const toggleCert = (key: string) => {
    setFilters((prev) => {
      const certs = prev.certifications.includes(key)
        ? prev.certifications.filter((c) => c !== key)
        : [...prev.certifications, key];
      return { ...prev, certifications: certs };
    });
  };

  const toggleClothes = (key: string) => {
    setFilters((prev) => {
      const clothes = prev.clothes.includes(key)
        ? prev.clothes.filter((c) => c !== key)
        : [...prev.clothes, key];
      return { ...prev, clothes: clothes };
    });
  };


  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }));
  };

  const handleRatingChange = (rating: number) => {
    setFilters((prev) => ({ ...prev, minRating: rating }));
  };

  const resetFilters = () => {
    setFilters({
      searchQuery: "",
      clothes: [],
      certifications: [],
      maxPrice: 5,
      minRating: 1
    });
  };


  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <TopBar
          onFilterClick={() => navigate(-1)}
          searchValue={filters.searchQuery}
          onSearchChange={handleSearchChange}
        />
        <button
          className={styles.infoButton}
          onClick={() => navigate("/info")}
          aria-label="Tietoa"
        >
          i
        </button>
      </div>

      <div className={styles.section}>
        {FILTER_ROWS.map((row) => {
          const checked = filters.certifications.includes(row.key);
          return (
            <div
              key={row.key}
              className={styles.filterRow}
              onClick={() => toggleCert(row.key)}
            >
              <div
                className={styles.iconCircle}
                style={{ backgroundColor: row.color }}
              >
                {row.icon}
              </div>
              <span className={styles.filterLabel}>{row.label}</span>
              <div
                className={`${styles.checkbox} ${checked ? styles.checked : ""}`}
              >
                {checked && <span className={styles.checkmark}>✓</span>}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.section}>
        <div className={styles.sectionLabel}>Maksimi Hintataso</div>
        <div className={styles.priceRow}>
          <span className={styles.priceLabel}>€</span>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={filters.maxPrice}
            onChange={handlePriceChange}
            className={styles.rangeSlider}
          />
          <span className={styles.priceLabel}>€€€€€</span>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionLabel}>Vähimmäisarvosana</div>
        <div className={styles.starRow}>
          <StarRating
            rating={filters.minRating}
            size="md"
            interactive
            onChange={handleRatingChange}
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Vaatekategoriat</div>

      
        <div className={styles.toggleSection}>
          
          {CLOTHES_TOGGLES.map((row) => {
            const checked = filters.clothes.includes(row.key);
            return (
              <div
                key={row.key}
                className={`${styles.toggleRow} ${checked ? styles.checked : ""}`}
                onClick={() => toggleClothes(row.key)}
              >
                <div
                  className={`${styles.clothesCheck} ${checked ? styles.checked : ""}`}
                >
                  {checked && <span className={styles.checkmark}>✓</span>}
                </div>
                <span className={`${styles.clothesLabel} ${checked ? styles.checked : ""}`}>{row.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.bottomWrapper}>
        <div className={styles.bottomContainer}>
          <button className={styles.clearButton} onClick={resetFilters} aria-label="Reset">
            Reset Filters
          </button>
          <button className={styles.applyButton} onClick={() => navigate(-1)} aria-label="Apply">
            Apply Filters
          </button>
        </div>
      </div>

    </div>
  );
}
