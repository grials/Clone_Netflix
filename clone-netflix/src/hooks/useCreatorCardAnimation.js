import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useCreatorCardAnimation() {
  const animation = useSelector((state) => state.language.HOME.cardAnimation);
  const [languageAnimation, setLanguageAnimation] = useState(animation);
  useEffect(() => {
    setLanguageAnimation(animation);
  }, [animation]);

  return languageAnimation;
}

export default useCreatorCardAnimation;
