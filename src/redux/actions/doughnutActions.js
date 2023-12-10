import { DOUGHNUT_DATA_FETCHED } from "../types";
import { doughnutData } from "../../mockData/doughnutData";

export const doughnutAction = () => async (dispatch) => {
  try {
    const fetchedData = await Promise.resolve(doughnutData);
    dispatch({
      type: DOUGHNUT_DATA_FETCHED,
      payload: { doughnutData: fetchedData },
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
