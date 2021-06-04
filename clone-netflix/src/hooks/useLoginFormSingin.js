import { useState } from "react";
import ROUTES from "../routert/rotues";
import { useHistory } from "react-router-dom";
import nameLocalStorage from "../constants/API/nameLocalStorage";

function useLoginFormSingin() {
  const history = useHistory();

  const [ErrorInputEmail, setErrorInputEmail] = useState(false);
  const [ErrorInputPassword, setErrorInputPassword] = useState(false);
  const [changeInputPassword, setChangeInputPassword] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const [labelUsernameActive, setLabelUsernameActive] = useState(false);
  const [labelPasswordActive, setLabelPasswordActive] = useState(false);
  const [errorEmailInvalid, setErrorEmailInvalid] = useState(false);
  const [errorPasswordInvalid, setErrorPasswordInvalid] = useState(false);

  async function loginFormSinginSubmit(e) {
    e.preventDefault();
    let { auth, email, password, token } = await authUserSingIn(
      e,
      ROUTES.AUTH.AUTH_USER
    );

    if (auth && email && password) {
      window.localStorage.setItem(nameLocalStorage.token, token);
      history.push({
        pathname: ROUTES.BROWSE,
      });
    } else {
      if (!email) {
        setErrorEmailInvalid(true);
        setTimeout(() => {
          setErrorEmailInvalid(false);
        }, 2000);
      }
      if (!password) {
        setErrorPasswordInvalid(true);
        setTimeout(() => {
          setErrorPasswordInvalid(false);
        }, 2000);
      }
    }
  }
  function handleChangeSinginInputEmail(e) {
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

  function handleChangeSinginInputPassword(e) {
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

  return {
    loginFormSinginSubmit,
    inputEmail,
    errorEmailInvalid,
    handleChangeSinginInputEmail,
    ErrorInputEmail,
    errorPasswordInvalid,
    changeInputPassword,
    inputPassword,
    handleChangeSinginInputPassword,
    setChangeInputPassword,
    ErrorInputPassword,
    labelUsernameActive,
    setLabelUsernameActive,
    lostFocusInputEmail,
    labelPasswordActive,
    setLabelPasswordActive,
    lostFocusInputPassword,
  };
}

async function authUserSingIn(e, url) {
  let email = e.target
    .querySelector(".loginFormSinginUsername")
    .querySelector("#emailSingin").value;
  let password = e.target
    .querySelector(".loginFormSinginPassword")
    .querySelector("#passwordSingin").value;
  let data = {
    email,
    password,
  };
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT.DELETE;POST,OPTIONS",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    },
  });
  let json = await response.json();
  return json;
}

export default useLoginFormSingin;
