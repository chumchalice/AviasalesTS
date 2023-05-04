import { ITicketInterface } from "../interfaces/ticketInterface";

export interface ticketFetchState {
  data: ITicketInterface[];
  loading: boolean;
}

export enum ticketActionTypes {
  FETCH = "FETCH",
  LOAD = "FETCH_LOAD",
}

interface ticketFetchAction {
  type: ticketActionTypes.FETCH;
  payload: any[];
}

interface ticketFetchLOAD {
  type: ticketActionTypes.LOAD;
}

export type ticketAction = ticketFetchAction | ticketFetchLOAD;
