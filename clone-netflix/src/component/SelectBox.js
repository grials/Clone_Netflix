import React from "react";
import actionLanguage from "../context/actions/actionLanguage";
import useSelectBox from "../hooks/useSelectBox";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./style/styleSelectBox.scss";

function SelectBox({ optionLanguage, className }) {
  const { setActive, active, dispatch } = useSelectBox(optionLanguage);

  return (
    <div
      className={`selectBox ${className || ""}`}
      onClick={() => setActive(!active)}
    >
      <div className="select">
        <div className="continerSelect">
          <LanguageIcon className="iconLanguage" />
          <h1>{optionLanguage[0]}</h1>
        </div>
        <ArrowDropDownIcon className="arrowDown" />

        {/* Contenido del select */}
        {active && (
          <Opciones
            optionLanguage={optionLanguage}
            classname={`${active ? "activeSelectBox" : ""}`}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
  );
}

function Opciones({ optionLanguage, dispatch, classname }) {
  return (
    <div className={`opciones ${classname || ""}`}>
      {optionLanguage.map((language, index) => (
        <h2
          className="option"
          onClick={() => dispatch(actionLanguage(language))}
          key={index}
        >
          {language}
        </h2>
      ))}
    </div>
  );
}

export default SelectBox;
