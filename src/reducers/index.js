import { combineReducers } from "redux";
import inputReducer from "./reducer_input";

const rootReducer = combineReducers({
  input: inputReducer,
});

export default rootReducer;