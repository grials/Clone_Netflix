import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./style/styleEmailForm.scss";
import useEmailForm from "../hooks/useEmailForm";

function EmailForm({
  textButtonForm,
  titleForm,
  textLabelEmail,
  errorEmail,
  tip,
}) {
  const {
    inputEmail,
    errorInputEmail,
    lableEmailActive,
    setLableEmailActive,
    handleChangeEmailForm,
    lostFocusInputEmailForm,
    redirectSingup,
  } = useEmailForm();
  return (
    <div className="continerEmail">
      <div className="continer_continerEmail">
        <h3>{titleForm}</h3>
        <div className="continerGroupEmail">
          <div className="continer_continerGroupEmail">
            <div className="continer2_continerGroupEmail">
              <div
                className={`groupEmail_email ${
                  errorInputEmail ? `groupEmail_Error_${tip}` : ""
                }`}
              >
                <label
                  htmlFor={`email_${tip}`}
                  className={`${
                    lableEmailActive ? `labelEmailFormActive_${tip}` : ""
                  }`}
                >
                  {textLabelEmail}
                </label>
                <input
                  type="email"
                  name="email"
                  id={`email_${tip}`}
                  value={inputEmail}
                  onChange={(e) => handleChangeEmailForm(e)}
                  onFocus={() => setLableEmailActive(true)}
                  onBlur={lostFocusInputEmailForm}
                />
                {errorInputEmail && (
                  <h3 className={"errorEmailForm"}>{errorEmail}</h3>
                )}
              </div>
            </div>
            <button onClick={redirectSingup}>
              {textButtonForm}
              <span>
                <ArrowForwardIosIcon className="arrowBotton" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailForm;
