import { useState } from 'react';
import styles from './PageHero.module.scss';

interface PageHeroProps {
  backgroundImage?: string;
}

const DEFAULT_BG = '/images/places-hero-bg.jpg';
const FALLBACK_BG = '/images/fallback.jpg';

export default function PageHero({ backgroundImage = DEFAULT_BG }: PageHeroProps) {
  const [bgSrc, setBgSrc] = useState(backgroundImage);

  return (
    <section className={styles.hero} aria-label="Заголовок страницы">
      <img
        className={styles.bgImage}
        src={bgSrc}
        alt=""
        aria-hidden="true"
        onError={() => setBgSrc(FALLBACK_BG)}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Все места Челябинской области</h1>
        <p className={styles.subtitle}>8 маршрутов — от гор бронзового века до горных озёр</p>
      </div>
    </section>
  );
}
