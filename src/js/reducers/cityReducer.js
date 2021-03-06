import { CHANGE_CITY } from '../actions/types';

const initialState = {
  city: 'Tokyo'
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CITY:
      return action.payload;
    default:
      return state;
  }
}
