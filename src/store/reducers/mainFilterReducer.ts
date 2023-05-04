import {
  mainFilterAction,
  mainFilterActionTypes,
  mainFilterState,
} from "../../types/mainFilter";

const initialState: mainFilterState = {
  option: true,
  value: "самый дешевый",
};

export const mainFilterReducer = (
  state = initialState,
  action: mainFilterAction
): mainFilterState => {
  //   console.log(state.option);
  switch (action.type) {
    case mainFilterActionTypes.SWITCH:
      return {
        option: !state.option,
        value: action.payload,
      };
    default:
      return state;
  }
};
