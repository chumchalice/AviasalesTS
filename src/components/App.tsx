import imageLogo from "../images/Logo.png";
import Sidefilter from "./sideFilter/side-filter";
import classes from "../components/index.module.scss";
import TicketList from "./ticketList/ticket-list";
import Mainfilter from "./mainFilter/mainfilter";

function App() {
  return (
    <section className={classes.app}>
      <div className={classes.logo}>
        <img alt="logo" src={imageLogo}></img>
      </div>
      <div className={classes["content-wrapper"]}>
        <Sidefilter />
        <div className={classes.main}>
          <Mainfilter />
          <TicketList />
        </div>
      </div>
    </section>
  );
}

export default App;
