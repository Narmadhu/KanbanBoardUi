import React from "react";
// import FilterIcon from "@material-ui/icons/";
import CachedIcon from '@material-ui/icons/Cached';
import Button from '@material-ui/core/Button';
import "./LeftPart.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  leftPart: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  ButtonList:{
    marginLeft:"5px",
    display:"flex",
  }
});

function LeftPart() {
  const classes = useStyles();
  return (
    <div className={classes.leftPart}>
      <h3>Tickets</h3>
      <div className={classes.ButtonList} id="buttonList" >
      <button style={{backgroundColor:"green",color:"white"}} >all</button>
      <button>only my tickets</button>
      <button>recently updated</button>
      <button><CachedIcon fontSize="small" /></button>
      <button> <CachedIcon fontSize="small" /></button>
      </div>
    </div>
  );
}

export default LeftPart;
