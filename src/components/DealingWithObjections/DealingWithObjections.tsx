import styles from "./dealingWithObjections.module.css"
import Card_1 from "../../assets/img/Ex1.jpg"
import Card_2 from "../../assets/img/Ex2.jpg"
import Card_3 from "../../assets/img/Ex3.jpg"
import Card_4 from "../../assets/img/Ex4.jpg"
import Card_5 from "../../assets/img/Ex5.png"
import Card_6 from "../../assets/img/Ex6.jpg"


const DealingWithObjections: React.FC = () =>  {
    return (
        <div className={styles.block}>
          <div className={styles.block__box}>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
                <div className={styles.block__imgBox}>
                  <img src="./Ex1.jpg" alt="" className={styles.block__img} />
                </div>
              </div>
              <div className={styles.block__cardBottom}>

              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
                <div className={styles.block__imgBox}>
                    <img src='Ex2.jpg' alt="" className={styles.block__img} />
                </div>
              </div>
              <div className={styles.block__cardBottom}>

              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
              <div className={styles.block__imgBox}>
                    <img src='Ex3.jpg' alt="" className={styles.block__img} />
                </div>
              </div>
              <div className={styles.block__cardBottom}>
                3
              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
              <div className={styles.block__imgBox}>
                    <img src='Ex4.jpg' alt="" className={styles.block__img} />
                </div>
              </div>
              <div className={styles.block__cardBottom}>

              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
              <div className={styles.block__imgBox}>
                    <img src='Ex5.png' alt="" className={styles.block__img} />
                </div>
              </div>
              <div className={styles.block__cardBottom}>

              </div>
            </div>
            <div className={styles.block__boxCard}>
              <div className={styles.block__cardTop}>
              <div className={styles.block__imgBox}>
                    <img src='Ex6.jpg' alt="" className={styles.block__img} />
                </div>
              </div>
              <div className={styles.block__cardBottom}>

              </div>
            </div>
          </div>
      </div>
    )
}
  
export default DealingWithObjections