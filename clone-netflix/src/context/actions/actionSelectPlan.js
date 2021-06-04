import plansNetflix from "../object/initialContextPlans";

export default function actionSelectPlan(selectPlan = "") {
  let planSelect;

  const newObject = plansNetflix.plans.map((plan) => {
    if (plan.hasOwnProperty(selectPlan)) {
      plan[selectPlan].select = true;
      planSelect = Object.values(plan)[0];
      return plan;
    } else {
      let key = Object.keys(plan);
      plan[key[0]].select = false;
      return plan;
    }
  });

  return {
    type: "SELECT_PLAN",
    object: newObject,
    planSelect,
  };
}
