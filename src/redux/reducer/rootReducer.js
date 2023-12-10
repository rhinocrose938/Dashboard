import lineReducer from "./lineReducer";
import areaReducer from "./areaReducer";
import barReducer from "./barReducer";
import tableReducer from "./tableReducer";
import pieReducer from "./pieReducer";
import doughnutReducer from "./doughnutReducer";
import infoReducer from "./infoReducer";
import sidebarReducer from "./sidebarReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  lineReducer,
  areaReducer,
  barReducer,
  tableReducer,
  pieReducer,
  doughnutReducer,
  infoReducer,
  sidebarReducer
});

export default rootReducer;
