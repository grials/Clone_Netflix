import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function useRegFormSingup() {
  const language = useSelector((state) => state.language.SINGUP.regForm);
  const [languageRegForm, setLanguageRegForm] = useState(language);

  useEffect(() => {
    setLanguageRegForm(language);
  }, [language]);
  return languageRegForm;
}

export default useRegFormSingup;
