import "./style/StyleCardHeroCard.scss";
import { Link } from "react-router-dom";
import SelectBox from "../SelectBox";
import EmailForm from "../EmailForm";
import ROUTES from "../../routert/rotues";

function OurStoryCardHeroCard({
  wallpaperImg,
  src,
  alt,
  optionLanguage,
  textSingnIn,
  title,
  subTitle,
  titleForm,
  textButtonForm,
  textLabelEmail,
  errorEmail,
}) {
  return (
    <div className="heroCard">
      <div className="heroCardImg">
        <img src={wallpaperImg} alt="wallpaper" />
      </div>
      <div className="continerHeroCard">
        <div className="headerWrapper">
          <img src={src} alt={alt} className="logoNetflix" />
          <div className="continerHeader">
            <SelectBox optionLanguage={optionLanguage} />
            <Link to={ROUTES.SIGN_IN}>{textSingnIn}</Link>
          </div>
        </div>
        <div className="continerCardText">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <EmailForm
            titleForm={titleForm}
            textButtonForm={textButtonForm}
            tip="HeroCard"
            textLabelEmail={textLabelEmail}
            errorEmail={errorEmail}
          />
        </div>
      </div>
    </div>
  );
}

export default OurStoryCardHeroCard;
