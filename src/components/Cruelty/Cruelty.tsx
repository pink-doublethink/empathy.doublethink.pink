import styles from "./cruelty.module.css"
import { useHistory, useLocation } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useCallback, useState } from "react";
import getData from "../../services/getData";
import setData from "../../services/setData";
import TextField from "../../shared/TextField";

const Cruelty: React.FC = ({ title } ) =>  {
    const history = useHistory();
    const location = useLocation();
    const [initialValues] = useState(getData());

    const onSubmit = useCallback(
        (values: any) => {
          setData(values);
          history.push({
            ...location,
            state: {
              activeStep: 3,
            },
          });
        },
        [history, location]
    );
    
      const onBack = useCallback(() => {
        history.goBack();
      }, [history]);

    return (
        <div className={styles.cruelty}>
            <div className={styles.cruelty__container}>
                <div className={styles.cruelty__box}>
                    <h2 className={`${styles.cruelty__title} ${styles.title}`}>Cruelty Page</h2>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                            className={styles.field}
                            name="probCruelty"
                            component={TextField}
                            type="text"
                            label="The Problem of Cruelty"
                            variant="outlined"
                            />
                            <Field
                            className={styles.field}
                            name="solCruelty"
                            component={TextField}
                            type="text"
                            label="The Solution to Cruelty"
                            variant="outlined"
                            />
                            <div className={styles.cruelty__btnBox}>
                                <div className={styles.buttons}>
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
  
export default Cruelty