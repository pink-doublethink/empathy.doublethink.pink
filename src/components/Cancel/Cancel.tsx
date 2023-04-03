import styles from "./cancel.module.css"
import { useHistory, useLocation } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useCallback, useState } from "react";
import getData from "../../services/getData";
import setData from "../../services/setData";
import TextField from "../../shared/TextField";
import Button from "@material-ui/core/Button";

const Cancel: React.FC = ({ title } ) =>  {
    const history = useHistory();
    const location = useLocation();
    const [initialValues] = useState(getData());

    const onSubmit = useCallback(
        (values: any) => {
          setData(values);
          history.push({
            ...location,
            state: {
              activeStep: 1,
            },
          });
        },
        [history, location]
    );
    return (
        <div className={styles.cancel}>
            <div className={styles.cancel__container}>
                <div className={styles.cancel__box}>
                    <h2 className={`${styles.cancel__title} ${styles.title}`}>Cancel Page</h2>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                            className={styles.field}
                            name="problCancelCulture"
                            component={TextField}
                            type="text"
                            label="The Problem Cancel Culture"
                            variant="outlined"
                            />
                            <Field
                            className={styles.field}
                            name="solCancelCulture"
                            component={TextField}
                            type="text"
                            label="Solution Cancel Culture"
                            variant="outlined"
                            />
                            <div className="buttons">
                            <Button variant="contained" color="primary" type="submit">
                                Next
                            </Button>
                            </div>
                        </form>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
  
export default Cancel