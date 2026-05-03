import React, { useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const increase = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Progress Bar</h3>

      {/* Container */}
      <div
        style={{
          width: "300px",
          height: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Progress */}
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "green",
            transition: "width 0.3s ease",
          }}
        />
      </div>

      <p>{progress}%</p>

      <button onClick={increase}>Increase</button>
    </div>
  );
}