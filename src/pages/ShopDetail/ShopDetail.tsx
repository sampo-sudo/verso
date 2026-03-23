import { useParams, useNavigate, Link } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import CertBadges from "../../components/CertBadges/CertBadges";
import PriceLevel from "../../components/PriceLevel/PriceLevel";
import RatingChart from "../../components/RatingChart/RatingChart";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import shops from "../../data/shops.json";
import brands from "../../data/brands.json";
import type { Shop, Brand } from "../../data/types";
import styles from "./ShopDetail.module.css";

const allShops: Shop[] = shops as Shop[];
const allBrands: Brand[] = brands as Brand[];

export default function ShopDetail() {
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
          className={styles.directionsButton}
          onClick={() =>
            window.open(
              `https://www.google.com/maps/dir/?api=1&destination=${shop.coordinates.lat},${shop.coordinates.lng}`,
              "_blank"
            )
          }
        >
          Reittiohjeet
        </button>
      </div>

      <div className={styles.nameRow}>
        <h1 className={styles.shopName}>{shop.name}</h1>
        <PriceLevel level={shop.priceLevel} />
      </div>
      <div className={styles.address}>{shop.address}</div>

      <div className={styles.certRow}>
        <CertBadges certifications={shop.certifications} size="md" />
        <button
          className={styles.infoButton}
          onClick={() => navigate("/info")}
          aria-label="Tietoa sertifikaateista"
        >
          i
        </button>
      </div>

      <h2 className={styles.sectionHeader}>Brändit</h2>
      <div className={styles.brandsRow}>
        <span className={styles.brandNames}>
          {shopBrands.map((b) => b.name).join(", ")}
        </span>
        <Link to={`/shop/${shop.id}/brands`} className={styles.brandArrow}>
          &gt;
        </Link>
      </div>

      <h2 className={styles.sectionHeader}>Arvostelut</h2>
      <RatingChart distribution={shop.ratingDistribution} rating={shop.rating} />

      <div className={styles.reviewsSection}>
        {shop.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
