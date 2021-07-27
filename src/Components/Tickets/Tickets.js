import React from "react";
import Received from "./Received/Received";
import InProgress from "./InProgress/InProgress";
import "./Tickets.css";

function Tickets() {
  return (
    <div className="grid tickets" >
      <div>
        <h3>received orders (19) </h3>
        <Received />
      </div>
      <div>
        <h3>order in progress (1) </h3>
        <InProgress />
      </div>
      <div>
        <h3>order is ready for delivery (0) </h3>
      </div>
      <div>
        <h3>order picked up (0) </h3>
      </div>
    </div>
  );
}

export default Tickets;
