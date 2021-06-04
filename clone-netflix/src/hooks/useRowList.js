import { useEffect, useState } from "react";
import axios from "axios";
import urlRequest from "../constants/API/the_movie_db";

function useRowList(ulrCategory) {
  const [categoryState, setCategoryState] = useState(null);
  const [movieSelect, setMovieSelect] = useState(null);
  const [movieActive, setMovieActive] = useState({
    id: "",
    active: false,
  });

  function handleDescriptionMovie(id) {
    if (id === movieActive.id) {
      setMovieActive({
        ...movieActive,
        id: "",
        active: false,
      });
    } else {
      setMovieActive({
        ...movieActive,
        id,
        active: true,
      });
    }
  }

  useEffect(() => {
    getCategory(ulrCategory).then((res) => {
      let data = res.data.results;

      let newData = filterPropertysCategory(data);
      setCategoryState(newData);
    });
  }, [ulrCategory]);

  return {
    categoryState,
    movieSelect,
    movieActive,
    handleDescriptionMovie,
    setMovieSelect,
  };
}

async function getCategory(url) {
  let category = await axios.get(url);

  return category;
}

function filterPropertysCategory(data) {
  let newData = data.map((category) => {
    delete category["adult"];
    delete category["backdrop_path"];
    delete category["genre_ids"];
    delete category["video"];

    let keys = Object.keys(category);
    keys.forEach((key) => {
      if (key === "name") {
        category.title = category[key];
        delete category[key];
      } else if (key === "original_name") {
        category.original_title = category[key];
        delete category[key];
      } else if (key === "poster_path") {
        category[key] = `${urlRequest.URL_IMG}${category[key]}`;
      }
    });
    return category;
  });
  return newData;
}

export default useRowList;
