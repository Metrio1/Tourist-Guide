import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${location.pathname === '/places' ? styles.placesPage : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={() => window.scrollTo(0, 0)}>
          УРАЛ. ГИД
        </Link>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <NavLink 
                to="/" 
                className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}
                end
                onClick={() => window.scrollTo(0, 0)}
              >Главная
              </NavLink>
            </li>
            <li className={styles.navListItem}>
              <NavLink 
                to="/places" 
                className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}
                end
              >Места
              </NavLink>
            </li>
            <li>
              <a href="#about" className={styles.link}>
                О регионе
              </a>
            </li>
            <li>
              <a href="#contacts" className={styles.link}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
