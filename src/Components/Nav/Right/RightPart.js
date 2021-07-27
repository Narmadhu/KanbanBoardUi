import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RightPart() {
  return (
    <div className="right-nav" >

        {/* <Button endIcon={<SearchIcon />}><input type="text" placeholder="search"  /></Button> */}
        <span className="input-icons" ><input placeholder="search" type="text" /><SearchIcon className="icon" /></span>
        <button><SettingsIcon className="settings" fontSize="small" /> Configuration</button>
        <span>(0-30)</span>
        {/* <button><ArrowBackIosIcon fontSize="small" /></button> */}
        <button><FontAwesomeIcon icon="angle-left" /></button>
        <button><FontAwesomeIcon icon="angle-right" /></button>
        {/* <button> <ArrowForwardIosIcon fontSize="small" /></button> */}
    </div>
  );
}

export default RightPart;
