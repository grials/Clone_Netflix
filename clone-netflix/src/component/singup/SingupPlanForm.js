import React from "react";
import OurStoryCardSiteFooter from "../OurStoryCardSiteFooter";
import HeaderSingup from "./HeaderSingup";
import "./style/styleSingupPlanForm.scss";
import useSingupPlanForm from "../../hooks/useSingupPlanForm";
import SingupPlanformChoicePlan from "./SingupPlanformChoicePlan";

function SingupPlanForm() {
  const {
    textSinginSingup,
    // singOff,
    textSteps,
    textTitle,
    textSubTitle_1,
    textSubTitle_2,
    textSubTitle_3,
    Planes,
    terms,
    textButton,
    footer,
  } = useSingupPlanForm();

  const { contactTitle, contactLinks, optionLanguage } = footer;

  return (
    <div className="singupPlanForm">
      <div className="continer_singupPlanForm">
        <HeaderSingup
          textSinginSingup={textSinginSingup}
          tap={"SingupPlanForm"}
        />
        <div className="simpleContiner">
          <div className="continer_simpleContiner">
            <SingupPlanformChoicePlan
              textSteps={textSteps}
              textTitle={textTitle}
              textSubTitle_1={textSubTitle_1}
              textSubTitle_2={textSubTitle_2}
              textSubTitle_3={textSubTitle_3}
              Planes={Planes}
              terms={terms}
              textButton={textButton}
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

export default SingupPlanForm;
