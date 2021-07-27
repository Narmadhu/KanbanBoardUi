import React from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RightPart() {
  return (
    <div className="right-nav" >
        <span className="input-icons" ><input placeholder="search" type="text" /><SearchIcon className="icon" /></span>
        <button><SettingsIcon className="settings" fontSize="small" /> Configuration</button>
        <span>(0-30)</span>
        <button><FontAwesomeIcon icon="angle-left" /></button>
        <button><FontAwesomeIcon icon="angle-right" /></button>
    </div>
  );
}

export default RightPart;
