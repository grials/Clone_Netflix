import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ROUTES from "../routert/rotues";

function useSingupPrePlane() {
  const language = useSelector((state) => state.language.SINGUP.singupPrePlane);

  const [languageState, setLanguageState] = useState(language);

  const history = useHistory();

  function reDirect() {
    history.push({
      pathname: ROUTES.SIGN_UP.PLAN_FORM,
    });
  }

  useEffect(() => {
    setLanguageState(language);
  }, [language]);

  return {
    languageState,
    reDirect,
  };
}

export default useSingupPrePlane;
