import styles from './Hero.module.scss';
import verblud from '../../assets/hero/verblud.png';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h1>
                        <span className={styles.heroTitlePrimary}>Уникальные маршруты по Челябинской области </span>
                        <span className={styles.heroTitleSecondary}>Для тех, кто ищет не только красивые виды, но и настоящие истории</span>
                    </h1>
                </div>
                <div className={styles.heroImageSide}>
                    <img 
                        src={verblud} 
                        alt="Camel" 
                        className={styles.heroCamel}
                    />
                </div>
            </div>
        </section>
    )
}
