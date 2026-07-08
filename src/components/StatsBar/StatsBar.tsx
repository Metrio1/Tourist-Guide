import type { Place } from '../../types/place';
import styles from './StatsBar.module.scss';

interface StatsBarProps {
  places: Place[];
}

export default function StatsBar({ places }: StatsBarProps) {
  const placesCount = places.length;
  const categoriesCount = new Set(places.map((p) => p.category)).size;
  const photosCount = places.reduce((sum, place) => sum + place.images.length, 0);

  const stats = [
    { value: placesCount, label: 'мест' },
    { value: categoriesCount, label: 'категорий' },
    { value: photosCount, label: 'фотографий' },
  ];

  return (
    <section className={styles.bar} aria-label="Статистика">
      <ul className={styles.list}>
        {stats.map((stat, index) => (
          <li
            key={stat.label}
            className={`${styles.item} ${index > 0 ? styles.withDivider : ''}`}
          >
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
