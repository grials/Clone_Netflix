import React from "react";
import useRegFormSingup from "../../hooks/useRegFormSingup";
import OurStoryCardSiteFooter from "../OurStoryCardSiteFooter";
import HeaderSingup from "./HeaderSingup";
import RegFormSingupForm from "./RegFormSingupForm";
import "./style/styleRegFormSingup.scss";

function RegFormSingup() {
  const {
    textSinginSingup,
    textSteps,
    textTitle,
    textSubTitle_1,
    textSubTitle_2,
    textEmail,
    textErrorEmail,
    textPassword,
    textErrorPassword,
    textButton,
    footer,
  } = useRegFormSingup();

  const { contactTitle, contactLinks, optionLanguage } = footer;

  return (
    <div className="regFormSingup">
      <div className="continerRegFormSingup">
        <HeaderSingup
          textSinginSingup={textSinginSingup}
          tap={"RegFormSingup"}
        />
        <div className="continerForm">
          <div className="continer_continerForm">
            <div className="continerText">
              <h3>{textSteps}</h3>
              <h1>{textTitle}</h1>
              <h2>{textSubTitle_1}</h2>
              <h2>{textSubTitle_2}</h2>
            </div>
            <RegFormSingupForm
              textButton={textButton}
              textFormUsername={textEmail}
              textFormUsernameError={textErrorEmail}
              textFormPassword={textPassword}
              textFormPasswordError={textErrorPassword}
            />
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

export default RegFormSingup;
