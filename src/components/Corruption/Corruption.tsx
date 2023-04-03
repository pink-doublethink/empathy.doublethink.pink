import styles from "corruption.module.css"

const Corruption: React.FC = () =>  {
    return (
        <div className={styles.corruption}>
            <div className={styles.corruption__container}>
                <div className={styles.corruption__box}>
                    <h2 className={`${styles.corruption__title} ${styles.title}`}>Corruption Page</h2>
                </div>
            </div>
        </div>
    )
}
  
export default Corruption