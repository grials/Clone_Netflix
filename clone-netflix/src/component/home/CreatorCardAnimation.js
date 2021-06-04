import React from "react";
import useCreatorCardAnimation from "../../hooks/useCreatorCardAnimation";
import OurStoryCardAnimation from "./OurStoryCardAnimation";
import { utilitis } from "./utilitis";

function CreatorCardAnimation() {
  const languageAnimation = useCreatorCardAnimation();
  return (
    <>
      {languageAnimation.map((card, index) => (
        <OurStoryCardAnimation
          title={card.title}
          subTitle={card.subTitle}
          src={utilitis[index].src}
          video={utilitis[index]?.video}
          position={index}
          iconStrangerThings={utilitis[index]?.iconStrangerThings}
          textIconStrangerThings={card?.descargar}
          download_icon={utilitis[index]?.download_icon}
          key={index}
        />
      ))}
    </>
  );
}

export default CreatorCardAnimation;
