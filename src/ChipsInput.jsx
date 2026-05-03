import React, { useState } from "react";

export default function ChipsInput() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setChips((prev) => [...prev, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (indexToRemove) => {
    setChips((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Chips Input</h3>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter"
          style={{ border: "none", outline: "none" }}
        />
      </div>
      {chips.map((chip, index) => (
          <div
            key={index}
            style={{
              padding: "5px 10px",
              background: "#eee",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {chip}
            <span
              onClick={() => removeChip(index)}
              style={{ cursor: "pointer" }}
            >
              x
            </span>
          </div>
        ))}
    </div>
  );
}