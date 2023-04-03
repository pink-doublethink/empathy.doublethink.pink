import styles from "./home.module.css"

const Review: React.FC = () =>  {
    return (
        <div className={styles.review}>
            <div className={styles.review__container}>
                <div className={styles.review__box}>
                    <h2 className={`${styles.review__title} ${styles.title}`}>Review Page</h2>
                </div>
            </div>
        </div>
    )
}
  
export default Review