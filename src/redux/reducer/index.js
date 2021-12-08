import { combineReducers } from "redux";

import getCarsReducer from "./getCarsReducer";


const rootReducer = combineReducers({
  getCarsReducer,
});

export default rootReducer;