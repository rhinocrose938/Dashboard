import { PIE_DATA_FETCHED } from "../types";
import { pieData } from "../../mockData/pieData";

export const pieAction = () => async (dispatch) => {
  try {
    const fetchedDAta = await Promise.resolve(pieData);
    dispatch({
      type: PIE_DATA_FETCHED,
      payload: { pieData: fetchedDAta },
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
