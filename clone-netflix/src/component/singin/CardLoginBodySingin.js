import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./StyleCardLoginBodySingin.scss";
import LoginFormSingin from "./LoginFormSingin";
import ROUTES from "../../routert/rotues";

function CardLoginBodySingin({
  title,
  textButton,
  textFormUsername,
  textFormUsernameError,
  textFormPassword,
  textFormPasswordError,
  textChangeInputPassword,
  textFormUsernameInvalid,
  textFormPasswordInvalid,
  textCheckBox,
  textHelp,
  textFacebookSingin,
  textSinginSingup,
  textSingupSingin,
  textReCaptcha,
  textButtonReCaptcha,
}) {
  return (
    <div className="cardLoginBodySingin">
      <div className="continercardLoginBodySingin">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <LoginFormSingin
          textButton={textButton}
          textFormUsername={textFormUsername}
          textFormUsernameError={textFormUsernameError}
          textFormPassword={textFormPassword}
          textFormPasswordError={textFormPasswordError}
          textChangeInputPassword={textChangeInputPassword}
          textCheckBox={textCheckBox}
          textHelp={textHelp}
          textFormUsernameInvalid={textFormUsernameInvalid}
          textFormPasswordInvalid={textFormPasswordInvalid}
        />
        <div className="singinFacebook">
          <FacebookIcon className="loginFormSinginFacebookIcon" />
          <h2>{textFacebookSingin}</h2>
          <div
            className="continerSinginFacebook"
            id="_idSinginFacebook"
            onClick={(e) => console.log(e.target.id)}
          ></div>
        </div>
        <div className="loginFormSinginSingup">
          <h2>{textSinginSingup}</h2>
          <Link to={ROUTES.HOME}>{textSingupSingin}</Link>
        </div>
        <div className="reCaptchaSingin">
          {textReCaptcha}
          <button>{textButtonReCaptcha}</button>
        </div>
      </div>
    </div>
  );
}

export default CardLoginBodySingin;
