import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ROUTES from "../routert/rotues";

function useSingupPayment() {
  const language = useSelector((state) => state.language.SINGUP.singupPayment);

  const history = useHistory();

  const [languageState, setLanguageState] = useState(language);
  useEffect(() => {
    setLanguageState(language);
  }, [language]);

  function reDirectPayment() {
    history.push({
      pathname: ROUTES.SIGN_UP.CARD_CREDIT,
    });
  }

  return {
    languageState,
    reDirectPayment,
  };
}

export default useSingupPayment;
