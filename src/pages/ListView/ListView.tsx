import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import BottomToggle from "../../components/BottomToggle/BottomToggle";
import ShopCard from "../../components/ShopCard/ShopCard";
import { useFilters } from "../../context/FilterContext";
import shops from "../../data/shops.json";
import type { Shop } from "../../data/types";
import styles from "./ListView.module.css";

const allShops: Shop[] = shops as Shop[];

export default function ListView() {
  const navigate = useNavigate();
  const { filters, setFilters } = useFilters();

  const filteredShops = allShops
    .filter((shop) => {
      if (
        filters.searchQuery &&
        !shop.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.certifications.length > 0 &&
        !filters.certifications.every((c) => shop.certifications.includes(c))
      ) {
        return false;
      }
      if (shop.priceLevel > filters.maxPrice) {
        return false;
      }
      if (shop.rating < filters.minRating) {
        return false;
      }
      return true;
    })
    .sort((a, b) => a.distanceMeters - b.distanceMeters);

  const handleSearchChange = (value: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBarWrapper}>
        <TopBar
          onFilterClick={() => navigate("/filter")}
          searchValue={filters.searchQuery}
          onSearchChange={handleSearchChange}
        />
      </div>

      <div className={styles.list}>
        {filteredShops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>

      <div className={styles.bottomWrapper}>
        <BottomToggle activeView="list" />
      </div>
    </div>
  );
}
