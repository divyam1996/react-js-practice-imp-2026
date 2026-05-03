import React, { useState } from "react";

 const data = [
    { id: 1, title: "Section 1", content: "Content of Section 1" },
    { id: 2, title: "Section 2", content: "Content of Section 2" },
    { id: 3, title: "Section 3", content: "Content of Section 3" },
    ];

export default function Accordion() {
  const [activeId, setActiveId] = useState(null);
  
  const toggle = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      {data.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", marginBottom: "10px" }}>
          
          {/* Header */}
          <div
            onClick={() => toggle(item.id)}
            style={{
              padding: "10px",
              background: "#f5f5f5",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {item.title}
          </div>

          {/* Content */}
          {activeId === item.id && (
            <div style={{ padding: "10px" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}