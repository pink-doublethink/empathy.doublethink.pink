import styles from "./corruption.module.css"
import { useHistory, useLocation } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useCallback, useState } from "react";
import getData from "../../services/getData";
import setData from "../../services/setData";
import TextField from "../../shared/TextField";


const Corruption: React.FC = ({ title } ) =>  {
    const history = useHistory();
    const location = useLocation();
    const [initialValues] = useState(getData());

    const onSubmit = useCallback(
        (values: any) => {
          setData(values);
          history.push({
            ...location,
            state: {
              activeStep: 2,
            },
          });
        },
        [history, location]
    );
    
      const onBack = useCallback(() => {
        history.goBack();
      }, [history]);
    return (
        <div className={styles.corruption}>
            <div className={styles.corruption__container}>
                <div className={styles.corruption__box}>
                    <h2 className={`${styles.corruption__title} ${styles.title}`}>Corruption Page</h2>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                            className={styles.field}
                            name="probCorruption"
                            component={TextField}
                            type="text"
                            label="The Problem of Corruption"
                            variant="outlined"
                            />
                            <Field
                            className={styles.field}
                            name="solCorruption"
                            component={TextField}
                            type="text"
                            label="The Solution to Corruption"
                            variant="outlined"
                            />
                            <div className={styles.corruption__btnBox}>
                                <div className={styles.corruption__buttons}>
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
  
export default Corruption