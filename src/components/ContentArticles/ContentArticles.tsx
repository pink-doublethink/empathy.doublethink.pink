import styles from "./contentArticles.module.css"

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
                  <img src="./Ex1.jpg" alt="" className={styles.block__img} />
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}>Expressa Vero In Iis Aetatibus, Quae Iam Confirmatae Sunt</div>
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
                  <img src="./Ex4.jpg" alt="" className={styles.block__img} />
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}>Tu Negas Fortem Esse Posse, Qui Dolorem Malum Putet</div>
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
                  <img src="./Ex3.jpg" alt="" className={styles.block__img} />
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}>Igitur Neque Beatus Neque Sapientium Non Beatus</div>
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
                  <img src="./Ex2.jpg" alt="" className={styles.block__img} />
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}>Как потушить пожар</div>
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