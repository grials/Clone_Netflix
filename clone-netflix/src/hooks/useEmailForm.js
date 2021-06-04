import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ROUTES from "../routert/rotues";
import { actionUserStart } from "../context/actions/actionUser";

function useEmailForm() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [inputEmail, setInputEmail] = useState("");
  const [errorInputEmail, setErrorInputEmail] = useState(false);
  const [lableEmailActive, setLableEmailActive] = useState(false);

  function handleChangeEmailForm(e) {
    setInputEmail(e.target.value);
    if (
      e.target.value.match(
        /^[\w()<>\-,;:"[\]ç%&ñ]+@[a-z]+\.com\.?((net|[a-z])|com|gob)?\.?(com|net)?$/
      ) === null
    ) {
      setErrorInputEmail(true);
    } else {
      setErrorInputEmail(false);
    }
  }

  function lostFocusInputEmailForm() {
    if (inputEmail === "") {
      setLableEmailActive(false);
    }
  }

  function redirectSingup() {
    if (!errorInputEmail && inputEmail !== "") {
      dispatch(actionUserStart(inputEmail));
      history.push({
        pathname: ROUTES.SIGN_UP.REGISTRATION,
      });
    } else {
      setErrorInputEmail(true);
    }
  }

  return {
    inputEmail,
    errorInputEmail,
    lableEmailActive,
    setLableEmailActive,
    handleChangeEmailForm,
    lostFocusInputEmailForm,
    redirectSingup,
  };
}

export default useEmailForm;
