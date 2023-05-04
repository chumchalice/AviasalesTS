import * as sideFilterActions from "./sideFilterActions";
import * as fetchTicketActions from "./fetchTicketActions";
import * as mainFilterActions from "./mainFilterActions";
import * as ticketPagesActions from "./ticketPagesActions";

const AllActions = {
  ...sideFilterActions,
  ...fetchTicketActions,
  ...mainFilterActions,
  ...ticketPagesActions,
};

export default AllActions;
