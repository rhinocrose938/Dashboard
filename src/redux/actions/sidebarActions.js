import { SIDEBAR_DATA_FETCHED } from "../types";
import { sidebarData } from "../../mockData/sidebarData";

export const sidebarAction = () => async (dispatch) => {
  try {
    const fetchedData = await Promise.resolve(sidebarData);
    dispatch({
      type: SIDEBAR_DATA_FETCHED,
      payload: fetchedData,
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};