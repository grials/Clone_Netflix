import React from "react";
import visaCardCredit from "../../resources/img/visa_payment.svg";
import americanCardCredit from "../../resources/img/amex_payment.svg";
import masterCardCredit from "../../resources/img/mastercard_payment.svg";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "./style/styleFormCardCreditSingup.scss";
import useFormCardCreditSingup from "../../hooks/useFormCardCreditSingup";
import { Link } from "react-router-dom";
import ROUTES from "../../routert/rotues";

function FormCardCreditSingup({
  classAssigned,
  textSteps,
  textTitle,
  formCardCredit,
  priceText,
  textButtonChangePlan,
  terms,
  textButton,
}) {
  const { statesInput, plan, submitFuntion } = useFormCardCreditSingup();
  return (
    <div className={`formCardCreditSingup ${classAssigned || ""}`}>
      <div className="continerText">
        <h3>{textSteps}</h3>
        <h1>{textTitle}</h1>
        <div className="continerText_cards">
          <img src={visaCardCredit} alt="Visa" />
          <img src={masterCardCredit} alt="Master" />
          <img src={americanCardCredit} alt="American" />
        </div>
      </div>
      <div className="continerForm">
        <form
          onSubmit={(e) => {
            submitFuntion(e);
          }}
        >
          <div className="continerInputs">
            {formCardCredit.map((input, index) => (
              <InputCardCredit
                name={input.name}
                placeholder={input.placeholder}
                textError={input.textError}
                input={input.type}
                stateLabel={statesInput[index].stateLabel}
                setLabel={statesInput[index].setLabel}
                logo={input?.isCodeSegure}
                stateInput={statesInput[index].stateInput}
                setStateInput={statesInput[index].setInput}
                stateInputError={statesInput[index].inputError}
                stateInputSuscess={statesInput[index].inputSuscess}
                key={index}
              />
            ))}
          </div>
          <div className="continerPrice">
            <div className="continer_continerPrice">
              <div className="identfiPlan">
                <h2>
                  {plan.price} {priceText}
                </h2>
                <h3>{plan.name}</h3>
              </div>
              <div className="redirect">
                <Link to={ROUTES.SIGN_UP.PLAN_FORM}>
                  {textButtonChangePlan}
                </Link>
              </div>
            </div>
          </div>
          <div className="continerTerms">
            <p>{terms[0]}</p>
            <p>
              {terms[1]}
              <Link to={ROUTES.HOME}>{terms[2]}</Link>
              {terms[3]}
              <Link to={ROUTES.HOME}>{terms[4]}</Link>
              {terms[5]}
            </p>
          </div>
          <button>{textButton}</button>
        </form>
      </div>
    </div>
  );
}

function InputCardCredit({
  name,
  placeholder,
  textError,
  input,
  stateLabel,
  setLabel,
  logo,
  stateInput,
  setStateInput,
  stateInputError,
  stateInputSuscess,
}) {
  return (
    <div className={`continerInput input_${name}`}>
      <div
        className={`continer_continerInput ${
          stateInputError ? "continer_continerInputError" : ""
        } ${
          stateInputSuscess ? "continer_continerInputSuscess" : ""
        } continer_input_${name}`}
      >
        <div className={`continer2_continerInput ${logo ? "inputCVV" : ""}`}>
          <label
            htmlFor={name}
            className={`${stateLabel ? "labelActive_cardCredit" : ""}`}
          >
            {placeholder}
          </label>
          <input
            type={input}
            id={name}
            name={name}
            value={stateInput}
            onChange={(e) => setStateInput(e.target.value)}
            onFocus={() => setLabel(true)}
            onBlur={() => {
              if (stateInput === "") setLabel(false);
            }}
          />
          {logo && (
            <Link to={ROUTES.HOME}>
              {<HelpOutlineIcon className={"helpIconSegure"} />}
            </Link>
          )}
        </div>
      </div>
      {stateInputError && <h3 className={"InputError"}>{textError}</h3>}
    </div>
  );
}

export default FormCardCreditSingup;
