import React, { useState } from "react";
import data from "./data.json";

function FileFolderStructure({ fileData }) {
  const [openMap, setOpenMap] = useState({});

  

  const toggleFolder = (id) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  console.log("component render", openMap);

  return (
    <div>
      {fileData.map((node) => (
        <div key={node.id} style={{ marginLeft: "20px" }}>
          <div
            onClick={() => node.isfolder && toggleFolder(node.id)}
            style={{ cursor: node.isfolder ? "pointer" : "default" }}
          >
            {node.isfolder
              ? openMap[node.id]
                ? "-"
                : "+"
              : ""}
            {node.name}
          </div>

          {node.isfolder && openMap[node.id] && (
            <FileFolderStructure fileData={node.children} />
          )}
        </div>
      ))}
    </div>
  );
}
export default FileFolderStructure;