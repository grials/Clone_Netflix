import React from "react";
import { Link } from "react-router-dom";
import "./styles/StyleSingin.scss";
import OurStoryCardSiteFooter from "../component/OurStoryCardSiteFooter";
import CardLoginBodySingin from "../component/singin/CardLoginBodySingin";
import useSingin from "../hooks/useSingin";
import logoNetflix from "../resources/img/Netflix_2015_logo.svg";
import wallpaper from "../resources/img/wallpape_website_small.jpg";

function Signin() {
  const { languageState, minWidth } = useSingin();
  const { loginBody, contactSingin } = languageState;

  const {
    title,
    textButton,
    textFormUsername,
    textFormUsernameError,
    textFormPassword,
    textFormPasswordError,
    textFormUsernameInvalid,
    textFormPasswordInvalid,
    textChangeInputPassword,
    textCheckBox,
    textHelp,
    textFacebookSingin,
    textSinginSingup,
    textSingupSingin,
    textReCaptcha,
    textButtonReCaptcha,
  } = loginBody;

  const { contactTitle, contactLinks, optionLanguage } = contactSingin;

  return (
    <div className="singin">
      <div className="singinWallpaperPanel"></div>
      {minWidth && (
        <div className="singinWallpaper">
          <img src={wallpaper} alt="wallpaper" />
        </div>
      )}

      <div className="singinHeader">
        <Link to="/">
          <img src={logoNetflix} alt="Login Netflix" />
        </Link>
      </div>
      <CardLoginBodySingin
        title={title}
        textButton={textButton}
        textCheckBox={textCheckBox}
        textHelp={textHelp}
        textFacebookSingin={textFacebookSingin}
        textSinginSingup={textSinginSingup}
        textSingupSingin={textSingupSingin}
        textReCaptcha={textReCaptcha}
        textButtonReCaptcha={textButtonReCaptcha}
        textFormUsername={textFormUsername}
        textFormUsernameError={textFormUsernameError}
        textFormPassword={textFormPassword}
        textFormPasswordError={textFormPasswordError}
        textChangeInputPassword={textChangeInputPassword}
        textFormUsernameInvalid={textFormUsernameInvalid}
        textFormPasswordInvalid={textFormPasswordInvalid}
      />

      <OurStoryCardSiteFooter
        title={contactTitle}
        footerLinks={contactLinks}
        optionLanguage={optionLanguage}
        footer={""}
      />
    </div>
  );
}

export default Signin;
