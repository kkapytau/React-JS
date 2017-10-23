import { GET_FILTER_DATA, GET_SEARCH_TEXT } from '../constants/Constants';

const initialState = {
  searchType: 'movie',
  query: ''
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILTER_DATA:
      return { ...state, searchType: action.payload };
    case GET_SEARCH_TEXT:
      return { ...state, query: action.payload };
    default:
      return state;
  }
}
