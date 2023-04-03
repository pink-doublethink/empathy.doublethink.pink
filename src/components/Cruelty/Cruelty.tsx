import styles from "cruelty.module.css"

const Cruelty: React.FC = () =>  {
    return (
        <div className={styles.cruelty}>
            <div className={styles.cruelty__container}>
                <div className={styles.cruelty__box}>
                    <h2 className={`${styles.cruelty__title} ${styles.title}`}>Cruelty Page</h2>
                </div>
            </div>
        </div>
    )
}
  
export default Cruelty