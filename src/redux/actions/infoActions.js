import { INFO_DATA_FETCHED } from "../types";
import { infoData } from "../../mockData/infoData";

export const infoAction = () => async (dispatch) => {
  try {
    const fetchedData = await Promise.resolve(infoData);
    dispatch({
      type: INFO_DATA_FETCHED,
      payload: fetchedData,
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
