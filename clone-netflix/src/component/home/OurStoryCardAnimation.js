import React from "react";
import "./style/StyleOurStoryCardAnimation.scss";

function OurStoryCardAnimation({
  title,
  subTitle,
  src,
  video,
  position,
  iconStrangerThings,
  textIconStrangerThings,
  download_icon,
}) {
  return (
    <div
      className={`cardAnimation ${position % 2 !== 0 ? "flex-reverse" : ""}`}
    >
      <div className="cardAnimationContiner">
        <div className="continer_cardAnimationContiner">
          <div className="animationCardText">
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
          </div>

          {position === 0 && <Card1 src={src} video={video} />}
          {position === 1 && (
            <Card2
              src={src}
              iconStrangerThings={iconStrangerThings}
              textIconStrangerThings={textIconStrangerThings}
              download_icon={download_icon}
            />
          )}
          {position === 2 && <Card3 src={src} video={video} />}
          {position === 3 && <Card4 src={src} />}
        </div>
      </div>
    </div>
  );
}

function Card1({ src, video }) {
  return (
    <div className="animationContinerCard1">
      <img src={src} alt="" />
      <div className="animationCard1">
        <video src={video} autoPlay loop muted></video>
      </div>
    </div>
  );
}

function Card2({
  src,
  iconStrangerThings,
  textIconStrangerThings,
  download_icon,
}) {
  return (
    <div className="animationContinerCard2">
      <img src={src} alt="" />
      <div className="animationCard2">
        <img
          src={iconStrangerThings}
          alt="icon Stranger Things"
          className="iconStrangerThings"
        />
        <div className="textIconStrangerThings">
          <h1>Stranger Things</h1>
          <h2>{textIconStrangerThings}</h2>
        </div>
        <img src={download_icon} alt="" className="download_icon" />
      </div>
    </div>
  );
}

function Card3({ src, video }) {
  return (
    <div className="animationContinerCard3">
      <img src={src} alt="" />
      <div className="animationCard3">
        <video src={video} autoPlay loop muted></video>
      </div>
    </div>
  );
}

function Card4({ src }) {
  return (
    <div className="animationContinerCard4">
      <img src={src} alt="" />
    </div>
  );
}

export default OurStoryCardAnimation;
