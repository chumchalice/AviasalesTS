export interface ITicketInterface {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    }
  ];
}

export interface Isegments {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
}
export interface TicketProps {
  price: number;
  carrier: string;
  segments: Isegments[];
}
