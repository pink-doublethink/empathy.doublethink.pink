import styles from "./recomendations.module.css"

const Recomendations: React.FC = () =>  {
    return (
      <div className={styles.block}>
          <div className={styles.block__title}>
            <div className={styles.block__titleBox}>
              <div className={styles.block__titleConten}>
              Saara Shop
              </div>
              <div className={styles.block__subtitle}>
              All in One
              </div>
            </div>
        </div>
          <div className={styles.block__box}>
            <div className="block__boxs">
                <div className="block__top">
                <div className="block__topCont">
                  <div className="block__topCont">

                  </div>
                </div>
              </div>
              <div className="block__bottom">
                <div className="block__bottomCont">
                  
                </div>
                </div>
              </div>
          </div>
      </div>
    )
}
  
export default Recomendations