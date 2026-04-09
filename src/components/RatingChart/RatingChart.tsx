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
        <svg className={styles.bigStar} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" fill="#F096D3" />
        </svg>
        <span className={styles.ratingNumber}>{rating.toFixed(1)}</span>
      </div>
    </div>
  );
}
