import { mainFilterActionTypes } from "../../types/mainFilter";

export function mainFilterAction(value: string) {
  return {
    type: mainFilterActionTypes.SWITCH,
    payload: value,
  };
}
