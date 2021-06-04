import plansNetflix from "../object/initialContextPlans";

export default function selectPlanReducer(state = plansNetflix, action) {
  switch (action.type) {
    case "SELECT_PLAN":
      return {
        plans: action.object,
        planSelect: action.planSelect,
      };

    default:
      return state;
  }
}
