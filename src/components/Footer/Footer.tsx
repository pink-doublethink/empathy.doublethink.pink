import styles from "./footer.module.css"
import { Link } from "react-router-dom"
import S2 from "../../assets/icons/linkedin.png"

const Footer: React.FC = () =>  {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <div className={styles.footer__container}>
                    <div className={styles.footer__logo}>
                        <div className={styles.footer__div}>
                            <img src="./vite.svg" alt="Красивая логотипка об эмпатии" className={styles.footer__logotype} />
                        </div>
                    </div>
                    <div className={styles.footer__nav}>
                        <nav className={styles.footer__navItem}>
                            <ul className={styles.footer__ul}>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__a}>Туда</Link></li>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__a}>Сюда</Link></li>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__a}>Не туда</Link></li>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__a}>Контакты</Link></li>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__a}>Продажи</Link></li>
                            </ul>
                        </nav>
                        <div className={styles.footer__box}>
                        <ul className={styles.footer__icon}>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__svg}><img src={S2} alt="" className={styles.footer__svgContent} /></Link></li>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__svg}><img src={S2} alt="" className={styles.footer__svgContent} /></Link></li>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__svg}><img src={S2} alt="" className={styles.footer__svgContent} /></Link></li>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__svg}><img src={S2} alt="" className={styles.footer__svgContent} /></Link></li>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__svg}><img src={S2} alt="" className={styles.footer__svgContent} /></Link></li>
                                <li className={styles.footer__li}><Link to="/" className={styles.footer__svg}><img src={S2} alt="" className={styles.footer__svgContent} /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer__copyright}>
                <div className={styles.footer__container}>
                    <div className={styles.footer__info}>
                       <span className={styles.footer__span}></span> (C) Copyright 2023 - All Rights Reserved by <Link to="/" className={styles.footer__a}>Alexei Ovsyannikov</Link>
                    </div>
                </div>
            </div>
      </footer>
    )
}
  
export default Footer