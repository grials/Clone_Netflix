import React from "react";
import { listQuestAction as listAction } from "../../context/actions/listQuestActions";
import useFagListQuest from "../../hooks/useFagListQuest";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import "./style/stylefagCard.scss";

function FagListQuest({ titleQuest, content, index }) {
  const { contentQuets, actionQuestState, dispatch } = useFagListQuest(
    content,
    index
  );

  return (
    <div className="fagListQuest">
      <div
        className="fagListQuestTitle"
        id={`quest${1 + index}`}
        onClick={(e) => dispatch(listAction(e.target.id, actionQuestState))}
      >
        <h1 id={`quest${1 + index}`}>{titleQuest}</h1>
        {actionQuestState ? (
          <CloseIcon id={`quest${1 + index}`} />
        ) : (
          <AddIcon id={`quest${1 + index}`} />
        )}
      </div>
      <div
        className={`continerResponse ${actionQuestState ? "openQuestFag" : ""}`}
      >
        {contentQuets.map((resp, index) => (
          <p key={index}>{resp}</p>
        ))}
      </div>
    </div>
  );
}

export default FagListQuest;
