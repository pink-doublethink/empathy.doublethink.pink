import styles from "./home.module.css"
import { Link } from "react-router-dom"

const Home: React.FC = () =>  {
    return (
        <div className={styles.home}>
        <div className={styles.home__container}>
          <div className={styles.home__callToAction}>
          <Link to="/blog"><div className={`${styles.home__toBlogPage} ${styles.button}`}>К блогу</div></Link>
          <Link to="/quiz"><div className={`${styles.home__toQuizPage} ${styles.button}`}>Пройти опрос</div></Link>
          </div>
        </div>
      </div>
    )
}
  
export default Home