import { BAR_DATA_FETCHED } from "../types";
import { barData } from "../../mockData/barData";

export const barAction = () => async (dispatch) => {
  try {
    const fetchedData = await Promise.resolve(barData);
    dispatch({
      type: BAR_DATA_FETCHED,
      payload: { barData: fetchedData },
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
