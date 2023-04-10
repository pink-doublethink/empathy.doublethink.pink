import { QUIZ_DATA_KEY } from "../data/constants";

export default () => {
    const rawFormData = sessionStorage.getItem(QUIZ_DATA_KEY);
  
    if (!rawFormData) {
      return [];
    }
  
    return JSON.parse(rawFormData);
  };