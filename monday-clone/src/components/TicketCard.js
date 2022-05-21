import { Link } from "react-router-dom";
import AvatarDiplay from "./AvatarDisplay.js";
import StatusDisplay from "./StatusDisplay.js";
import PriorityDisplay from "./PriorityDisplay.js";
import ProgressDisplay from "./ProgressDisplay.js";
import DeleteBlock from "./DeleteBlock.js";

const TicketCard = ({ color, ticket }) => {
  return (
    <div className="ticket-card">
      <Link to={"/ticket/${ticket.documentId}"} id="link">
        <div className="ticket-color" style={{ backgroundColor: color }}></div>
        <h3>{ticket.title}</h3>
        <AvatarDiplay ticket={ticket} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority} />
        <ProgressDisplay progress={ticket.progress} />
      </Link>
      <DeleteBlock />
    </div>
  );
};

export default TicketCard;
