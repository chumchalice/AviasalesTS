import { combineReducers } from "redux";
import { sideFilterReducer } from "./sideFilterReducer";
import { fetchTicketReducer } from "./fetchTicketReducer";
import { mainFilterReducer } from "./mainFilterReducer";
import { ticketPagesReducer } from "./ticketPages";

export const rootReducer = combineReducers({
  sideFilterReducer,
  fetchTicketReducer,
  mainFilterReducer,
  ticketPagesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
