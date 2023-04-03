import styles from "./responsibility.module.css"

const Responsibility: React.FC = () =>  {
    return (
        <div className={styles.responsibility}>
            <div className={styles.responsibility__container}>
                <div className={styles.responsibility__box}>
                    <h2 className={`${styles.responsibility__title} ${styles.title}`}>Responsibility Page</h2>
                </div>
            </div>
        </div>
    )
}

export default Responsibility