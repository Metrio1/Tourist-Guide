import { useInView } from '../../hooks/useInView';
import styles from './PopularPlaces.module.scss';

export default function PopularPlaces() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className={styles.section}>
      <h2 className={`${styles.title} ${isInView ? styles.inView : ''}`}>
        Популярные места Челябинской области
      </h2>
      <ul className={`${styles.list} ${isInView ? styles.inView : ''}`}>
        <li className={styles.item}>
          <article className={styles.article}>
            <img className={styles.image} src="/images/places/taganay-preview.jpg" alt="Национальный парк Таганай" onError={(e) => e.currentTarget.src = '/images/fallback.jpg'} />
            <span className={styles.city}>Миасс</span>
            <span className={styles.place}>Таганай</span>
          </article>
        </li>
        <li className={styles.item}>
          <article className={styles.article}>
            <img className={styles.image} src="/images/places/kirovka-preview.jpg" alt="Кировка" onError={(e) => e.currentTarget.src = '/images/fallback.jpg'} />
            <span className={styles.city}>Челябинск</span>
            <span className={styles.place}>Кировка</span>
          </article>
        </li>
        <li className={styles.item}>
          <article className={styles.article}>
            <img className={styles.image} src="/images/places/ilmen-preview.jpg" alt="Ильменский заповедник" onError={(e) => e.currentTarget.src = '/images/fallback.jpg'} />
            <span className={styles.city}>Миасс</span>
            <span className={styles.place}>Ильменский заповедник</span>
          </article>
        </li>
        <li className={styles.item}>
          <article className={styles.article}>
            <img className={styles.image} src="/images/places/kyshtym-preview.jpg" alt="Кыштым" onError={(e) => e.currentTarget.src = '/images/fallback.jpg'} />
            <span className={styles.city}>Кыштым</span>
            <span className={styles.place}>Кыштымский замок</span>
          </article>
        </li>
        <li className={styles.item}>
          <article className={styles.article}>
            <img className={styles.image} src="/images/places/ignatevskaya-peschera-preview.jpg" alt="Игнатьевская пещера" onError={(e) => e.currentTarget.src = '/images/fallback.jpg'} />
            <span className={styles.city}>Сим</span>
            <span className={styles.place}>Игнатьевская пещера</span>
          </article>
        </li>
        <li className={styles.item}>
          <article className={styles.article}>
            <img className={styles.image} src="/images/places/turgoyak-preview.jpg" alt="Озеро Тургояк" onError={(e) => e.currentTarget.src = '/images/fallback.jpg'} />
            <span className={styles.city}>Миасс</span>
            <span className={styles.place}>Озеро Тургояк</span>
          </article>
        </li>
      </ul>
    </section>
  );
}
