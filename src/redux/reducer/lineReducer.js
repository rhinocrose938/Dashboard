import { LINE_DATA_FETCHED } from "../types";

const initialState = {
  loungeData: [],
  officeData: [],
  dataPresent: false
};

export default function lineReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === LINE_DATA_FETCHED) {
    return {
      ...state,
      loungeData: payload.loungeData,
      officeData: payload.officeData,
      dataPresent: true
    };
  } else {
    return state;
  }
}
