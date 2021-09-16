import { initial } from "lodash-es";
import { GET_WEATHER_FULFILLED, GET_WEATHER_REJECTED } from "../actions/types";

const initialState = {

}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_FULFILLED:
      return {

      };
    case GET_WEATHER_REJECTED:
      return {

      };
    default:
      return state;
  }
}
