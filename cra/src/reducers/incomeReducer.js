import { FETCH_INCOME } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_INCOME:
      return action.payload || [];
    default:
      return state;
  }
}