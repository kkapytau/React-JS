import axios from 'axios';
import { getMoviesSuccess, getMovieData } from '../../actions/MoviesAction';

let moviesData = [];

export function getMovies(params) {
  return (dispatch) => {
    axios.get('https://netflixroulette.net/api/api.php', {
      params
    })
      .then((response) => {
        let tmpMoviesData = response.data;
        if (!Array.isArray(response.data)) {
          tmpMoviesData = [response.data];
        }
        moviesData = tmpMoviesData;
        dispatch(getMoviesSuccess(tmpMoviesData));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getMoviesSuccess([]));
      });
  };
}

export function getMovie(id) {
  return (dispatch) => {
    dispatch(getMovieData(moviesData.filter(movie => movie.unit === id)[0]));
  };
}
