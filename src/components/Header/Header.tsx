import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Урал. Гид
        </Link>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <NavLink 
                to="/" 
                className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}
              end
              >Home
              </NavLink>
            </li>
            <li className={styles.navListItem}>
              <NavLink 
                to="/places" 
                className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}
                end
              >Places
              </NavLink>
            </li>
            <li>
              <a href="#about" className={styles.navLink}>
                О регионе
              </a>
            </li>
            <li>
              <a href="#contacts" className={styles.navLink}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
