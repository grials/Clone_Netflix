import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function useFagListQuest(content, index) {
  const [contentQuets] = useState(content);
  const listQuest = useSelector((state) => state.listQuest);
  const [actionQuestState, setActionQuest] = useState(
    listQuest[`quest${index + 1}`]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setActionQuest(listQuest[`quest${index + 1}`]);
  }, [listQuest, index]);
  return {
    contentQuets,
    actionQuestState,
    dispatch,
  };
}

export default useFagListQuest;
