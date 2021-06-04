import React from "react";
import { Link } from "react-router-dom";
import logoNetflix from "../../resources/img/Netflix_2015_logo.svg";
import logoHappyNetflix from "../../resources/img/happyNetflix.png";
import useHeaderBrowse from "../../hooks/useHeaderBrowse";
import "./style/styleHeaderBrowse.scss";
import ROUTES from "../../routert/rotues";

function HeaderBrowse({ textButton_1, textButton_2, getTrending }) {
  const { traiding } = useHeaderBrowse(getTrending);

  return (
    <div className="headerBrowse">
      <div className="continerWallpaper">
        <img src={traiding.poster_path} alt="wallpaper" />
      </div>
      <div className="continer_headerBrowse">
        <div className="continer2_headerBrowse">
          <div className="continer3_headerBrowse">
            <div className="continer_headers">
              <div className="header">
                <div className="continer_nav">
                  <figure>
                    <Link to={ROUTES.BROWSE}>
                      <img src={logoNetflix} alt="logo netflix" />
                    </Link>
                  </figure>
                  <div className="my_count">
                    <Link to={ROUTES.BROWSE}>
                      <img src={logoHappyNetflix} alt="happy netflix" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="continerDescription">
              <div className="continer_continerDescription">
                <div className="continer2_continerDescription">
                  <div className="continerButtons">
                    <button>{textButton_1}</button>
                    <button>{textButton_2}</button>
                  </div>
                  <div className="continerTextDescription">
                    <p>{traiding.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBrowse;
