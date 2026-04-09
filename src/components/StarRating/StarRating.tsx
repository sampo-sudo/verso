import styles from "./StarRating.module.css";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md";
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export default function StarRating({
  rating,
  size = "sm",
  interactive = false,
  onChange,
}: StarRatingProps) {
  const rounded = Math.round(rating);

  const handleClick = (star: number) => {
    if (interactive && onChange) {
      onChange(star);
    }
  };

  return (
    <span
      className={`${styles.container} ${styles[size]} ${interactive ? styles.interactive : ""}`}
    >
      {(interactive ? [1, 2, 3, 4, 5] : Array.from({ length: rounded }, (_, i) => i + 1)).map((star) => (
        <span
          key={star}
          className={`${styles.star} ${star > rounded ? styles.empty : ""}`}
          onClick={() => handleClick(star)}
          role={interactive ? "button" : undefined}
          aria-label={interactive ? `${star} tähteä` : undefined}
        >
          ★
        </span>
      ))}
    </span>
  );
}
