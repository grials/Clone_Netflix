import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import nameLocalStorage from "../constants/API/nameLocalStorage";
import ROUTES from "../routert/rotues";

function useFormCardCreditSingup() {
  const planSelect = useSelector((state) => state.plansNetflix.planSelect);
  const choiceUser = useSelector((state) => state.user);

  const [choiceUserState, setChoiceUserState] = useState(choiceUser);

  const history = useHistory();

  const [labelActive_1, setLabelActive_1] = useState(false);
  const [labelActive_2, setLabelActive_2] = useState(false);
  const [labelActive_3, setLabelActive_3] = useState(false);
  const [labelActive_4, setLabelActive_4] = useState(false);
  const [labelActive_5, setLabelActive_5] = useState(false);
  const [input_1, setInput_1] = useState("");
  const [input_2, setInput_2] = useState("");
  const [input_3, setInput_3] = useState("");
  const [input_4, setInput_4] = useState("");
  const [input_5, setInput_5] = useState("");
  const [inputError_1, setInputError_1] = useState(false);
  const [inputError_2, setInputError_2] = useState(false);
  const [inputError_3, setInputError_3] = useState(false);
  const [inputError_4, setInputError_4] = useState(false);
  const [inputError_5, setInputError_5] = useState(false);
  const [inputSuscess_1, setInputSuscess_1] = useState(false);
  const [inputSuscess_2, setInputSuscess_2] = useState(false);
  const [inputSuscess_3, setInputSuscess_3] = useState(false);
  const [inputSuscess_4, setInputSuscess_4] = useState(false);
  const [inputSuscess_5, setInputSuscess_5] = useState(false);

  useEffect(() => {
    setChoiceUserState(choiceUser);
  }, [choiceUser]);

  useEffect(() => {
    if (input_1 !== "") {
      setLabelActive_1(true);
    } else {
      setLabelActive_1(false);
    }
  }, [input_1]);

  useEffect(() => {
    if (input_2 !== "") {
      setLabelActive_2(true);
    } else {
      setLabelActive_2(false);
    }
  }, [input_2]);

  useEffect(() => {
    if (input_3 !== "") {
      setLabelActive_3(true);
    } else {
      setLabelActive_3(false);
    }
  }, [input_3]);

  useEffect(() => {
    if (input_4 !== "") {
      setLabelActive_4(true);
    } else {
      setLabelActive_4(false);
    }
  }, [input_4]);

  useEffect(() => {
    if (input_5 !== "") {
      setLabelActive_5(true);
    } else {
      setLabelActive_5(false);
    }
  }, [input_5]);

  function handleChangeInput_1(value) {
    setInput_1(value.trim());
    if (value === "" || value.match(/^[a-z]+$/gi) === null) {
      setInputError_1(true);
      setInputSuscess_1(false);
    } else {
      setInputError_1(false);
      setInputSuscess_1(true);
    }
  }
  function handleChangeInput_2(value) {
    setInput_2(value.trim());
    if (value === "" || value.match(/^[a-z]+$/gi) === null) {
      setInputError_2(true);
      setInputSuscess_2(false);
    } else {
      setInputError_2(false);
      setInputSuscess_2(true);
    }
  }
  function handleChangeInput_3(value) {
    setInput_3(value.trim());
    if (
      value.match(/^3[47][0-9]{13}$/gi) === null &&
      value.match(/^5[1-5][0-9]{14}$/gi) === null
    ) {
      setInputError_3(true);
      setInputSuscess_3(false);
    } else {
      setInputError_3(false);
      setInputSuscess_3(true);
    }
  }
  function handleChangeInput_4(value) {
    if (value.length === 2 && value.match(/\//gi) === null) {
      setInput_4(`${value}/`);
    } else {
      setInput_4(value.trim());
    }

    if (
      value.match(/^(0?[1-9]|1[0-2])\/20(2[1-9]|3[0-9]|4[0-9])$/gi) === null
    ) {
      setInputError_4(true);
      setInputSuscess_4(false);
    } else {
      setInputError_4(false);
      setInputSuscess_4(true);
    }
  }
  function handleChangeInput_5(value) {
    if (value.length <= 4) {
      setInput_5(value.trim());
    }
    if (value.match(/^[0-9]+$/gi) === null || value.length < 4) {
      setInputError_5(true);
      setInputSuscess_5(false);
    } else {
      setInputError_5(false);
      setInputSuscess_5(true);
    }
  }

  async function handleSubmitCardCredit(e) {
    e.preventDefault();
    if (
      !inputError_1 &&
      !inputError_2 &&
      !inputError_3 &&
      !inputError_4 &&
      !inputError_5
    ) {
      if (
        inputSuscess_1 &&
        inputSuscess_2 &&
        inputSuscess_3 &&
        inputSuscess_4 &&
        inputSuscess_5
      ) {
        let json_parse = parseFormJSON(e.target, choiceUserState);

        let response = await addUserSingUp(json_parse, ROUTES.SIGN_UP.ADD);

        if (response.token) {
          window.localStorage.setItem(nameLocalStorage.token, response.token);
          history.push({
            pathname: ROUTES.BROWSE,
          });
        }
      }
    }
  }

  return {
    statesInput: [
      {
        stateInput: input_1,
        setInput: handleChangeInput_1,
        stateLabel: labelActive_1,
        setLabel: setLabelActive_1,
        inputError: inputError_1,
        inputSuscess: inputSuscess_1,
      },
      {
        stateInput: input_2,
        setInput: handleChangeInput_2,
        stateLabel: labelActive_2,
        setLabel: setLabelActive_2,
        inputError: inputError_2,
        inputSuscess: inputSuscess_2,
      },
      {
        stateInput: input_3,
        setInput: handleChangeInput_3,
        stateLabel: labelActive_3,
        setLabel: setLabelActive_3,
        inputError: inputError_3,
        inputSuscess: inputSuscess_3,
      },
      {
        stateInput: input_4,
        setInput: handleChangeInput_4,
        stateLabel: labelActive_4,
        setLabel: setLabelActive_4,
        inputError: inputError_4,
        inputSuscess: inputSuscess_4,
      },
      {
        stateInput: input_5,
        setInput: handleChangeInput_5,
        stateLabel: labelActive_5,
        setLabel: setLabelActive_5,
        inputError: inputError_5,
        inputSuscess: inputSuscess_5,
      },
    ],
    plan: planSelect,
    submitFuntion: handleSubmitCardCredit,
  };
}

function parseFormJSON(target, choice_user) {
  let { email, password, planElect } = choice_user;

  let name = target.querySelector("#useFirtsName").value;
  let lastName = target.querySelector("#useSecondName").value;
  let numCard = target.querySelector("#numCard").value;
  let dateExpirCard = new Date(
    `01/${target.querySelector("#birthDate").value}`
  );
  let segureCode = target.querySelector("#codeSegure").value;
  return {
    email,
    password,
    name,
    lastName,
    numCard,
    dateExpirCard,
    segureCode,
    planElect,
  };
}

async function addUserSingUp(json, url) {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT.DELETE;POST,OPTIONS",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    },
  });
  let response_json = await response.json();
  return response_json;
}

export default useFormCardCreditSingup;
