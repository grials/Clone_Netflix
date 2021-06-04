import React from "react";
import "./style/styleSingupPrePlane.scss";
import useSingupPrePlane from "../../hooks/useSingupPrePlane";
import OurStoryCardSiteFooter from "../OurStoryCardSiteFooter";
import HeaderSingup from "./HeaderSingup";
import DoneIcon from "@material-ui/icons/Done";
import checkMark from "../../resources/img/Checkmark.png";

function SingupPrePlane() {
  const { languageState, reDirect } = useSingupPrePlane();

  const {
    textSinginSingup,
    // singOff,
    textSteps,
    textTitle,
    textSubTitle_1,
    textSubTitle_2,
    textSubTitle_3,
    textButton,
    footer,
  } = languageState;

  const { contactTitle, contactLinks, optionLanguage } = footer;

  return (
    <div className="singupPrePlane">
      <div className="continer_singupPrePlane">
        <HeaderSingup
          textSinginSingup={textSinginSingup}
          tap={"SingupPrePlane"}
        />
        <div className="simpleContiner">
          <div className="continer_simpleContiner">
            <div className="continerPlan">
              <div className="continerLogo">
                <img src={checkMark} alt="check circle" />
              </div>
              <div className="continerTitles">
                <h3>{textSteps}</h3>
                <h1>{textTitle}</h1>
              </div>
              <div className="continerBenef">
                <div className="benef">
                  <DoneIcon />
                  <h2>{textSubTitle_1}</h2>
                </div>
                <div className="benef">
                  <DoneIcon />
                  <h2>{textSubTitle_2}</h2>
                </div>
                <div className="benef">
                  <DoneIcon />
                  <h2>{textSubTitle_3}</h2>
                </div>
              </div>
              <button onClick={reDirect}>{textButton}</button>
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

export default SingupPrePlane;
