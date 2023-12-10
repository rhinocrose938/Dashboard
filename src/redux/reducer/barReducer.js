import { BAR_DATA_FETCHED } from "../types";

const initialState = {
  barData: [],
  dataPresent: false
};

export default function barReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === BAR_DATA_FETCHED) {
    return {
      ...state,
      barData: payload.barData,
      dataPresent: true
    };
  } else {
    return state;
  }
}