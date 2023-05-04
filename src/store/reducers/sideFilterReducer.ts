import {
  sideFilterState,
  userAction,
  userActionTypes,
} from "../../types/sideFilter";

const initialState: sideFilterState = {
  options: [],
  all: true,
  indetermine: false,
};

export const sideFilterReducer = (
  state = initialState,
  action: userAction
): sideFilterState => {
  switch (action.type) {
    case userActionTypes.ITEM:
      return {
        ...state,
        options: [...action.payload.options],
        all: action.payload.all,
        indetermine: action.payload.indetermine,
      };

    // case "ASYNC":
    //   return {};
    default:
      return state;
  }
};
