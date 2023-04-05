import styles from "./indifference.module.css"
import { useHistory, useLocation } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useCallback, useState } from "react";
import getData from "../../services/getData";
import setData from "../../services/setData";
import TextField from "../../shared/TextField";

const Indifference: React.FC = ({ title } ) =>  {
    const history = useHistory();
    const location = useLocation();
    const [initialValues] = useState(getData());

    const onSubmit = useCallback(
        (values: any) => {
          setData(values);
          history.push({
            ...location,
            state: {
              activeStep: 4,
            },
          });
        },
        [history, location]
    );
    
      const onBack = useCallback(() => {
        history.goBack();
      }, [history]);

    return (
        <div className={styles.indifference}>
            <div className={styles.indifference__container}>
                <div className={styles.indifference__box}>
                    <h2 className={`${styles.indifference__title} ${styles.title}`}>Indifference Page</h2>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                            className={styles.field}
                            name="probIndifference"
                            component={TextField}
                            type="text"
                            label="The Problem of Indifference"
                            variant="outlined"
                            />
                            <Field
                            className={styles.field}
                            name="solIndifference"
                            component={TextField}
                            type="text"
                            label="Solution  of Indifference"
                            variant="outlined"
                            />
                            <div className={styles.indifference__btnBox}>
                                <div className={styles.indifference__buttons}>
                                    <button className={styles.button} onClick={onBack}> Назад </button>
                                    <button className={styles.button} onClick={onSubmit}> Далее </button>
                                </div>
                            </div>
                        </form>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default Indifference