export interface mainFilterState {
  option: boolean;
  value: string;
}

export enum mainFilterActionTypes {
  SWITCH = "SWITCH",
}

export type mainFilterAction = {
  type: mainFilterActionTypes.SWITCH;
  payload: string;
};
