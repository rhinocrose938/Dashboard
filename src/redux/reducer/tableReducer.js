import { TABLE_DATA_FETCHED } from "../types";

const initialState = {
  tableHeaderData: [],
  candidatesData: [],
  dataPresent: false
};

export default function tableReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === TABLE_DATA_FETCHED) {
    return {
      ...state,
      tableHeaderData: payload.tableHeaderData,
      candidatesData: payload.candidatesData,
      dataPresent: true
    };
  } else {
    return state;
  }
}