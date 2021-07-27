import React from "react";

function InProgress(props) {
  return (
    <div className="grid-column" >
  {/* Each orders in inprogress orders box */}
    {
      props.InProgressData.map(item=>(
        <div className="each-grid">
        <span>{item.no}<button>{item.response}</button></span>
        <p className="order-no" >{item.orderNo}</p>
        <p className="order">{item.order}</p>
        <div>
          <div className="last-div">
        <span className="time" >{item.time}</span>
        <p>{item.assign}<span></span></p>
          </div>
        </div>
      </div>
      ))
    }

    </div>
  );
}

export default InProgress;
