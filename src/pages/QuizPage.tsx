import {Cancel, Corruption, Cruelty, Indifference, Responsibility, Review} from "../components/"
import { useLocation } from "react-router-dom";

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
  const { state = { activeStep: 0 } } = useLocation();

  const tab = TABS[state.activeStep];

  return (
    <>
    
      {tab && <tab.component />}
    </>
  )
}

export default QuizPage