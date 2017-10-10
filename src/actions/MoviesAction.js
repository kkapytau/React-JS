import { GET_MOVIE_LIST, GET_MOVIE_DATA } from '../constants/Constants';

export function getMoviesSuccess(movies) {
  return {
    type: GET_MOVIE_LIST,
    payload: movies
  };
}

export function getMovieData(movie) {
  return {
    type: GET_MOVIE_DATA,
    payload: movie
  };
}
