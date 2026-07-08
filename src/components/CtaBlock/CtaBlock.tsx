import styles from './CtaBlock.module.scss';

export default function CtaBlock() {
  return (
    <section className={styles.block} aria-label="Обратная связь">
      <p className={styles.text}>Не нашли то, что искали?</p>
      <a href="#contacts" className={styles.link}>
        Свяжитесь с нами
      </a>
    </section>
  );
}
