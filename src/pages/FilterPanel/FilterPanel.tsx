import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import StarRating from "../../components/StarRating/StarRating";
import { useFilters } from "../../context/FilterContext";
import { CERTIFICATIONS } from "../../data/certifications";
import styles from "./FilterPanel.module.css";

const FILTER_ROWS = [
  { key: "vegan", label: "Vegaaninen" },
  { key: "finnish", label: "Kotimainen" },
  { key: "materials", label: "Kestävät materiaalit" },
  { key: "working", label: "Kestävät työolot" },
];

const CLOTHES_TOGGLES = [
  { key: "juhlavaatteet", label: "Juhlavaatteet" },
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
              <img
                className={styles.iconCircle}
                src={CERTIFICATIONS[row.key].icon}
                alt={row.label}
              />
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
            Reset
          </button>
          <button className={styles.applyButton} onClick={() => navigate(-1)} aria-label="Apply">
            Apply
          </button>
        </div>
      </div>

    </div>
  );
}
