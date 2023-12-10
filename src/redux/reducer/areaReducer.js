import { AREA_DATA_FETCHED } from "../types";

const initialState = {
  areaData: [],
  dataPresent: false
};

export default function areaReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === AREA_DATA_FETCHED) {
    return {
      ...state,
      areaData: payload.areaData,
      dataPresent: true
    };
  } else {
    return state;
  }
}
