import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useSingin() {
  const language = useSelector((state) => state.language.SINGIN);
  const [minWidth, setMinWidth] = useState(false);
  const [languageState, setLanguageState] = useState(language);

  useEffect(() => {
    if (window.innerWidth >= 750) {
      setMinWidth(true);
    }
    const listenerWindow = ({ target }) => {
      if (target.innerWidth >= 750) {
        setMinWidth(true);
      } else {
        setMinWidth(false);
      }
    };
    window.addEventListener("resize", listenerWindow);
    return () => {
      window.removeEventListener("resize", listenerWindow);
    };
  });
  useEffect(() => {
    setLanguageState(language);
  }, [language]);

  return {
    languageState,
    minWidth,
  };
}

export default useSingin;
