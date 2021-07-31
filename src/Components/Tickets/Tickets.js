import React, { useState, useEffect } from "react";
import Received from "./Received/Received";
import InProgress from "./InProgress/InProgress";
import "./Tickets.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Tickets() {

  const [receivedData, setReceivedData] = useState([])
  const [InProgressData, setInProgressData] = useState([])
  let values

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
          setInProgressData(myJson)
        });
    }
    useEffect(()=>{
      getInProgressData()
    },[])

    function getNewReceivedData(newValue){
      setReceivedData(newValue)
    }
    function getNewInProgressData(newValue){
      setInProgressData(newValue)
    }
  
    values =[
      {
        id:"1",
        title: <h3>received orders ({receivedData.length}) </h3> ,
        comp:  <Received receivedData={receivedData} setReceivedData={getNewReceivedData} />
      },
      {
        id:"2",
        title: <h3>order in progress ({InProgressData.length}) </h3>, 
        comp: <InProgress InProgressData={InProgressData} setInProgressData={getNewInProgressData} />
      },
      {
        id:"3",
        title: <h3>order is ready for delivery (0) </h3> ,
        comp: null
      },
      {
        id:"4",
        title:<h3>order picked up (0) </h3>,
        comp: null 
      }    
    ]
    
    function handleOnDragEnd(gridItem){
      console.log(gridItem);
      if(!gridItem.destination) return     
      const gridItems = Array.from(values);
      const [reorderedGridItem] = gridItems.splice(gridItem.source.index,1);
      gridItems.splice(gridItem.destination.index,0,reorderedGridItem)
      values = gridItems
    }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tickets" direction="horizontal" >
        {(provide)=>(
          <div className="grid tickets" {...provide.droppableProps} ref={provide.innerRef} >
          {
            values.map((value,index)=>(  
              <Draggable key={value.id} index={index} draggableId={value.id} >
                {(provided)=>(
                  <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} >      
                    {value.title}      
                    {value.comp}
                  </div> 
                )}
              </Draggable>   
            ))
          }    
          </div>
        )}
      </Droppable>     
    </DragDropContext>
        );
}

export default Tickets;
