import React from "react";
import EmailForm from "../EmailForm";
import FagListQuest from "./FagListQuest";
import "./style/StyleOutStoryCardFagCard.scss";

function OutStoryCardFagCard({
  title,
  textButtonForm,
  titleForm,
  listQuest,
  textLabelEmail,
  errorEmail,
}) {
  return (
    <div className="cardFag">
      <div className="continerFag">
        <div className="continer_continerFag">
          <h1 className="continerFagTitle">{title}</h1>
          <div className="fagList">
            {/* contine las listas de preguntas */}
            {listQuest.map((quest, index) => (
              <FagListQuest
                titleQuest={quest.titleQuest}
                content={quest.content}
                index={index}
                key={index}
              />
            ))}
          </div>
          <div className="cardContinerEmail">
            <EmailForm
              textButtonForm={textButtonForm}
              titleForm={titleForm}
              textLabelEmail={textLabelEmail}
              errorEmail={errorEmail}
              tip="CardFag"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutStoryCardFagCard;
