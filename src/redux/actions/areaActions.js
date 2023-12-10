import { AREA_DATA_FETCHED } from "../types";
import { areaData } from "../../mockData/areaData";

export const areaAction = () => async (dispatch) => {
  try {
    const fetchedData = await Promise.resolve(areaData);
    dispatch({
      type: AREA_DATA_FETCHED,
      payload: { areaData: fetchedData },
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
