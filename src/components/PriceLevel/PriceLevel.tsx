import styles from "./PriceLevel.module.css";

interface PriceLevelProps {
  level: number;
}

export default function PriceLevel({ level }: PriceLevelProps) {
  return <span className={styles.price}>{"€".repeat(level)}</span>;
}
