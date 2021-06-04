import { useEffect, useState } from "react";
import axios from "axios";
import urlRequest from "../constants/API/the_movie_db";

function useHeaderBrowse(urlGetTrending) {
  const [traiding, setTraiding] = useState({});

  useEffect(() => {
    getTrending(urlGetTrending)
      .then((response) => {
        setTraiding({
          ...response.data.results[Math.round(Math.random() * 19)],
          poster_path: `${urlRequest.URL_IMG}${
            response.data.results[Math.round(Math.random() * 19)].poster_path
          }`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [urlGetTrending]);
  return {
    traiding,
  };
}

async function getTrending(url) {
  let tredingMovies = await axios.get(url);

  return tredingMovies;
}

export default useHeaderBrowse;
