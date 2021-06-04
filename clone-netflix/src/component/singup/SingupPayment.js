import React from "react";
import useSingupPayment from "../../hooks/useSingupPayment";
import OurStoryCardSiteFooter from "../OurStoryCardSiteFooter";
import HeaderSingup from "./HeaderSingup";
import "./style/styleSingupPayment.scss";
import LockIcon from "@material-ui/icons/Lock";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LockPayment from "../../resources/img/Lock_logo_payment.png";
import visaPayment from "../../resources/img/visa_payment.svg";
import americanPayment from "../../resources/img/amex_payment.svg";
import masterPayment from "../../resources/img/mastercard_payment.svg";

function SingupPayment() {
  const { languageState, reDirectPayment } = useSingupPayment();

  const {
    textSinginSingup,
    // singOff,
    textSteps,
    textTitle,
    textSubTitle_1,
    textSubTitle_2,
    payCard,
    footer,
  } = languageState;

  const { titlePay, subTitlePay } = payCard;

  const { contactTitle, contactLinks, optionLanguage } = footer;
  return (
    <div className="singupPayment">
      <div className="continer_singupPayment">
        <HeaderSingup textSinginSingup={textSinginSingup} tap={"Payment"} />

        <div className="simpleContiner">
          <div className="continer_simpleContiner">
            <div className="continerPayment">
              <div className="continerLogo">
                <figure>
                  <img src={LockPayment} alt="Lock icon" />
                </figure>
              </div>
              <div className="continerText">
                <h3>{textSteps}</h3>
                <h1>{textTitle}</h1>
                <h2>{textSubTitle_1}</h2>
                <h2>{textSubTitle_2}</h2>
              </div>
              <div className="continerPayCard">
                <div className="continerLockIcon">
                  <h3>{titlePay}</h3>
                  <LockIcon className="lockIcon_payCard" />
                </div>
                <button className="continerTypeCard" onClick={reDirectPayment}>
                  <div className="typeCard">
                    <h3>{subTitlePay}</h3>
                    <div className="continerCards">
                      <img src={visaPayment} alt="visa" />
                      <img src={masterPayment} alt="master" />
                      <img src={americanPayment} alt="american" />
                    </div>
                  </div>
                  <ArrowForwardIosIcon className="arrowTypeCard" />
                </button>
              </div>
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

export default SingupPayment;
