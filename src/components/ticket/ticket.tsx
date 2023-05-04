import classes from "../index.module.scss";
import { TicketProps } from "../../interfaces/ticketInterface";
import { format, add } from "date-fns";
import intervalToDuration from "date-fns/intervalToDuration";

const Ticket: React.FC<TicketProps> = ({ price, carrier, segments }) => {
  // console.log(price, carrier, segments);
  const logo = `https://pics.avs.io/99/36/${carrier}.png`;

  const ticketContent = segments.map((ticket) => {
    const rawDuration = intervalToDuration({
      start: 0,
      end: ticket.duration * 10000,
    });

    const departureTime = format(new Date(ticket.date), "hh:mm");
    const arrivalTime = format(
      add(new Date(ticket.date), rawDuration),
      "hh:mm"
    );

    // const departureTimeFrom = format(new Date(ticket.date), "hh:mm");
    // const arrivalTimeFrom = format(
    //   add(new Date(ticket.date), rawDuration),
    //   "hh:mm"
    // );

    const zeroPad = (num: number) => String(num).padStart(2, "0");

    const duration = `${zeroPad(rawDuration.hours!)}ч ${zeroPad(
      rawDuration.minutes!
    )}м`;

    const transfers = (num: number) => {
      if (num > 1) return `Пересадки`;
      else if (num > 4) return `Пересадок`;
      else return `Пересадка`;
    };
    const stops = ticket.stops.length;
    const stopsArr = ticket.stops.toString().replace(",", ", ");

    return (
      <ul className={classes["ticket__content"]}>
        <li className={classes["ticket__item-list"]}>
          <p className={classes["ticket__text_light"]}>
            {`${ticket.origin} - ${ticket.destination}`}
          </p>
          <p
            className={classes["ticket__text_dark"]}
          >{`${departureTime} - ${arrivalTime}`}</p>
        </li>
        <li className={classes["ticket__item-list"]}>
          <p className={classes["ticket__text_light"]}>в пути</p>
          <p className={classes["ticket__text_dark"]}>{duration}</p>
        </li>
        <li className={classes["ticket__item-list"]}>
          <p className={classes["ticket__text_light"]}>{`${
            stops ? stops : ""
          } ${transfers(stops)}`}</p>
          <p className={classes["ticket__text_dark"]}>{stopsArr}</p>
        </li>
      </ul>
    );
  });

  return (
    <div className={classes.ticket}>
      <div className={classes["ticket__info"]}>
        <p className={classes["ticket__price"]}>
          {price.toLocaleString("ru-RU")}Р
        </p>
        <img src={logo} className={classes["avia-logo"]} alt="aviaLogo"></img>
      </div>
      <div className={classes["ticket__content-wrapper"]}>{ticketContent}</div>
    </div>
  );
};
export default Ticket;
