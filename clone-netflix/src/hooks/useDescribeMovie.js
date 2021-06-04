import { useEffect, useState } from "react";
import axios from "axios";
import urlRequest from "../constants/API/the_movie_db";

function useDescribeMovie(id) {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (id) {
      getVideo(urlRequest.getNewVideo(id))
        .then((resp) => {
          let data = resp.data.results;
          if (data.length === 0) {
            setVideo(false);
          } else {
            let videoId = filterTrailer(data);
            // console.log(videoId);
            if (videoId) {
              setVideo(urlRequest.getURLNewVideo(videoId.key));
            } else {
              setVideo(urlRequest.getURLNewVideo(data[0].key));
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return { video };
}

async function getVideo(URL) {
  let data = await axios.get(URL);

  return data;
}

function filterTrailer(results) {
  return results.filter((video) => {
    if (video.type.toLowerCase().includes("trailer")) {
      return video.key;
    }
  })[0];
}

export default useDescribeMovie;
