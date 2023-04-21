import styles from "./dealingWithObjections.module.css"
import { Link } from "react-router-dom"

const DealingWithObjections: React.FC = () =>  {
    return (
        <div className={styles.block}>
          <div className={styles.block__box}>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
                <div className={styles.block__imgBox}>
                  <Link to="/blog/post-1"><img src="./Ex1.jpg" alt="" className={styles.block__img} /></Link>
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
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
                <div className={styles.block__imgBox}>
                    <Link to="/blog/post-1"><img src='Ex2.jpg' alt="" className={styles.block__img} /></Link>
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}><Link to="/blog/post-1">ЖИЛИ БЫЛИ СТАРИК СО СТАРУХОЙ</Link></div>
                <div className={styles.block__detail}>
                  <div className={styles.block__date}>August 31, 2017</div>
                  <div className={styles.block__detailTag}>
                      <div className={styles.block__tagBox}>
                        <div className={styles.block__tagContent}>
                          Радость
                        </div>
                      </div>
                      <div className={styles.block__tagBox}>
                        <div className={styles.block__tagContent}>
                          Желание
                        </div>
                      </div>
                  </div>
                </div>
                <div className={styles.block__cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem voluptas praesentium earum incidunt quas quisquam ducimus. Delectus dolore hic, cum, impedit at architecto ullam facere accusamus, unde quaerat quidem!</div>
              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
              <div className={styles.block__imgBox}>
                    <Link to="/blog/post-1"><img src='Ex3.jpg' alt="" className={styles.block__img} /></Link>
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}><Link to="/blog/post-1">Если бы да кабы в рту росли грибы</Link></div>
                <div className={styles.block__detail}>
                  <div className={styles.block__date}>August 31, 2017</div>
                  <div className={styles.block__detailTag}>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Горе
                      </div>
                    </div>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Кислород
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.block__cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam praesentium, nam necessitatibus fugiat temporibus laudantium hic quos consequuntur, saepe magnam perferendis, culpa recusandae ipsa rem exercitationem aliquam quae dolorum!</div>
              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
              <div className={styles.block__imgBox}>
                    <Link to="/blog/post-1"><img src='Ex4.jpg' alt="" className={styles.block__img} /></Link>
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}><Link to="/blog/post-1">ОЧЕНь дилнный пример текста только ради проверки формы</Link></div>
                <div className={styles.block__detail}>
                  <div className={styles.block__date}>August 31, 2017</div>
                  <div className={styles.block__detailTag}>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Ярость
                      </div>
                    </div>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Россия
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.block__cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel enim dolorem quod doloremque sapiente, asperiores iure quia et cum commodi aperiam dignissimos. Sit nobis laboriosam enim laudantium assumenda unde magnam!</div>
              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
              <div className={styles.block__imgBox}>
                    <Link to="/blog/post-1"><img src='Ex3.jpg' alt="" className={styles.block__img} /></Link>
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}><Link to="/blog/post-1"></Link>Cuius Fuit, Mihi Videtur Inanitas Ista Verborum</div>
                <div className={styles.block__detail}>
                  <div className={styles.block__date}>August 31, 2017</div>
                  <div className={styles.block__detailTag}>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Испания
                      </div>
                    </div>
                    <div className={styles.block__tagBox}>
                      <div className={styles.block__tagContent}>
                        Солнце
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.block__cardText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, at fugiat! Ipsum quisquam, sapiente dolores assumenda voluptate modi dolorum ex vitae dignissimos quidem laborum reprehenderit necessitatibus aut possimus adipisci consectetur.</div>
              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
              <div className={styles.block__imgBox}>
                    <Link to="/blog/post-1"><img src='Ex6.jpg' alt="" className={styles.block__img} /></Link>
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                <div className={styles.block__cardTitle}><Link to="/blog/post-1">Едва ли спасут летящего на смерть</Link></div>
                <div className={styles.block__detail}>
                  <div className={styles.block__date}>August 31, 2017</div>
                  <div className={styles.block__detailTag}>
                      <div className={styles.block__tagBox}>
                        <div className={styles.block__tagContent}>
                          Япония
                        </div>
                      </div>
                      <div className={styles.block__tagBox}>
                        <div className={styles.block__tagContent}>
                          Мифы
                        </div>
                      </div>
                  </div>
                </div>
                <div className={styles.block__cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ratione tempora temporibus aliquid et. Placeat necessitatibus voluptatibus debitis dolores corporis adipisci, deserunt enim illum distinctio, dolorum eaque a consequatur quia.</div>
              </div>
            </div>
          </div>
      </div>
    )
}
  
export default DealingWithObjections