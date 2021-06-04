import React from "react";
import useRowList from "../../hooks/useRowList";
import "./style/styleRowList.scss";
import Carrusel from "./Carrusel";
import DescribeMovie from "./DescribeMovie";

function RowList({ category, ulrCategory, textButton_1, textButton_2 }) {
  const {
    categoryState,
    movieSelect,
    movieActive,
    handleDescriptionMovie,
    setMovieSelect,
  } = useRowList(ulrCategory);
  return (
    <div className="rowList">
      <div className="continer_rowList">
        <div className="continer2_rowList">
          <div className="continerTitle">
            <h1>{category}</h1>
          </div>
          {/* Carrusel de peliculas */}
          <div className="continerCarrusel">
            <div className="continer_continerCarrusel">
              <Carrusel
                setMovieSelect={setMovieSelect}
                carruselCategory={categoryState}
                setMovieActive={handleDescriptionMovie}
              />
              <DescribeMovie
                movieSelect={movieSelect}
                textButtonLook={textButton_1}
                textButtonAdd={textButton_2}
                movieActive={movieActive}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowList;
