import React from "react";
import useRegFormSingupForm from "../../hooks/useRegFormSingupForm";
import "./style/styleRegFormSingupForm.scss";

function RegFormSingupForm({
  textButton,
  textFormUsername,
  textFormUsernameError,
  textFormPassword,
  textFormPasswordError,
}) {
  const {
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
  } = useRegFormSingupForm();
  return (
    <form
      onSubmit={(e) => {
        reDirect(e);
      }}
      className="regFormSingupForm"
    >
      <div className={`loginFormSingupUsername`}>
        <div
          className={`continer_formUsername ${
            ErrorInputEmail ? "continer_formUsernameError" : ""
          } ${suscessEmail ? "continer_formUsernameSuscess" : ""}`}
        >
          <label
            htmlFor="emailSingup"
            className={labelUsernameActive ? "labelActive" : ""}
          >
            {textFormUsername}
          </label>
          <input
            type="email"
            name="emailSingup"
            id="emailSingup"
            className="emailSingup"
            value={inputEmail}
            onChange={(e) => handleChangeSingupInputEmail(e)}
            onFocus={() => setLabelUsernameActive(true)}
            onBlur={lostFocusInputEmail}
          />
        </div>
        {ErrorInputEmail && (
          <h3 className="errorFormUsername">{textFormUsernameError}</h3>
        )}
      </div>
      <div className={`loginFormSingupPassword`}>
        <div
          className={`continer_formPassoword ${
            ErrorInputPassword ? "continer_formPasswordError" : ""
          } ${suscessPassword ? "continer_formPasswordSuscess" : ""}`}
        >
          <label
            htmlFor="passwordSingup"
            className={`labelPassowrdSingup ${
              labelPasswordActive ? "labelActive" : ""
            }`}
          >
            {textFormPassword}
          </label>
          <input
            type="password"
            name="passwordSingup"
            id="passwordSingup"
            className="passwordSingupPassword"
            value={inputPassword}
            onChange={(e) => handleChangeSingupInputPassword(e)}
            onFocus={() => setLabelPasswordActive(true)}
            onBlur={lostFocusInputPassword}
          />
        </div>
        {ErrorInputPassword && (
          <h3 className="errorFormPassword">{textFormPasswordError}</h3>
        )}
      </div>

      <button>{textButton}</button>
    </form>
  );
}

export default RegFormSingupForm;
