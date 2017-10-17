import { GET_FILTER_DATA } from '../constants/Constants';

const initialState = {
  filterName: 'movie'
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILTER_DATA:
      return { ...state, filterName: action.payload };
    default:
      return state;
  }
}
