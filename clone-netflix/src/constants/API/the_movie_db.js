// const KEY_the_movie_db = "2e655e1820b46a878e65539706585e5d";

const urlRequest = {
  URL_IMG: `https://image.tmdb.org/t/p/original`,
  getURLNewVideo(id) {
    return `https://www.youtube.com/embed/${id}?controls=0`;
  },
  getNewVideo(id) {
    return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=2e655e1820b46a878e65539706585e5d&language=es-US`;
  },
};

export default urlRequest;
