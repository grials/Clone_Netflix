export function listQuestAction(id = "", listQuest = false) {
  return {
    type: "MOD_LIST_QUEST",
    id,
    list_Quets: listQuest,
  };
}
