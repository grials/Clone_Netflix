import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionUserCreateCount } from "../context/actions/actionUser";
import ROUTES from "../routert/rotues";

function useRegFormSingupForm() {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const [ErrorInputEmail, setErrorInputEmail] = useState(false);
  const [ErrorInputPassword, setErrorInputPassword] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const [labelUsernameActive, setLabelUsernameActive] = useState(false);
  const [labelPasswordActive, setLabelPasswordActive] = useState(false);
  const [suscessEmail, setSuscessEmail] = useState(false);
  const [suscessPassword, setSuscessPassword] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setInputEmail(email);
    setLabelUsernameActive(true);
  }, [email]);

  useEffect(() => {
    if (inputEmail !== "" && !ErrorInputEmail) {
      setSuscessEmail(true);
    }
  }, [inputEmail, ErrorInputEmail]);

  useEffect(() => {
    if (inputPassword !== "" && !ErrorInputPassword) {
      setSuscessPassword(true);
    }
  }, [inputPassword, ErrorInputPassword]);

  function handleChangeSingupInputEmail(e) {
    setInputEmail(e.target.value);
    if (
      (e.target.value.match(
        /^[\w()<>\-,;:"[\]ç%&ñ]+@[a-z]+\.com\.?((net|[a-z])|com|gob)?\.?(com|net)?$/
      ) === null &&
        e.target.value.match(/^[0-9]+$/) === null) ||
      e.target.value.length <= 5
    ) {
      setErrorInputEmail(true);
    } else {
      setErrorInputEmail(false);
    }
  }

  function handleChangeSingupInputPassword(e) {
    setinputPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 60) {
      setErrorInputPassword(true);
    } else {
      setErrorInputPassword(false);
    }
  }

  function lostFocusInputEmail() {
    if (inputEmail === "") {
      setLabelUsernameActive(false);
    }
  }

  function lostFocusInputPassword() {
    if (inputPassword === "") {
      setLabelPasswordActive(false);
    }
  }

  function reDirect(e) {
    e.preventDefault();
    if (
      !ErrorInputEmail &&
      inputEmail !== "" &&
      !ErrorInputPassword &&
      inputPassword !== ""
    ) {
      dispatch(actionUserCreateCount(inputEmail, inputPassword));
      history.push({
        pathname: ROUTES.SIGN_UP.MAIN,
      });
    }
  }
  return {
    inputEmail,
    handleChangeSingupInputEmail,
    ErrorInputEmail,
    inputPassword,
    handleChangeSingupInputPassword,
    ErrorInputPassword,
    labelUsernameActive,
    setLabelUsernameActive,
    lostFocusInputEmail,
    labelPasswordActive,
    setLabelPasswordActive,
    lostFocusInputPassword,
    suscessEmail,
    suscessPassword,
    reDirect,
  };
}

export default useRegFormSingupForm;
