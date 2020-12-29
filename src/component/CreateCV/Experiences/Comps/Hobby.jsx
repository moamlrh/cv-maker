import React, { useState } from "react";
import { Close, Edit, Menu } from "@material-ui/icons";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "react-uuid";

const Hobby = ({ showEditor, setShowEditor, addAnotherHobby }) => {
  const [dragItems, setDragItems] = useState([]);
  const [value, setValue] = useState("");
  const [btnText, setBtnText] = useState({ id: null, text: true });
  const saveNewHobby = (e) => {
    const newHobby = { id: uuid(), text: value };
    setDragItems([...dragItems, newHobby]);
    setValue("");
  };
  const removeItem = (ind) => {
    setDragItems([...dragItems.filter((it, i) => i !== ind)]);
  };
  const handleEditItem = (i) => {
    setShowEditor(true);
    setValue(dragItems[i].text);
    setBtnText({ id: i, text: false });
  };
  const editButton = () => {
    const newItems = dragItems.map((it, i) => {
      if (btnText.id === i) return { text: value, id: it.id };
    });
    setValue("");
    setBtnText({ id: 0, text: true });
    setDragItems([...newItems]);
  };
  const handleOnDragEnd = (res) => {
    if (!res.destination) return;
    const newItems = Array.from(dragItems);
    const [reorderedItem] = newItems.splice(res.source.index, 1);
    newItems.splice(res.destination.index, 0, reorderedItem);
    setDragItems(newItems);
  };
  return (
    <div className="hobby">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="items">
          {(provided) => (
            <div
              className="items"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {dragItems.map((item, i) => (
                <Draggable key={item.id} draggableId={item.id} index={i}>
                  {(provided, snap) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div
                        className="item"
                        style={{
                          backgroundColor: snap.isDragging
                            ? "rgba(0, 0, 0, 0.105)"
                            : "white",
                        }}
                      >
                        <h3
                          style={{
                            color: snap.isDragging ? "black" : "grey",
                          }}
                        >
                          {item.text}
                        </h3>
                        <div>
                          <Close onClick={() => removeItem(i)} />
                          <Edit onClick={() => handleEditItem(i)} />
                          <Menu />
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {showEditor && (
        <div className="input-add-new">
          <input
            type="text"
            placeholder="e.g: Football.."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="icons">
            <button>delete</button>
            {btnText.text ? (
              <button onClick={saveNewHobby}>Save</button>
            ) : (
              <button onClick={editButton}>Edit</button>
            )}
          </div>
        </div>
      )}
      <div className="input">
        <button onClick={addAnotherHobby}>Add another hobby</button>
      </div>
    </div>
  );
};

export default Hobby;
