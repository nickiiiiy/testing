import appointmentEnums from "../enums/appointment";

const initialState = {
  appointments: [],
  error: null,
};

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case appointmentEnums.GET_APPOINTMENT:
      return {
        ...state,
        error: null,
      };

    case appointmentEnums.GET_APPOINTMENT_SUCCESS:
      return {
        appointments: action.payload,
        error: null,
      };

    case appointmentEnums.GET_APPOINTMENT_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case appointmentEnums.CREATE_APPOINTMENT:
      return {
        ...state,
        error: null,
      };

    case appointmentEnums.CREATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
        error: null,
      };

    case appointmentEnums.CREATE_APPOINTMENT_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case appointmentEnums.EDIT_APPOINTMENT:
      return {
        ...state,
        error: null,
      };

    case appointmentEnums.EDIT_APPOINTMENT_SUCCESS:
      return {
        ...state,
        appointments: state.appointments.map((appointment) =>
          appointment._id === action.payload._id ? action.payload : appointment
        ),
        error: null,
      };

    case appointmentEnums.EDIT_APPOINTMENT_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case appointmentEnums.DELETE_APPOINTMENT:
      return {
        ...state,
        error: null,
      };

    case appointmentEnums.DELETE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        appointments: [
          ...state.appointments.filter(
            (appointment) => appointment._id !== action.payload._id
          ),
        ],
        error: null,
      };

    case appointmentEnums.DELETE_APPOINTMENT_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
