import React from "react";
import { Link } from "react-router-dom";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import "./style/StyleSingupPlanformChoicePlan.scss";
import ROUTES from "../../routert/rotues";
import useSingupPlanformChoicePlan from "../../hooks/useSingupPlanformChoicePlan";
import actionSelectPlan from "../../context/actions/actionSelectPlan";

function SingupPlanformChoicePlan({
  textSteps,
  textTitle,
  textSubTitle_1,
  textSubTitle_2,
  textSubTitle_3,
  Planes,
  terms,
  textButton,
}) {
  const { dispatch, selectPlan, selectPlanButton } =
    useSingupPlanformChoicePlan();
  const { caracteristicas, planBasico, planEstandar, planPremium } = Planes;
  return (
    <div className="continerPlanChoice">
      <div className="continerText">
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
      </div>
      <div className="continer_continerPlanChoice">
        <div className="namePlan">
          <div className="continer_namePlan">
            <div
              className={`planBasic ${
                selectPlan[0].planBasic.select ? "select" : ""
              }`}
            >
              <span>{planBasico.name}</span>
              <div
                className="selectPlan"
                id="planBasic"
                onClick={(e) => dispatch(actionSelectPlan(e.target.id))}
              ></div>
            </div>
            <div
              className={`planEstandar ${
                selectPlan[1].planStandard.select ? "select" : ""
              }`}
            >
              <span>{planEstandar.name}</span>
              <div
                className="selectPlan"
                id="planStandard"
                onClick={(e) => dispatch(actionSelectPlan(e.target.id))}
              ></div>
            </div>
            <div
              className={`planPremium ${
                selectPlan[2].planPremium.select ? "select" : ""
              }`}
            >
              <span>{planPremium.name}</span>
              <div
                className="selectPlan"
                id="planPremium"
                onClick={(e) => dispatch(actionSelectPlan(e.target.id))}
              ></div>
            </div>
          </div>
        </div>
        <div className="caractPlan">
          <CaractPlan
            classnameTitle={"caractPreci"}
            classnameSubtitle_1={"title"}
            classnameSubtitle_2={"numCarac"}
            title={caracteristicas[0]}
            subTitle_1={planBasico.price}
            subTitle_2={planEstandar.price}
            subTitle_3={planPremium.price}
            selectPlan={selectPlan}
          />
          <CaractPlan
            classnameTitle={"caractQuality"}
            classnameSubtitle_1={"title"}
            classnameSubtitle_2={"numCarac"}
            title={caracteristicas[1]}
            subTitle_1={planBasico.quality}
            subTitle_2={planEstandar.quality}
            subTitle_3={planPremium.quality}
            selectPlan={selectPlan}
          />
          <CaractPlan
            classnameTitle={"caractResolution"}
            classnameSubtitle_1={"title"}
            classnameSubtitle_2={"numCarac"}
            title={caracteristicas[2]}
            subTitle_1={planBasico.resolution}
            subTitle_2={planEstandar.resolution}
            subTitle_3={planPremium.resolution}
            selectPlan={selectPlan}
          />
          <CaractPlan
            classnameTitle={"caractWhereSee"}
            classnameSubtitle_1={"title"}
            classnameSubtitle_2={"numCarac"}
            title={caracteristicas[3]}
            subTitle_1={planBasico.whereSee ? <DoneIcon /> : <ClearIcon />}
            subTitle_2={planEstandar.whereSee ? <DoneIcon /> : <ClearIcon />}
            subTitle_3={planPremium.whereSee ? <DoneIcon /> : <ClearIcon />}
            selectPlan={selectPlan}
          />
        </div>
      </div>
      <div className="termPlan">
        <div className="termPlan_1">
          <p>
            {terms[0]}
            {<Link to={ROUTES.HOME}>{terms[1]}</Link>}
            {terms[2]}
          </p>
          <p>{terms[3]}</p>
        </div>
      </div>
      <div className="continerButton">
        <button onClick={selectPlanButton}>{textButton}</button>
      </div>
    </div>
  );
}

function CaractPlan({
  classnameTitle,
  classnameSubtitle_1,
  classnameSubtitle_2,
  title,
  subTitle_1,
  subTitle_2,
  subTitle_3,
  selectPlan,
}) {
  return (
    <div className={classnameTitle}>
      <div className={classnameSubtitle_1}>
        <span>{title}</span>
      </div>
      <div className={classnameSubtitle_2}>
        <span className={`${selectPlan[0].planBasic.select ? "select" : ""}`}>
          {subTitle_1}
        </span>
        <span
          className={`${selectPlan[1].planStandard.select ? "select" : ""}`}
        >
          {subTitle_2}
        </span>
        <span className={`${selectPlan[2].planPremium.select ? "select" : ""}`}>
          {subTitle_3}
        </span>
      </div>
    </div>
  );
}
export default SingupPlanformChoicePlan;
