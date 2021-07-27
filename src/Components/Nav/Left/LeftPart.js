import React from "react";
// import FilterIcon from "@material-ui/icons/";
import CachedIcon from '@material-ui/icons/Cached';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Filter } from "@fortawesome/free-solid-svg-icons/faFilter";
import "./LeftPart.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  leftPart: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontWeight:"500",
    fontSize:"large",
    margin:"1em"
  },
  ButtonList:{
    display:"flex",
  }
});

function LeftPart() {
  const classes = useStyles();
  return (
    <div className={classes.leftPart}>
      <span className={classes.title} >Tickets</span>
      <div className={classes.ButtonList} id="buttonList" >
      <button style={{backgroundColor:"green",color:"white"}} >all</button>
      <button>only my tickets</button>
      <button>recently updated</button>
      {/* <button><CachedIcon fontSize="small" /></button> */}
      <button><FontAwesomeIcon icon="filter" color="black" /></button>
      <button> <CachedIcon fontSize="small" color="black" /></button>
      </div>
    </div>
  );
}

export default LeftPart;
