import { useEffect, useState } from "react";

function useCarrusel(listMovie) {
  const [carruselState, setCarruselState] = useState(false);
  const [positionCarrusel, setPositionCarrusel] = useState(0);
  const [valueChangePosition, setValueChangePosition] = useState(0);
  const [widthContinerMovies, setWidthContinerMovies] = useState(0);
  const [widthMovie, setWidthMovie] = useState(0);
  const [valueExtraWindow, setValueExtraWindow] = useState(null);

  useEffect(() => {
    if (listMovie !== null) {
      // console.log("entre a useEffet", listMovie);
      setCarruselState(listMovie);
      setValueChangePosition(100 / listMovie.length);
      setWidthMovie(100 / listMovie.length);
      if (window.innerWidth <= 800) {
        setWidthContinerMovies(100 * listMovie.length);
      }
      if (window.innerWidth > 800) {
        let sizeWindow =
          100 / ((window.innerWidth * 100) / (250 * listMovie.length));
        setWidthContinerMovies(100 * sizeWindow);
      }
    }
  }, [listMovie]);

  useEffect(() => {
    const listenerWindowCarrusel = ({ target }) => {
      if (target.innerWidth > 800) {
        setValueExtraWindow(
          100 / ((target.innerWidth * 100) / (250 * carruselState.length))
        );
      } else {
        setValueExtraWindow(carruselState.length);
      }
    };
    window.addEventListener("resize", listenerWindowCarrusel);
    return () => {
      window.removeEventListener("resize", listenerWindowCarrusel);
    };
  }, [carruselState]);

  useEffect(() => {
    if (carruselState !== false) {
      if (valueExtraWindow !== null) {
        setWidthContinerMovies(100 * valueExtraWindow);
      }
    }
  }, [valueExtraWindow, carruselState]);

  function objectControlStyleCarrusel() {
    return {
      width: `${carruselState ? `${widthContinerMovies}%` : ""}`,
      transform: `translateX(${positionCarrusel}%)`,
    };
  }

  function objectControlStyleMovieCarrusel() {
    return {
      width: `${carruselState ? `${widthMovie}%` : ""}`,
    };
  }

  function aumentPositionCarrusel() {
    if (window.innerWidth > 800) {
      //es la diferencia entre el contenedor del carrusel y el contenedor de peliculas.
      let value = (window.innerWidth * 100) / (250 * carruselState?.length);

      if (positionCarrusel <= 0 && positionCarrusel > -(100 - (value || 0))) {
        setPositionCarrusel(positionCarrusel - valueChangePosition);
      } else {
        setPositionCarrusel(-(100 - (value || 0)));
      }
    } else {
      if (positionCarrusel <= 0 && positionCarrusel > -95) {
        setPositionCarrusel(positionCarrusel - valueChangePosition);
      } else {
        setPositionCarrusel(-95);
      }
    }
  }

  function decrementPositionCarrusel() {
    if (window.innerWidth > 800) {
      //es la diferencia entre el contenedor del carrusel y el contenedor de peliculas.
      let value = (window.innerWidth * 100) / (250 * carruselState?.length);

      if (positionCarrusel >= -(100 - (value || 0)) && positionCarrusel < 0) {
        setPositionCarrusel(positionCarrusel + valueChangePosition);
      } else {
        setPositionCarrusel(0);
      }
    } else {
      if (positionCarrusel >= -95 && positionCarrusel < 0) {
        setPositionCarrusel(positionCarrusel + valueChangePosition);
      } else {
        setPositionCarrusel(0);
      }
    }
  }

  return {
    carruselState,
    objectControlStyleCarrusel,
    objectControlStyleMovieCarrusel,
    aumentPositionCarrusel,
    decrementPositionCarrusel,
  };
}

export default useCarrusel;
