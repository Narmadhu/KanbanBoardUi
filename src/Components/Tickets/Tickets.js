import React, { useState, useEffect } from "react";
import Received from "./Received/Received";
import InProgress from "./InProgress/InProgress";
import "./Tickets.css";

function Tickets() {

  const [receivedData, setReceivedData] = useState([])
  const [InProgressData, setInProgressData] = useState([])

  //getting dynamic data for received orders
  function getData(){
  
      fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setReceivedData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])

      //getting dynamic data for orders inprogress
    function getInProgressData(){
  
      fetch('inprogress.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setInProgressData(myJson)
        });
    }
    useEffect(()=>{
      getInProgressData()
    },[])

  return (
    <div className="grid tickets" >
      <div>
        <h3>received orders ({receivedData.length}) </h3>
        <Received receivedData={receivedData} />
      </div>
      <div>
        <h3>order in progress ({InProgressData.length}) </h3>
        <InProgress InProgressData={InProgressData} />
      </div>
      <div>
        <h3>order is ready for delivery (0) </h3>
      </div>
      <div>
        <h3>order picked up (0) </h3>
      </div>
    </div>
  );
}

export default Tickets;
