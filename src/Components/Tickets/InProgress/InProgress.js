import React from "react";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";

function InProgress(props) {

  const handleOnDragEnd = (item)=>{
    if(!item.destination) return
    const items = Array.from(props.InProgressData);
    const [reorderedItem] = items.splice(item.source.index, 1);
    items.splice(item.destination.index,0,reorderedItem)
    props.setInProgressData(items)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="inprogress" >
        {(provide)=>(
          <div className="grid-column" {...provide.droppableProps} ref={provide.innerRef} >
          {/* Each orders in inprogress orders box */}
            {
              props.InProgressData.map((item,index)=>(
                <Draggable draggableId={item.id} index={index} key={item.id}>
                  {(provided)=>(
                      <div className="each-grid" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} >
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

export default InProgress;
