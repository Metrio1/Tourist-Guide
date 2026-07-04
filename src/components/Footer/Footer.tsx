import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.container}>
        <section aria-label="Контакная информация">
          <h2 className={styles.title}>Контакты</h2>
          <ul className={styles.contactList}>
            <li>
              <a href="tel:+79991234567" className={styles.link}>
                +7 (999) 123-45-67
                </a>
            </li>
            <li>
              <a href="mailto:info@touristguide.ru">
                info@touristguide.ru
              </a>
            </li>
            <li>
              <a 
                href="https://chelmap.ru" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                Официальный туристический портал Челябинской области
              </a>
            </li>
          </ul>
        </section>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Урал.Гид — путеводитель по Челябинской области
        </p>
      </div>
    </footer>
  );
}