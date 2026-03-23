import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import CertBadges from "../../components/CertBadges/CertBadges";
import shops from "../../data/shops.json";
import brands from "../../data/brands.json";
import type { Shop, Brand } from "../../data/types";
import styles from "./BrandList.module.css";

const allShops: Shop[] = shops as Shop[];
const allBrands: Brand[] = brands as Brand[];

export default function BrandList() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const shop = allShops.find((s) => s.id === id);

  if (!shop) {
    return <div className={styles.container}>Kauppaa ei löytynyt.</div>;
  }

  const shopBrands = shop.brands
    .map((bId) => allBrands.find((b) => b.id === bId))
    .filter(Boolean) as Brand[];

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <BackButton />
        <button
          className={styles.infoButton}
          onClick={() => navigate("/info")}
          aria-label="Tietoa"
        >
          i
        </button>
      </div>

      <p className={styles.title}>
        Tässä liikkeessä myynnissä olevat brändit:
      </p>

      {shopBrands.map((brand) => (
        <div key={brand.id} className={styles.brandRow}>
          <span className={styles.brandName}>{brand.name}</span>
          <CertBadges certifications={brand.certifications} size="sm" />
        </div>
      ))}
    </div>
  );
}
