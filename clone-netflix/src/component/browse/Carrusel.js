import React from "react";
import "./style/styleCarrusel.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useCarrusel from "../../hooks/useCarrusel";
import Loader from "./Loader";

function Carrusel({ setMovieSelect, carruselCategory, setMovieActive }) {
  const {
    carruselState,
    objectControlStyleCarrusel,
    objectControlStyleMovieCarrusel,
    aumentPositionCarrusel,
    decrementPositionCarrusel,
  } = useCarrusel(carruselCategory);

  //   console.log("carrusel", carruselState);
  return (
    <div className="continerListOfMovies">
      <div className="listOfMovies">
        <div className="continer_ListOfMovies">
          {/* Peliculas */}
          <div
            className={`continer2_listOfMovies`}
            style={objectControlStyleCarrusel()}
          >
            {carruselState &&
              carruselState.map((movie, index) => (
                <div
                  className={`continerCarruselMovie`}
                  key={index}
                  style={objectControlStyleMovieCarrusel()}
                  onClick={() => {
                    setMovieSelect(movie);
                    setMovieActive(movie.id);
                  }}
                >
                  <img src={movie.poster_path} alt="poster movie" />
                </div>
              ))}
          </div>
          {carruselState === false && (
            <Loader newClassName={"loaderCarrusel"} />
          )}
        </div>

        <div className="continerButtonRight">
          <button onClick={decrementPositionCarrusel}>
            <ArrowBackIosIcon className="buttonIconRight" />
          </button>
        </div>
        <div className="continerButtonLeft">
          <button onClick={aumentPositionCarrusel}>
            <ArrowForwardIosIcon className="buttonIconLeft" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
