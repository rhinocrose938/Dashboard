import { PIE_DATA_FETCHED } from "../types";

const initialState = {
  pieData: [],
  dataPresent: false
};

export default function pieReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === PIE_DATA_FETCHED) {
    return {
      ...state,
      pieData: payload.pieData,
      dataPresent: true
    };
  } else {
    return state;
  }
}