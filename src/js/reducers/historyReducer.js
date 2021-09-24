import { UPDATE_HISTORY } from '../actions/types';

const initialState = {
  history: [{
    cityFullName: '',
    currentDate: '',
    currentTime: ''
  },
  {
    cityFullName: '',
    currentDate: '',
    currentTime: ''
  },
  {
    cityFullName: '',
    currentDate: '',
    currentTime: ''
  },
  {
    cityFullName: '',
    currentDate: '',
    currentTime: ''
  },
  {
    cityFullName: '',
    currentDate: '',
    currentTime: ''
  },
  ]
};


export default function historyReducer(state = initialState, action) {

  switch (action.type) {
    case UPDATE_HISTORY:
      // console.log(action.payload);
      const historyCopy = initialState.history;
      historyCopy.shift();
      historyCopy.push(action.payload);
      // console.log('historyCopy: ', historyCopy);
      return ({
        history: historyCopy
      });
    default:
      return state;
  }
}
