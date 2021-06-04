import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useBrowse() {
  const language = useSelector((state) => state.language.BROWSE);

  const [languageState, setLanguageState] = useState(language);

  useEffect(() => {
    setLanguageState(language);
  }, [language]);

  return {
    languageState,
  };
}

export default useBrowse;
