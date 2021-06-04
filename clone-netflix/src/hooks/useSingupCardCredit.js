import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useSingupCardCredit() {
  const language = useSelector(
    (state) => state.language.SINGUP.singupCardCredit
  );

  const [languageState, setLanguageState] = useState(language);
  useEffect(() => {
    setLanguageState(language);
  }, [language]);

  return {
    languageState,
  };
}

export default useSingupCardCredit;
