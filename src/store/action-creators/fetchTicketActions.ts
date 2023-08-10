import { Dispatch } from "redux";
import { ticketAction, ticketActionTypes } from "../../types/ticket";

const fetchTickets = async (id: number) => {
  let tickets: { tickets: any[]; stop: boolean } = {
    tickets: [],
    stop: false,
  };

  try {
    const ticketRes = await fetch(
      `https://aviasales-test-api/tickets?searchId=${id}`
    );
    tickets = await ticketRes.json();
    return tickets;
  } catch (e) {
    let moreTickets: any = await fetchTickets(id);
    return moreTickets;
  }
};

export const initialTickets = () => {
  return async (dispatch: Dispatch<ticketAction>) => {
    dispatch({ type: ticketActionTypes.LOAD });

    const response = await fetch(
      "https://aviasales-test-api/search"
    );
    const { searchId } = await response.json();
    let loading = true;
    while (loading) {
      const { tickets, stop } = await fetchTickets(searchId);
      loading = !stop;
      if (loading) {
        dispatch({ type: ticketActionTypes.FETCH, payload: tickets });
      }
    }
  };
};
