import React from "react";
// import FilterIcon from "@material-ui/icons/";
import CachedIcon from '@material-ui/icons/Cached';
import Button from '@material-ui/core/Button';
import "./LeftPart.css";

function LeftPart() {
  return (
    <div className="flex-row">
      <h3>Tickets</h3>
      <div>
      <Button style={{backgroundColor:"green",color:"white",marginLeft:"3px" }} >all</Button>
      <Button>only my tickets</Button>
      <Button>recently updated</Button>
      {/* <button><FilterIcon /></button> */}
      <Button endIcon={<CachedIcon />} />
      <Button endIcon={<CachedIcon />} />
      </div>
    </div>
  );
}

export default LeftPart;
