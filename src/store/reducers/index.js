import { combineReducers } from "redux";
import { userReducer } from "./user";
import { appointmentReducer } from "./appointment";

const rootReducer = combineReducers({
  user: userReducer,
  appointment: appointmentReducer,
});

export default rootReducer;
