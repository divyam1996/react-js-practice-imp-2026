import React, { useState, useRef } from "react";

const Draggable = () => {
  const initialData = [
    { id: 1, record: "mango" },
    { id: 2, record: "apple" },
    { id: 3, record: "banana" },
    { id: 4, record: "chicko" },
    { id: 5, record: "munch" },
  ];

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const [item, setItem] = useState(initialData);

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  const handleDrop = () => {
    if (
      dragItem.current === null ||
      dragOverItem.current === null ||
      dragItem.current === dragOverItem.current
    ) {
      return;
    }

    const copied = [...item];

    const [draggedItem] = copied.splice(dragItem.current, 1);
    copied.splice(dragOverItem.current, 0, draggedItem);

    setItem(copied);
  };

  const handleDragEnd = () => {
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <div>
      {item.map((node, index) => (
        <div
          key={node.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragOver={(e) => {
            e.preventDefault();
            dragOverItem.current = index;
          }}
          onDrop={handleDrop} 
          onDragEnd={handleDragEnd} 
          style={{
            padding: "10px",
            margin: "8px 0",
            background: "#eee",
            cursor: "grab",
          }}
        >
          {node.record}
        </div>
      ))}
    </div>
  );
};

export default Draggable;