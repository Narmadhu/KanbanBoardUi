import React from "react";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";

function Received(props) {
console.log(props);

function handleOnDragEnd(item){
  if(!item.destination) return
  const items = Array.from(props.receivedData);
  const [reorderedItem] = items.splice(item.source.index, 1);
  items.splice(item.destination.index,0,reorderedItem)
  props.setReceivedData(items)
}

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId="characters" direction="vertical"  >

     { (provided)=>(
          <div className="grid-column" {...provided.droppableProps} ref={provided.innerRef} >
          {
            props.receivedData.map((item,index)=>(
          <Draggable key={item.id} index={index} draggableId={item.id}  >
            {(provided)=>(
              <div className="each-grid" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
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

export default Received;

