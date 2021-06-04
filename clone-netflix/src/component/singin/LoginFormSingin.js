import React from "react";
import { Link } from "react-router-dom";
import useLoginFormSingin from "../../hooks/useLoginFormSingin";
import ROUTES from "../../routert/rotues";
import "./styleLoginFormSingin.scss";

function LoginFormSingin({
  textButton,
  textFormUsername,
  textFormUsernameError,
  textFormUsernameInvalid,
  textFormPassword,
  textFormPasswordError,
  textFormPasswordInvalid,
  textChangeInputPassword,
  textCheckBox,
  textHelp,
}) {
  const {
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
  } = useLoginFormSingin();

  return (
    <form
      className="loginFormSingin"
      onSubmit={(e) => loginFormSinginSubmit(e)}
    >
      <div
        className={`loginFormSinginUsername ${
          ErrorInputEmail ? "loginFormSinginUsernameError" : ""
        }`}
      >
        <label
          htmlFor="emailSingin"
          className={labelUsernameActive ? "labelActive" : ""}
        >
          {textFormUsername}
        </label>
        <input
          type="email"
          name="emailSingin"
          id="emailSingin"
          className="emailSingin"
          value={inputEmail}
          onChange={(e) => handleChangeSinginInputEmail(e)}
          onFocus={() => setLabelUsernameActive(true)}
          onBlur={lostFocusInputEmail}
        />
        {ErrorInputEmail && (
          <h3 className="errorFormUsername">{textFormUsernameError}</h3>
        )}
        {errorEmailInvalid && (
          <h3 className="errorFormUsername">{textFormUsernameInvalid}</h3>
        )}
      </div>
      <div
        className={`loginFormSinginPassword ${
          ErrorInputPassword ? "loginFormSinginPasswordError" : ""
        }`}
      >
        <label
          htmlFor="passwordSingin"
          className={`labelPassowrdSingin ${
            labelPasswordActive ? "labelActive" : ""
          }`}
        >
          {textFormPassword}
        </label>
        {changeInputPassword ? (
          <input
            type="password"
            name="passwordSingin"
            id="passwordSingin"
            className="passwordSinginPassword"
            value={inputPassword}
            onChange={(e) => handleChangeSinginInputPassword(e)}
            onFocus={() => setLabelPasswordActive(true)}
            onBlur={lostFocusInputPassword}
          />
        ) : (
          <input
            type="text"
            name="passwordSingin"
            id="passwordSingin"
            className="passwordSinginText"
            value={inputPassword}
            onChange={(e) => handleChangeSinginInputPassword(e)}
            onFocus={() => setLabelPasswordActive(true)}
            onBlur={lostFocusInputPassword}
          />
        )}
        <button
          id="changeInputPassword"
          onClick={() => setChangeInputPassword(!changeInputPassword)}
        >
          {changeInputPassword
            ? textChangeInputPassword[0]
            : textChangeInputPassword[1]}
        </button>
        {ErrorInputPassword && (
          <h3 className="errorFormPassword">{textFormPasswordError}</h3>
        )}
        {errorPasswordInvalid && (
          <h3 className="errorFormPassword">{textFormPasswordInvalid}</h3>
        )}
      </div>

      <input type="submit" value={textButton} />
      <div className="loginFormSingin_prefer">
        <div className="continerCheckboxSingin">
          <input
            type="checkbox"
            name="checkBoxLoginFormSingin"
            id="checkBoxLoginFormSingin"
          />
          <label htmlFor="checkBoxLoginFormSingin">{textCheckBox}</label>
        </div>
        <Link to={ROUTES.HOME}>{textHelp}</Link>
      </div>
    </form>
  );
}

export default LoginFormSingin;
