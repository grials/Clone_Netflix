import { createStore, combineReducers } from "redux";

import { authReducer as auth } from "./reducer/authReducer";
import { languageReducer as language } from "./reducer/languageReducer";
import { listQuestReducer } from "./reducer/listQuestReducer";

import selectPlanReducer from "./reducer/selectPlanReducer";
import userReducer from "./reducer/userReducer";

const mainReducer = combineReducers({
  auth,
  language,
  listQuest: listQuestReducer,
  plansNetflix: selectPlanReducer,
  user: userReducer,
});

const store = createStore(mainReducer);

export default store;
