import {
  pagesAction,
  ticketPageState,
  ticketPagesType,
} from "../../types/ticketPages";

const initialState: ticketPageState = {
  pages: 5,
};

export const ticketPagesReducer = (
  state = initialState,
  action: pagesAction
): ticketPageState => {
  switch (action.type) {
    case ticketPagesType.PAGES:
      return {
        ...state,
        pages: state.pages + action.payload,
      };
    default:
      return state;
  }
};
