import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useHome() {
  const language_context = useSelector((state) => state.language.HOME);
  const [languageHome, setlanguageHome] = useState(language_context);

  useEffect(() => {
    setlanguageHome(language_context);
  }, [language_context]);
  return languageHome;
}

export default useHome;
