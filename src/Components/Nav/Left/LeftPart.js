import React from "react";
// import FilterIcon from "@material-ui/icons/";
import CachedIcon from '@material-ui/icons/Cached';

function LeftPart() {
  return (
    <div className="flex-row">
      <h3>Tickets</h3>
      <div>
      <button>all</button>
      <button>only my tickets</button>
      <button>recently updated</button>
      {/* <button><FilterIcon /></button> */}
      <button><CachedIcon /></button>
      </div>
    </div>
  );
}

export default LeftPart;
