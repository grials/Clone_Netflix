import { initialContextLanguage as initialContext } from "../object/initialContextLanguage";

export function languageReducer(state = initialContext, action) {
  switch (action.type) {
    case "LANGUAGE":
      // console.log("reducer language", action);
      return action.object;
    default:
      return state;
  }
}
