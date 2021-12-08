import { initialState } from "../store/initialState";
const getCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARS_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_CARS_SUCCESS":
        console.log("yessss")
      return {
        ...state,
        loading: false,
        carList: action.payload,
      };
    case "FETCH_CARS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    default:
      return state;
  }
};
export default getCarsReducer;