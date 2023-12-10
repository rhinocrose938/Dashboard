import { INFO_DATA_FETCHED } from "../types";

const initialState = {
    activeUsers: 0,
    totalUsers: 0,
    applications: 0,
    dataPresent: false
};

export default function infoReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === INFO_DATA_FETCHED) {
    return {
      ...state,
      ...payload,
      dataPresent: true
    };
  } else {
    return state;
  }
}
