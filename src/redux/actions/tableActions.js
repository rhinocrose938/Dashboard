import { TABLE_DATA_FETCHED } from "../types";
import { tableHeaderData, candidatesData } from "../../mockData/tableData";

export const tableAction = () => async (dispatch) => {
  try {
    const fetchedTableHeaderData = await Promise.resolve(tableHeaderData);
    const fetchedCandidatesData = await Promise.resolve(candidatesData);
    dispatch({
      type: TABLE_DATA_FETCHED,
      payload: {
        tableHeaderData: fetchedTableHeaderData,
        candidatesData: fetchedCandidatesData,
      },
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
