import { GET_FILTER_DATA, GET_SEARCH_TEXT } from '../constants/Constants';

export function getFilterData(filterName) {
  return {
    type: GET_FILTER_DATA,
    payload: filterName
  };
}

export function getSearchText(searchText) {
  return {
    type: GET_SEARCH_TEXT,
    payload: searchText
  };
}
