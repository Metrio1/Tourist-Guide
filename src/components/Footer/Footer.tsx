import styles from './Footer.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handlePlacesClick = () => {
    navigate('/places');
    window.scrollTo(0, 0);
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('about');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.footerContainer}>
        <div className={styles.topRow}>
          <div className={styles.brandColumn}>
            <a href="/" onClick={(e) => { e.preventDefault(); handleHomeClick(); }} className={styles.footerLogo}>Урал.Гид</a>
            <p className={styles.tagline}>Путеводитель по Челябинской области</p>
          </div>

          <nav aria-label="Навигация в футере">
            <h2 className={styles.sectionTitle}>Навигация</h2>
            <ul className={styles.linkList}>
              <li><button onClick={handleHomeClick} className={styles.link}>Главная</button></li>
              <li><button onClick={handlePlacesClick} className={styles.link}>Места</button></li>
              <li><a href="#about" onClick={handleAboutClick} className={styles.link}>О регионе</a></li>
            </ul>
          </nav>

          <section aria-labelledby="contacts-heading">
            <h2 id="contacts-heading" className={styles.sectionTitle}>Контакты</h2>
            <ul className={styles.linkList}>
              <li><a href="tel:+73512638877" className={styles.link}>+7 (351) 263-88-77</a></li>
              <li><a href="mailto:info@ural-guide.ru" className={styles.link}>info@ural-guide.ru</a></li>
              <li><a href="https://chelmap.ru" target="_blank" rel="noopener noreferrer" className={styles.link}>Туристический портал области</a></li>
            </ul>
          </section>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>&copy; 2026 Урал.Гид</p>
          <p className={styles.disclaimer}>Тестовый проект, не является коммерческим сервисом</p>
        </div>
      </div>
    </footer>
  );
}