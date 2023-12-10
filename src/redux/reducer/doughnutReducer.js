import { DOUGHNUT_DATA_FETCHED } from "../types";

const initialState = {
  doughnutData: [],
  dataPresent: false
};

export default function doughnutReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === DOUGHNUT_DATA_FETCHED) {
    return {
      ...state,
      doughnutData: payload.doughnutData,
      dataPresent: true
    };
  } else {
    return state;
  }
}