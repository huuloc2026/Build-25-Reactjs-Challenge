import React, { useEffect, useState } from "react";

const ColorRandom = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };
  const handleCreateRandomRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRGBColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{
        witdh: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX COLOR</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB COLOR</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? () => handleCreateRandomHexColor()
            : () => handleCreateRandomRGBColor()
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "60px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
};

export default ColorRandom;
