import {
  ticketFetchState,
  ticketActionTypes,
  ticketAction,
} from "../../types/ticket";

const initialState: ticketFetchState = {
  data: [],
  loading: false,
};
export const fetchTicketReducer = (
  state = initialState,
  action: ticketAction
): ticketFetchState => {
  switch (action.type) {
    case ticketActionTypes.LOAD:
      return {
        ...state,
        loading: true,
      };

    case ticketActionTypes.FETCH:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
