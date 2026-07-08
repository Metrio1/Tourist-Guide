import styles from './Hero.module.scss';
import Button from '../Button/Button';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h1>
                        <span className={`${styles.heroTitlePrimary} ${styles.animateIn} ${styles.animateInDelay1}`}>Уникальные маршруты по Челябинской области </span>
                        <span className={`${styles.heroTitleSecondary} ${styles.animateIn} ${styles.animateInDelay2}`}>Для тех, кто ищет не только красивые виды, но и настоящие истории</span>
                    </h1>
                    <div className={`${styles.animateIn} ${styles.animateInDelay3}`}>
                        <Button href="#places" variant="primary" size="large">
                            Смотреть маршруты
                        </Button>
                    </div>
                </div>
                <div className={styles.heroImageSide}>
                    <img
                        src="/images/hero/verblud10.png"
                        alt="Camel"
                        className={`${styles.heroCamel} ${styles.animateInRight}`}
                    />
                </div>
            </div>
        </section>
    )
}
