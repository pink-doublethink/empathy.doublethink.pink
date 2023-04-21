import styles from "./contentArticles.module.css"
import { Link } from "react-router-dom"

const ContentArticles: React.FC = () =>  {
    return (
        <div className={styles.block}>
          <div className={styles.block__title}>
            <div className={styles.block__titleBox}>
              <div className={styles.block__titleConten}>
                Feature Posts
              </div>
              <div className={styles.block__subtitle}>
                Better than the Best
              </div>
            </div>
         </div>
          <div className={styles.block__box}>
          <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
                <div className={styles.block__imgBox}>
                <Link to="/blog/post-1"><img src="./Ex1.jpg" alt="" className={styles.block__img} /></Link>
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}><Link to="/blog/post-1">Expressa Vero In Iis Aetatibus, Quae Iam Confirmatae Sunt</Link></div>
                <div className={styles.block__detail}>
                  <div className={styles.block__date}>August 31, 2017</div>
                  <div className={styles.block__detailTag}>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Смех
                      </div>
                    </div>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Пиво
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.block__cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum pariatur, earum consequatur quibusdam atque temporibus cupiditate rem odio, illum enim repellendus quo a nulla maxime itaque asperiores? Minima, aut rem.</div>
              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
                <div className={styles.block__imgBox}>
                  <Link to="/blog/post-1"><img src="./Ex4.jpg" alt="" className={styles.block__img} /></Link>
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}><Link to="/blog/post-1">Tu Negas Fortem Esse Posse, Qui Dolorem Malum Putet</Link></div>
                <div className={styles.block__detail}>
                  <div className={styles.block__date}>August 31, 2017</div>
                  <div className={styles.block__detailTag}>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Смех
                      </div>
                    </div>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Пиво
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.block__cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum pariatur, earum consequatur quibusdam atque temporibus cupiditate rem odio, illum enim repellendus quo a nulla maxime itaque asperiores? Minima, aut rem.</div>
              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
                <div className={styles.block__imgBox}>
                  <Link to="/blog/post-1"><img src="./Ex3.jpg" alt="" className={styles.block__img} /></Link>
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}><Link to="/blog/post-1">Igitur Neque Beatus Neque Sapientium Non Beatus</Link></div>
                <div className={styles.block__detail}>
                  <div className={styles.block__date}>August 31, 2017</div>
                  <div className={styles.block__detailTag}>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Смех
                      </div>
                    </div>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Пиво
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.block__cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum pariatur, earum consequatur quibusdam atque temporibus cupiditate rem odio, illum enim repellendus quo a nulla maxime itaque asperiores? Minima, aut rem.</div>
              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
                <div className={styles.block__imgBox}>
                  <Link to="/blog/post-1"><img src="./Ex2.jpg" alt="" className={styles.block__img} /></Link>
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}><Link to="/blog/post-1">Как потушить пожар</Link></div>
                <div className={styles.block__detail}>
                  <div className={styles.block__date}>August 31, 2017</div>
                  <div className={styles.block__detailTag}>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Смех
                      </div>
                    </div>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Пиво
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.block__cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum pariatur, earum consequatur quibusdam atque temporibus cupiditate rem odio, illum enim repellendus quo a nulla maxime itaque asperiores? Minima, aut rem.</div>
              </div>
            </div>
          </div>
      </div>
    )
}
  
export default ContentArticles