export function actionUserStart(email) {
  return {
    type: "START_COUNT",
    email,
  };
}

export function actionUserCreateCount(email, password) {
  return {
    type: "CREATE_COUNT",
    email,
    password,
  };
}

export function actionUserSelectPlan(planElect) {
  return {
    type: "USER_SELECT_PLAN",
    planElect,
  };
}
