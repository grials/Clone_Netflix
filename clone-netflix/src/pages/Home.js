import React from "react";
import CreatorCardAnimation from "../component/home/CreatorCardAnimation";
import OurStoryCardHeroCard from "../component/home/OurStoryCardHeroCard";
import OurStoryCardSiteFooter from "../component/OurStoryCardSiteFooter";
import OutStoryCardFagCard from "../component/home/OutStoryCardFagCard";
import useHome from "../hooks/useHome";
import logoNetflix from "../resources/img/Netflix_2015_logo.svg";
import wallpaperImg from "../resources/img/wallpape_website_small.jpg";
import "./styles/StyleHome.scss";

function Home() {
  const languageHome = useHome();
  const {
    optionLanguage,
    textSingnIn,
    titleHero,
    subTitleHero,
    titleFormHero,
    textButtonFormHero,
  } = languageHome.heroCard;

  const {
    titleFag,
    listQuest,
    titleFormFag,
    textButtonFormFag,
    textLabelEmail,
    errorEmail,
  } = languageHome.cardFag;

  const { footerTitle, footerLinks, footer } = languageHome.cardFooter;
  return (
    <div className="home">
      <OurStoryCardHeroCard
        wallpaperImg={wallpaperImg}
        src={logoNetflix}
        alt="logoNetflix"
        optionLanguage={optionLanguage}
        textSingnIn={textSingnIn}
        title={titleHero}
        subTitle={subTitleHero}
        titleForm={titleFormHero}
        textButtonForm={textButtonFormHero}
        textLabelEmail={textLabelEmail}
        errorEmail={errorEmail}
      />
      <CreatorCardAnimation />
      <OutStoryCardFagCard
        title={titleFag}
        textButtonForm={textButtonFormFag}
        titleForm={titleFormFag}
        listQuest={listQuest}
        textLabelEmail={textLabelEmail}
        errorEmail={errorEmail}
      />
      <OurStoryCardSiteFooter
        title={footerTitle}
        footerLinks={footerLinks}
        optionLanguage={optionLanguage}
        footer={footer}
      />
    </div>
  );
}

export default Home;
