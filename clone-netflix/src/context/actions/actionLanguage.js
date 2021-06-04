import Spanish from "../../constants/Languege/Spanish";
import English from "../../constants/Languege/English";

const actionLanguage = (language) => {
  if (language === "Español") {
    return {
      type: "LANGUAGE",
      object: Spanish,
    };
  } else if (language === "English") {
    return {
      type: "LANGUAGE",
      object: English,
    };
  }
};

export default actionLanguage;
