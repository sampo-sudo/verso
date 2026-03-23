import type { Review } from "../../data/types";
import StarRating from "../StarRating/StarRating";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.author}>{review.author}</div>
      <div className={styles.rating}>
        <StarRating rating={review.rating} size="sm" />
      </div>
      <p className={styles.text}>{review.text}</p>
    </div>
  );
}
