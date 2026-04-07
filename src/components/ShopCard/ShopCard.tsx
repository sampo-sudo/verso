import { Link } from "react-router-dom";
import type { Shop } from "../../data/types";
import StarRating from "../StarRating/StarRating";
import PriceLevel from "../PriceLevel/PriceLevel";
import CertBadges from "../CertBadges/CertBadges";
import styles from "./ShopCard.module.css";

interface ShopCardProps {
  shop: Shop;
}

export default function ShopCard({ shop }: ShopCardProps) {
  return (
    <Link to={`/shop/${shop.id}`} className={styles.card}>
      <div className={styles.info}>
        <div className={styles.name}>{shop.name}</div>
        <div className={styles.meta}>
          <StarRating rating={shop.rating} size="sm" />
          <PriceLevel level={shop.priceLevel} />
          <span className={styles.distance}>{shop.distance}</span>
        </div>
        <CertBadges certifications={shop.certifications} size="md" />
      </div>
      <span className={styles.arrow}>&gt;</span>
    </Link>
  );
}
