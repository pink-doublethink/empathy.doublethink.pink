import styles from "./responsibility.module.css"
import { useHistory, useLocation } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useCallback, useState } from "react";
import getData from "../../services/getData";
import setData from "../../services/setData";
import TextField from "../../shared/TextField";

const Responsibility: React.FC = ({ title } ) =>  {
    const history = useHistory();
    const location = useLocation();
    const [initialValues] = useState(getData());

    const onSubmit = useCallback(
        (values: any) => {
          setData(values);
          history.push({
            ...location,
            state: {
              activeStep: 5,
            },
          });
        },
        [history, location]
    );
    
      const onBack = useCallback(() => {
        history.goBack();
      }, [history]);

    return (
        <div className={styles.responsibility}>
            <div className={styles.responsibility__container}>
                <div className={styles.responsibility__box}>
                    <h2 className={`${styles.responsibility__title} ${styles.title}`}>Responsibility Page</h2>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                            className={styles.field}
                            name="probResponsibility"
                            component={TextField}
                            type="text"
                            label="The Problem of Responsibility"
                            variant="outlined"
                            />
                            <Field
                            className={styles.field}
                            name="probResponsibility"
                            component={TextField}
                            type="text"
                            label="The Solution to Responsibility"
                            variant="outlined"
                            />
                            <div className={styles.responsibility__btnBox}>
                                <div className={styles.responsibility__buttons}>
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

export default Responsibility