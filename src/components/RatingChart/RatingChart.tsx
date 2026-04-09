import styles from "./RatingChart.module.css";

interface RatingChartProps {
  distribution: Record<string, number>;
  rating: number;
}

export default function RatingChart({ distribution, rating }: RatingChartProps) {
  const maxCount = Math.max(...Object.values(distribution), 1);

  return (
    <div className={styles.container}>
      <div className={styles.bars}>
        {[5, 4, 3, 2, 1].map((star) => {
          const count = distribution[String(star)] || 0;
          const widthPercent = (count / maxCount) * 100;
          return (
            <div key={star} className={styles.row}>
              <span className={styles.label}>{star}</span>
              <div className={styles.track}>
                <div className={styles.fill} style={{ width: `${widthPercent}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.starContainer}>
        <span className={styles.bigStar}>
          ★
          <span className={styles.ratingNumber}>{rating.toFixed(1)}</span>
        </span>
      </div>
    </div>
  );
}
