import { LINE_DATA_FETCHED } from "../types";
import { loungeData, officeData } from "../../mockData/lineData";

export const lineAction = () => async (dispatch) => {
  try {
    const fetchedLoungeData = await Promise.resolve(loungeData);
    const fetchedOfficeData = await Promise.resolve(officeData);
    dispatch({
      type: LINE_DATA_FETCHED,
      payload: { loungeData: fetchedLoungeData, officeData: fetchedOfficeData },
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
