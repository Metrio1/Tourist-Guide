import { useInView } from '../../hooks/useInView';
import styles from './About.module.scss';

export default function About() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className={styles.section} id="about">
      <div className={`${styles.overlay} ${isInView ? styles.inView : ''}`}></div>
      <div className={`${styles.content} ${isInView ? styles.inView : ''}`}>
        <div className={styles.accentLine} aria-hidden="true" />
        <p className={styles.text}>
          Челябинская область — это место, где Уральские горы встречаются со степью, а тайга соседствует со старинными купеческими городами. Здесь проходит граница Европы и Азии, а природа меняется каждые несколько десятков километров: от скалистых хребтов Таганая до спокойной глади озера Тургояк.
        </p>
        <p className={styles.text}>
          У региона богатая торговая история — именно поэтому на гербе Челябинской области изображён верблюд. В XVIII веке через эти земли проходили караванные пути из Средней Азии, и с тех пор верблюд остаётся неожиданным, но узнаваемым символом области.
        </p>
        <p className={styles.text}>
          Мы собрали маршруты, которые помогут увидеть Южный Урал таким, какой он есть — с его контрастами, историей и характером.
        </p>
      </div>
    </section>
  );
}
