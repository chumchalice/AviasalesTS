import { ticketPagesType } from "../../types/ticketPages";

export function addTicketPages(value: number) {
  return {
    type: ticketPagesType.PAGES,
    payload: value,
  };
}
