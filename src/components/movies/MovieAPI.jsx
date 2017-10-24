import axios from 'axios';
import { getMoviesSuccess, getMovieData } from '../../actions/MoviesAction';

let moviesData = [];

export function getMovies(params) {
  return (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/search/${params.searchType}?api_key=813f19e9af5835eae0cc65011eff831b&language=en-US&page=1&include_adult=false&query=${params.query}`)
      .then((response) => {
        moviesData = (params.searchType === 'movie') ? response.data.results : response.data.results[0].known_for;
        dispatch(getMoviesSuccess(moviesData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getStaticMovie(id) {
  return (dispatch) => {
    dispatch(getMovieData(moviesData.filter(movie => movie.id === id)[0]));
  };
}

export function getStaticMoviesData() {
  return moviesData.length;
}

export function getSearchData(matchParams, search) {
  const params = new URLSearchParams(search);

  return {
    searchType: params.get('searchType'),
    query: (params.get('query')) ? params.get('query') : matchParams.query
  };
}

export function getMovie(id) {
  return (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=813f19e9af5835eae0cc65011eff831b&language=en-US`)
      .then((response) => {
        dispatch(getMovieData(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
