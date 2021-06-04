import React from "react";
import CategoriesBrowse from "../component/browse/CategoriesBrowse";
import HeaderBrowse from "../component/browse/HeaderBrowse";
import OurStoryCardSiteFooter from "../component/OurStoryCardSiteFooter";
import useBrowse from "../hooks/useBrowse";
import "./styles/StyleBrowse.scss";

function Browse() {
  const { languageState } = useBrowse();

  const { cardHeader, cardListCategories, url_Resquest, cardFooter } =
    languageState;

  const { textButton, textButton_list } = cardHeader;

  const { contactTitle, contactLinks, optionLanguage } = cardFooter;
  const { getTrending, categories } = url_Resquest;
  return (
    <div className="browse">
      <div className="continerBrowse">
        <HeaderBrowse
          textButton_1={textButton}
          textButton_2={textButton_list}
          getTrending={getTrending}
        />
        <CategoriesBrowse
          cardListCategories={cardListCategories}
          categories={categories}
          textButton_1={textButton}
          textButton_2={textButton_list}
        />
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

export default Browse;
