import React from "react";

const Box = ({ boxColor, boxNumber, handleDrag, handleDrop }) => {
  return (
    <div
      draggable={true}
      id={boxNumber}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      style={{
        backgroundColor: boxColor,
        border: "1px solid",
        borderColor: boxColor,
        borderRadius: "5px",
        color: "#FFF",
        width: "30%",
        height: "100px"
      }}
    >
      {boxNumber}
    </div>
  );
};

export default Box;
