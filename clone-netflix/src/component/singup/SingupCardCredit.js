import React from "react";
import useSingupCardCredit from "../../hooks/useSingupCardCredit";
import OurStoryCardSiteFooter from "../OurStoryCardSiteFooter";
import FormCardCreditSingup from "./FormCardCreditSingup";
import HeaderSingup from "./HeaderSingup";
import "./style/styleSingupCardCredit.scss";

function SingupCardCredit() {
  const { languageState } = useSingupCardCredit();

  const {
    textSinginSingup,
    // singOff,
    textSteps,
    textTitle,
    formCardCredit,
    textButtonChangePlan,
    terms,
    priceText,
    textButton,
    footer,
  } = languageState;

  const { contactTitle, contactLinks, optionLanguage } = footer;

  return (
    <div className="singupCardCredit">
      <div className="continer_singupCardCredit">
        <HeaderSingup textSinginSingup={textSinginSingup} tap={"CardCredit"} />

        <div className="simpleContiner">
          <div className="continer_simpleContiner">
            <FormCardCreditSingup
              classAssigned={""}
              textSteps={textSteps}
              textTitle={textTitle}
              formCardCredit={formCardCredit}
              textButtonChangePlan={textButtonChangePlan}
              terms={terms}
              textButton={textButton}
              priceText={priceText}
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

export default SingupCardCredit;
