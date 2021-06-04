import listQuest from "../object/initialContextListQuets";

export function listQuestReducer(state = listQuest, action) {
  switch (action.type) {
    case "MOD_LIST_QUEST":
      let { id, list_Quets } = action;
      const newObject = {};
      for (const key in listQuest) {
        if (key === id) {
          newObject[id] = !list_Quets;
        } else {
          newObject[key] = false;
        }
      }

      return newObject;
    default:
      return state;
  }
}
