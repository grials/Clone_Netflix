import userObject from "../object/initialContextUser";

export default function userReducer(state = userObject, action) {
  switch (action.type) {
    case "START_COUNT":
      return {
        ...state,
        email: action.email,
      };
    case "CREATE_COUNT":
      let { email, password } = action;

      return {
        ...state,
        email,
        password,
      };
    case "USER_SELECT_PLAN":
      console.log(action);
      let { planElect } = action;
      return {
        ...state,
        planElect,
      };
    default:
      return state;
  }
}
