import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../routert/rotues";
import SelectBox from "./SelectBox";
import "./style/StyleOurStoryCardSiteFooter.scss";

function OurStoryCardSiteFooter({
  title,
  footerLinks,
  optionLanguage,
  footer,
}) {
  return (
    <div className="cardSiteFooter">
      <div className="continerCardSiteFooter">
        <h1 className="cardSiteFooterTitle">{title}</h1>
        <div className="continerFooterLinks">
          {footerLinks.map((link, index) => (
            <span key={index}>
              <Link to={ROUTES.HOME}>{link}</Link>
            </span>
          ))}
        </div>
        <SelectBox
          optionLanguage={optionLanguage}
          className="selectBoxCardSiteFooter"
        />
        <p>{footer}</p>
      </div>
    </div>
  );
}

export default OurStoryCardSiteFooter;
