import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionUserSelectPlan } from "../context/actions/actionUser";
import ROUTES from "../routert/rotues";

function useSingupPlanformChoicePlan() {
  const plansNetflix = useSelector((state) => state.plansNetflix.plans);
  const dispatch = useDispatch();

  const history = useHistory();

  const [selectPlan, setSelectPlan] = useState(plansNetflix);

  useEffect(() => {
    setSelectPlan(plansNetflix);
  }, [plansNetflix]);

  function selectPlanButton() {
    if (
      selectPlan[0].planBasic.select ||
      selectPlan[1].planStandard.select ||
      selectPlan[2].planPremium.select
    ) {
      if (selectPlan[0].planBasic.select) {
        dispatch(actionUserSelectPlan(selectNewPlan(selectPlan[0].planBasic)));
      }
      if (selectPlan[1].planStandard.select) {
        dispatch(
          actionUserSelectPlan(selectNewPlan(selectPlan[1].planStandard))
        );
      }
      if (selectPlan[2].planPremium.select) {
        dispatch(
          actionUserSelectPlan(selectNewPlan(selectPlan[2].planPremium))
        );
      }
      history.push({
        pathname: ROUTES.SIGN_UP.PAYMENT,
      });
    }
  }

  return {
    dispatch,
    selectPlan,
    selectPlanButton,
  };
}

function selectNewPlan({ name, price, quality, resolution }) {
  return {
    name,
    price,
    quality,
    resolution,
  };
}

export default useSingupPlanformChoicePlan;
