import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function useRegistration() {
  const language = useSelector((state) => state.language.SINGUP.registration);
  const [languageRegistration, setLanguageRegistration] = useState(language);

  useEffect(() => {
    setLanguageRegistration(language);
  }, [language]);

  return languageRegistration;
}

export default useRegistration;
