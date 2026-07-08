import { useState } from 'react';
import { places } from '../../data/places';
import type { Place } from '../../types/place';
import { useInView } from '../../hooks/useInView';
import PageHero from '../../components/PageHero/PageHero';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import styles from './PlacesPage.module.scss';

type FilterCategory = 'all' | Place['category'];

const FILTERS: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'nature', label: 'Природа' },
  { value: 'history', label: 'История' },
  { value: 'architecture', label: 'Архитектура' },
];

export default function PlacesPage() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const { ref, isInView } = useInView<HTMLElement>();

  const filteredPlaces = places.filter(
    (place) => filter === 'all' || place.category === filter,
  );

  return (
    <>
      <PageHero />

      <div className={styles.layout}>
        <aside className={styles.filters} aria-label="Категории">
          <h2 className={styles.filtersTitle}>Категории</h2>
          <ul className={styles.filtersList}>
            {FILTERS.map(({ value, label }) => (
              <li key={value}>
                <button
                  type="button"
                  className={`${styles.filterButton} ${filter === value ? styles.filterButtonActive : ''}`}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section ref={ref} className={styles.gridSection} aria-label="Список мест">
          <ul className={`${styles.grid} ${isInView ? styles.inView : ''}`}>
            {filteredPlaces.map((place, index) => (
              <PlaceCard key={place.id} place={place} featured={index === 0} />
            ))}
          </ul>
        </section>
      </div>

      <CtaBlock />
    </>
  );
}
