import styles from "./header.module.css"
import { Link } from "react-router-dom"

const Header: React.FC = () =>  {
    return (
        <header className={styles.block}>
        <div className={styles.block__container}>
          <div className={styles.block__logo}>
                <img src="./vite.svg" alt="Красивая логотипка об эмпатии" className={styles.block__logo} />
          </div>
          <nav className={styles.block__nav}>
            <ul className={styles.block__ul}>
                <li className={styles.block__li}><Link to="/" className={styles.block__a}>Туда</Link></li>
                <li className={styles.block__li}><Link to="/" className={styles.block__a}>Сюда</Link></li>
                <li className={styles.block__li}><Link to="/" className={styles.block__a}>Не туда</Link></li>
                <li className={styles.block__li}><Link to="/" className={styles.block__a}>Контакты</Link></li>
                <li className={styles.block__li}><Link to="/" className={styles.block__a}>Продажи</Link></li>
                <li className={styles.block__li}><Link to="/" className={styles.block__a}>НАйм</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}
  
export default Header