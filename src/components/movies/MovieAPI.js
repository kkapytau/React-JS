import axios from 'axios';
import 'url-search-params-polyfill';
import { getMoviesSuccess, getMovieData } from '../../actions/MoviesAction';
import { getFilterData, getSearchText } from '../../actions/FilterActions';

let moviesData = [];

export function getMovies(params) {
  return async (dispatch) => {
    await axios.get(`https://api.themoviedb.org/3/search/${params.searchType}?api_key=813f19e9af5835eae0cc65011eff831b&language=en-US&page=1&include_adult=false&query=${params.query}`)
      .then((response) => {
        if (params.searchType === 'movie') {
          moviesData = response.data.results;
        } else {
          const tmp = response.data.results[0];
          moviesData = (tmp) ? tmp.known_for : [];
        }
        dispatch(getMoviesSuccess(moviesData));
        dispatch(getFilterData(params.searchType));
        dispatch(getSearchText(decodeURIComponent(params.query)));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}

export function getMovie(id) {
  return async (dispatch) => {
    await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=813f19e9af5835eae0cc65011eff831b&language=en-US`)
      .then((response) => {
        dispatch(getMovieData(response.data));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}

export function getStaticMovie(id) {
  return (dispatch) => {
    dispatch(getMovieData(moviesData.filter(movie => movie.id === id)[0]));
  };
}

export function getStaticMoviesLength() {
  return moviesData.length;
}

export function getSearchData(matchParams, search) {
  const params = new URLSearchParams(search);
  return {
    searchType: params.get('searchType'),
    query: decodeURIComponent((params.get('query')) ? params.get('query') : matchParams.query)
  };
}
