import classes from "../index.module.scss";
import Ticket from "../ticket/ticket";
import React, { useMemo } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { ITicketInterface } from "../../interfaces/ticketInterface";
import nextId from "react-id-generator";

// import { useMemo } from "react";
const TicketList: React.FC = () => {
  const { data, loading } = useTypedSelector(
    (state) => state.fetchTicketReducer
  );

  const { value } = useTypedSelector((state) => state.mainFilterReducer);
  const { options } = useTypedSelector((state) => state.sideFilterReducer);
  const { pages } = useTypedSelector((state) => state.ticketPagesReducer);
  const { initialTickets } = useActions();
  const { addTicketPages } = useActions();

  const codificationStops = (el: any) => {
    switch (el) {
      case "Без пересадок":
        return 0;
      case "1 пересадка":
        return 1;
      case "2 пересадки":
        return 2;
      case "3 пересадки":
        return 3;
      default:
        return 0;
    }
  };
  type transfersType = (string | number | boolean)[];

  const checkFiltered = (transfers: transfersType) => {
    return transfers.map((el) => codificationStops(el));
  };

  const getFilteredTickets = (
    tickets: ITicketInterface[],
    transfers: number[],
    type: string
  ): ITicketInterface[] => {
    const filteredTickets: ITicketInterface[] = [];

    transfers.forEach((code) => {
      tickets.forEach((ticket) => {
        if (code === ticket.segments[0].stops.length) {
          filteredTickets.push(ticket);
        }
      });
    });

    if (type === "самый дешевый") {
      filteredTickets.sort((a, b) => a.price - b.price);
    }
    if (type === "самый быстрый") {
      filteredTickets.sort(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration)
      );
    }
    return filteredTickets;
  };

  useEffect(() => {
    initialTickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoreTickets = () => {
    addTicketPages(5);
  };

  const filteredArray: ITicketInterface[] = useMemo((): ITicketInterface[] => {
    return getFilteredTickets(data, checkFiltered(options), value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, value, options]);

  return (
    <div className={classes["ticket-menu"]}>
      {loading ? (
        <h1>идет загрузка...</h1>
      ) : filteredArray.length ? (
        filteredArray
          .slice(0, pages)
          .map((el: ITicketInterface) => <Ticket {...el} key={nextId()} />)
      ) : (
        <h2>Рейсы не найдены (╯°□°）╯︵ ┻━┻</h2>
      )}
      {filteredArray.length ? (
        <button onClick={handleMoreTickets} className={classes["more-tickets"]}>
          Показать еще 5 билетов!
        </button>
      ) : null}
    </div>
  );
};

export default TicketList;
