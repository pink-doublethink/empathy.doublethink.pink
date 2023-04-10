import { useEffect } from "react";
import {Cancel, Corruption, Cruelty, Indifference, Responsibility, Review} from "../components/"
import { useLocation } from "react-router-dom";
import clearData from "../services/clearData";
import {Helmet} from "react-helmet";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const TABS = [
  {
    component: Cancel,
    title: "Cancel Quiz",
  },
  {
    component: Corruption,
    title: "Corruption Quiz",
  },
  {
    component: Cruelty,
    title: "Cruelty Quiz",
  },
  {
    component: Indifference,
    title: "Indifference Quiz",
  },
  {
    component: Responsibility,
    title: "Responsibility Quiz",
  },
  {
    component: Review,
    title: "Quiz Review",
  },
];

const QuizPage: React.FC = () => {
  const { state = { activeStep: 0 } } = useLocation<any>();

  const tab = TABS[state.activeStep];

  useEffect(() => {
    return () => {
      clearData();
    };
  }, []);

  return (
    <>
    { <tab.component />}
      {/* <div>
        <h1>Stepper</h1>
        <Stepper activeStep={state.activeStep}>
          {TABS.map(({ title }) => {
            return (
              <Step key={title}>
                <StepLabel>{title}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {tab && <tab.component />}
      </div> */}
    </>
  )
}

export default QuizPage

