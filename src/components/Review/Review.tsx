import styles from "./review.module.css"
import { useHistory, Link } from "react-router-dom";
import { useCallback, useState } from "react";
import getData from "../../services/getData";

const Review: React.FC = ({ title } ) =>  {
    const [initialValues] = useState(getData());
    const history = useHistory();

    const onBack = useCallback(() => {
        history.goBack();
      }, [history]);

    return (
        <div className={styles.review}>
            <div className={styles.review__container}>
                <div className={styles.review__box}>
                    <h2 className={`${styles.review__title} ${styles.title}`}>{title}</h2>
                    <ul className={styles.review__list}>
                        {Object.entries(initialValues).map(([label, value]) => {
                            return (
                                <li key={label} className={`${styles.review__label} ${styles.label}`}>
                                    <b className={styles.prop__label}>{label}:</b>&nbsp;<span className={styles.prop__value}>{value}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <div className={styles.review__btnBox}>
                                <div className={styles.review__buttons}>
                                    <button className={styles.button} onClick={onBack}> Назад </button>
                                    <Link to="/blog"><button className={`${styles.review__toBlogPage} ${styles.button}`}>К блогу</button></Link>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}
  
export default Review