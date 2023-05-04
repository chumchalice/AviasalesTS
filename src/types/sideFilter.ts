// import { CheckboxValueType } from "antd/es/checkbox/Group";

export interface sideFilterState {
  options: (string | number | boolean)[];
  all: boolean;
  indetermine: boolean;
}

export enum userActionTypes {
  ITEM = "ITEM",
}

interface userItemAction {
  type: userActionTypes.ITEM;
  payload: {
    options: (string | number | boolean)[];
    all: boolean;
    indetermine: boolean;
  };
}

export type userAction = userItemAction;
