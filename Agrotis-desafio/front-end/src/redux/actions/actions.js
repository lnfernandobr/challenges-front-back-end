import { ALERT } from "../constants/action-types";

export const viewAlertAction = payload => {
  return {
    type: ALERT,
    payload
  };
};
