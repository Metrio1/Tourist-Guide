import type { Place } from '../../types/place';
import styles from './PlaceCard.module.scss';

const CATEGORY_LABELS: Record<Place['category'], string> = {
  nature: 'Природа',
  history: 'История',
  architecture: 'Архитектура',
};

interface PlaceCardProps {
  place: Place;
  featured?: boolean;
}

export default function PlaceCard({ place, featured = false }: PlaceCardProps) {
  const categoryLabel = CATEGORY_LABELS[place.category];

  return (
    <li className={`${styles.item} ${featured ? styles.featured : ''}`}>
      <article className={styles.card}>
        <img
          className={styles.image}
          src={place.images[0]}
          alt={place.title}
          onError={(e) => {
            e.currentTarget.src = '/images/fallback.jpg';
          }}
        />
        <div className={styles.body}>
          <span className={styles.category} aria-label={`Категория: ${categoryLabel}`}>
            {categoryLabel}
          </span>
          <h3 className={styles.title}>{place.title}</h3>
          <p className={styles.description}>{place.description}</p>
        </div>
      </article>
    </li>
  );
}
