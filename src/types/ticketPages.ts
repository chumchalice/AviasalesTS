export interface ticketPageState {
  pages: number;
}

export enum ticketPagesType {
  PAGES = "PAGES",
}

interface ticketPagesAction {
  type: ticketPagesType.PAGES;
  payload: number;
}
export type pagesAction = ticketPagesAction;
