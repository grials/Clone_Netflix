import React from "react";
import useDescribeMovie from "../../hooks/useDescribeMovie";
import "./style/styleDescribeMovie.scss";

function DescribeMovie({
  movieSelect,
  textButtonLook,
  textButtonAdd,
  movieActive,
}) {
  const { video } = useDescribeMovie(movieSelect?.id);
  // console.log(movieSelect);
  return (
    <div className={`continerDescriptionMovie`}>
      <div
        className={`continer_continerDescriptionMovie ${
          movieActive.active ? "activeContiner_ContinerDescription" : ""
        }`}
      >
        <div className="continer2_continerDescriptionMovie">
          <div className="continerTrailerMovie">
            <div className="continer_continerTrailerMovie">
              {video ? (
                <iframe
                  width="560"
                  height="315"
                  src={video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="errorVideo">
                  <img src={movieSelect?.poster_path} alt="poster" />
                </div>
              )}
            </div>
          </div>
          <div className="continerDescription">
            <div className="continer_continerDescription">
              {/* Descriptcion de la pelicula */}
              <div className="continer2_continerDescription">
                <div className="continerButtons">
                  <button>{textButtonLook}</button>
                  <button>{textButtonAdd}</button>
                </div>
                <div className="continerTitle_Description">
                  <h2>{movieSelect?.original_title}</h2>
                </div>
                <div className="continerOverview">
                  <p>{movieSelect?.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescribeMovie;
