import styles from "./cancel.module.css"

const Cancel: React.FC = () =>  {
    return (
        <div className={styles.cancel}>
            <div className={styles.cancel__container}>
                <div className={styles.cancel__box}>
                    <h2 className={`${styles.cancel__title} ${styles.title}`}>Cancel Page</h2>
                </div>
            </div>
        </div>
    )
}
  
export default Cancel