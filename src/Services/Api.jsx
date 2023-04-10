import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '1efdf9e7a9ff7e2165fc0b365172fcf9',
};

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const URLSearchParams = {
  trending: '/trending/movie/week',
  search: '/search/movie',
  movieDetails: '/movie/',
};

export const getTrendingMovies = async () => {
  const response = await axios.get(URLSearchParams.trending);
  return response.data.results;
};

export const getSearchingMovies = async searchFilm => {
  const options = {
    params: { query: searchFilm },
  };
  const response = await axios.get(URLSearchParams.search, options);
  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(URLSearchParams.movieDetails + id);

  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    URLSearchParams.movieDetails + id + '/reviews'
  );

  return response.data.results;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    URLSearchParams.movieDetails + id + '/credits'
  );
  return response.data.cast;
};
