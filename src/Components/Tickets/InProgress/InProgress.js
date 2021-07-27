import React from "react";

function InProgress() {
  return (
    <div className="grid-column" >
      <div className="each-grid">
        <span>#27 <button>Response due</button></span>
        <p className="order-no" >Order No: #45 </p>
        <p className="order">Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)</p>
        <div>
          <div className="last-div">
        <span className="time" > due : jun 30,2019 3:39 pm</span>
        <p>Assigned to <span></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InProgress;
