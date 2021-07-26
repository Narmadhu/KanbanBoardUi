import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

function RightPart() {
  return (
    <div>
        <Button endIcon={<SearchIcon />}><input type="text" placeholder="search"  /></Button>
        <Button startIcon={<SettingsIcon />}>Configuration</Button>
        <span>(0-30)</span>
        <Button endIcon={<ArrowForwardIosIcon />}  startIcon={<ArrowBackIosIcon />} />
    </div>
  );
}

export default RightPart;
