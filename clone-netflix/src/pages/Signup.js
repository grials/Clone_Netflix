import React from "react";
import { Switch, Route } from "react-router-dom";
import ROUTES from "../routert/rotues";
import Registration from "../component/singup/Registration";
import NotFound404 from "../component/NotFound404";
import RegFormSingup from "../component/singup/RegFormSingup";
import SingupPrePlane from "../component/singup/SingupPrePlane";
import SingupPlanForm from "../component/singup/SingupPlanForm";
import SingupPayment from "../component/singup/SingupPayment";
import SingupCardCredit from "../component/singup/SingupCardCredit";
function Signup() {
  return (
    <Switch>
      <Route exact path={ROUTES.SIGN_UP.MAIN} component={SingupPrePlane} />
      <Route
        exact
        path={ROUTES.SIGN_UP.REGISTRATION}
        component={Registration}
      />
      <Route exact path={ROUTES.SIGN_UP.REG_FORM} component={RegFormSingup} />
      <Route exact path={ROUTES.SIGN_UP.PLAN_FORM} component={SingupPlanForm} />
      <Route exact path={ROUTES.SIGN_UP.PAYMENT} component={SingupPayment} />
      <Route
        exact
        path={ROUTES.SIGN_UP.CARD_CREDIT}
        component={SingupCardCredit}
      />
      <Route path={ROUTES.NOT_FOUND_404} component={NotFound404} />
    </Switch>
  );
}

export default Signup;
