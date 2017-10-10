import { GET_FILTER_DATA } from '../constants/Constants';

export default function getFilterData(filterName) {
  return {
    type: GET_FILTER_DATA,
    payload: filterName
  };
}
