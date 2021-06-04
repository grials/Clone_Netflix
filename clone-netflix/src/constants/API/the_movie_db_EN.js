const KEY_the_movie_db = "2e655e1820b46a878e65539706585e5d";

const urlRequest = {
  getTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${KEY_the_movie_db}&language=en-US`,

  categories: [
    {
      name: "Originals Netflix",
      getCategory: `https://api.themoviedb.org/3/discover/tv?api_key=${KEY_the_movie_db}&language=en-US&with_netWorks=213`,
    },
    {
      name: "Top Rated",
      getCategory: `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY_the_movie_db}&language=en-US&page=1`,
    },
    {
      name: "Actions",
      getCategory: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY_the_movie_db}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=28`,
    },
    {
      name: "Comedy",
      getCategory: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY_the_movie_db}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=35`,
    },
    {
      name: "Horror",
      getCategory: `https://api.themoviedb.org/3/discover/movie?api_key=2e655e1820b46a878e65539706585e5d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27`,
    },
    {
      name: "Romance",
      getCategory: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY_the_movie_db}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=10749`,
    },
    {
      name: "Documentaries",
      getCategory: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY_the_movie_db}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=99`,
    },
  ],
  URL_IMG: `https://image.tmdb.org/t/p/original`,
  getURLNewVideo(id) {
    return `https://www.youtube.com/embed/${id}?controls=0`;
  },
  getNewVideo(id) {
    return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=2e655e1820b46a878e65539706585e5d&language=en-US`;
  },
};

export default urlRequest;
