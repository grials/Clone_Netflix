import { useState } from "react";
import { useDispatch } from "react-redux";

function useSelectBox(optionLanguage) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [option, setOption] = useState(optionLanguage[0]);
  return {
    setActive,
    setOption,
    active,
    option,
    dispatch,
  };
}

export default useSelectBox;
