import { userActionTypes } from "../../types/sideFilter";

export function sideFilter(
  options: (string | number | boolean)[],
  all: boolean,
  indetermine: boolean
) {
  return {
    type: userActionTypes.ITEM,
    payload: {
      options,
      all,
      indetermine,
    },
  };
}
