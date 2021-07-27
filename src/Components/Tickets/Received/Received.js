import React from "react";

function Received(props) {
  console.log(props);
  return (
    <div className="grid-column" >
      {
        props.receivedData.map(item=>(
      <div className="each-grid">
        <span>{item.no}<button>{item.response}</button></span>
        <p className="order-no" >{item.orderNo} </p>
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






      {/* <div className="each-grid">
        <span>#26 <button>Response due</button></span>
        <p className="order-no" >Order No: #45 </p>
        <p className="order">Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)</p>
        <div>
          <div className="last-div">
        <span className="time" > due : jun 30,2019 3:39 pm</span>
        <p>Assigned to <span></span></p>
          </div>
        </div>
      </div>
      <div>
        <span>#25 <button>Response due</button></span>
        <p className="order-no">Order No: #201 </p>
        <p className="order">Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)</p>
        <div className="last-div">
        <span className="time">due : may 30,2019 3:39 pm</span>
        <p>Assigned to <span></span></p>
        </div>
      </div>
      <div>
        <span>#24 <button>Response due</button></span>
        <p className="order-no">Order No: #1 </p>
        <p className="order">Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)</p>
        <div className="last-div">
        <span className="time">due : apr 10,2019 3:39 pm</span>
        <p>Assigned to <span></span></p>
        </div>
      </div>
      <div>
        <span>#23 <button>Response due</button></span>
        <p className="order-no">Order No: #600 </p>
        <p className="order">Paratha Side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)</p>
        <div className="last-div" >
        <span className="time">due : jan 03,2019 3:39 am</span>
        <p>Assigned to <span></span></p>
        </div>
      </div>
     */}
    </div>
  );
}

export default Received;
