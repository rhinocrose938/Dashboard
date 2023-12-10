import { SIDEBAR_DATA_FETCHED } from "../types";

const initialState = {
  userName: '',
  notifications: [],
  dataPresent: false
};

export default function sidebarReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === SIDEBAR_DATA_FETCHED) {
    return {
      ...state,
      userName: payload.userName,
      notifications: payload.notifications,
      dataPresent: true
    };
  } else {
    return state;
  }
}