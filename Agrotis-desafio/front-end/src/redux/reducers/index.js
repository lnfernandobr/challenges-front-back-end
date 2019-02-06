import { combineReducers } from "redux";
import { ALERT } from "../constants/action-types";

const viewAlert = (state = false, action) => {
  if (action.type === ALERT) {
    return action.payload;
  }

  return state;
};

export const rootReducers = combineReducers({
  viewAlert
});
