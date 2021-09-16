import { CHANGE_CITY } from '../actions/types';

const initialState = {
  cityChoice: 'Tokyo'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        cityChoice: action.payload,
      };
    default:
      return state;
  }
}
