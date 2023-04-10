import { QUIZ_DATA_KEY } from "../data/constants";

export default () => {
    sessionStorage.removeItem(QUIZ_DATA_KEY);
};