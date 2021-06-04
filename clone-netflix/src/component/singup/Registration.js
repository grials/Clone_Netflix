import React from "react";
import { Link } from "react-router-dom";
import useRegistration from "../../hooks/useRegistration";
import SingUp_Devices from "../../resources/img/SingUp_Devices.png";
import ROUTES from "../../routert/rotues";
import OurStoryCardSiteFooter from "../OurStoryCardSiteFooter";
import HeaderSingup from "./HeaderSingup";
import "./style/styleRegistration.scss";

function Registration() {
  const {
    textSinginSingup,
    textSteps,
    textTitle,
    textSubTitle,
    textButton,
    footer,
  } = useRegistration();
  const { contactTitle, contactLinks, optionLanguage } = footer;
  return (
    <div className="registrationSingup">
      <div className="continerRegistration">
        <HeaderSingup
          textSinginSingup={textSinginSingup}
          tap={"Registration"}
        />
        <div className="simpleContinerRegistration">
          <div className="contentStip">
            <div className="regContiner">
              <figure>
                <img src={SingUp_Devices} alt="Devices" />
              </figure>
              <div className="regContiner_text">
                <h3>{textSteps}</h3>
                <h1>{textTitle}</h1>
                <h2>{textSubTitle}</h2>
              </div>
              <Link to={ROUTES.SIGN_UP.REG_FORM} className="redirectFormSingin">
                {textButton}
              </Link>
            </div>
          </div>
        </div>
        <OurStoryCardSiteFooter
          title={contactTitle}
          footerLinks={contactLinks}
          optionLanguage={optionLanguage}
          footer={""}
        />
      </div>
    </div>
  );
}

export default Registration;
