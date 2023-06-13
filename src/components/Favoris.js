import React, { useState } from "react";

function Favoris() {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setDroppedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="drop-container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="drop-message">
        Drag and drop image files here, or click to select files.
      </div>
      <div className="file-list">
        {droppedFiles.map((file, index) => (
          <div key={index} className="file-item">
            <div>{file.name}</div>
            <div>{file.size} bytes</div>
            <div>{file.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoris;
