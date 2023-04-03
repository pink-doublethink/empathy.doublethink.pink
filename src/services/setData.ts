import { QUIZ_DATA_KEY } from "../data/constants";

export default (formData: any) => {
    sessionStorage.setItem(QUIZ_DATA_KEY , JSON.stringify(formData));
};