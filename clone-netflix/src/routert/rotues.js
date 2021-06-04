const ROUTES = {
  HOME: "/",
  BROWSE: "/browse",
  SIGN_UP: {
    MAIN: "/singup",
    REGISTRATION: "/singup/registration",
    REG_FORM: "/singup/regform",
    PLAN_FORM: "/singup/planform",
    PAYMENT: "/singup/payment",
    CARD_CREDIT: "/singup/creditoption",
    ADD: "/singup/add",
  },
  SIGN_IN: "/singin",
  AUTH: {
    IS_REGISTER: "/auth/isregister",
    AUTH_USER: "/auth/user",
  },
  NOT_FOUND_404: "*",
};

export default ROUTES;
