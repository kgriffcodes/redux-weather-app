import { UPDATE_HISTORY } from '../actions/types';

const initialState = {
  history: []
};

export default function historyReducer(state = initialState, action) {
  const historyCopy = initialState.history;

  switch (action.type) {
    case UPDATE_HISTORY:
      return (historyCopy.push(action.payload));
    default:
      return state;
  }
}
