import * as UserActionCreators from "./user";
import * as AppointmentActionCreator from "./appointment";

export default {
  ...UserActionCreators,
  ...AppointmentActionCreator,
};
