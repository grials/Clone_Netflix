import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function useSingupPrePlane() {
  const language = useSelector((state) => state.language.SINGUP.singupPlanForm);

  const [languageState, setLanguageState] = useState(language);

  useEffect(() => {
    setLanguageState(language);
  }, [language]);

  return languageState;
}

export default useSingupPrePlane;
