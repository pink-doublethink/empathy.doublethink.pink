import styles from "./indifference.module.css"

const Indifference: React.FC = () =>  {
    return (
        <div className={styles.indifference}>
            <div className={styles.indifference__container}>
                <div className={styles.indifference__box}>
                    <h2 className={`${styles.indifference__title} ${styles.title}`}>Indifference Page</h2>
                </div>
            </div>
        </div>
    )
}

export default Indifference