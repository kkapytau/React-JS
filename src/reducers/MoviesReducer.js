import { GET_MOVIE_LIST, GET_MOVIE_DATA } from '../constants/Constants';

const initialState = {
  movies: []
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_LIST:
      return { ...state, movies: action.payload };
    case GET_MOVIE_DATA:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
}
