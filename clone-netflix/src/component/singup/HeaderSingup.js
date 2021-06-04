import React from "react";
import { Link } from "react-router-dom";
import NetflixLogo from "../../resources/img/Netflix_2015_logo.svg";
import ROUTES from "../../routert/rotues";
import "./style/styleHeaderSingup.scss";

function HeaderSingup({ textSinginSingup, tap }) {
  return (
    <div className={`headerSingup ${tap ? ` headerSingup_${tap}` : ""}`}>
      <div className="continerHeader">
        <Link to={ROUTES.HOME} className={"logoNetflix"}>
          <img src={NetflixLogo} alt="Logo Netflix" />
        </Link>
        <Link to={ROUTES.SIGN_IN} className={"singinSingup"}>
          {textSinginSingup}
        </Link>
      </div>
    </div>
  );
}

export default HeaderSingup;
