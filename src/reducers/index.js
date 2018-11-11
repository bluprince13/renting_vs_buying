import { combineReducers } from "redux";
import inputReducer from "./reducerInput";

const rootReducer = combineReducers({
  input: inputReducer,
});

export default rootReducer;