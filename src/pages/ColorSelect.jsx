import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

export default function ColorSelect() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const switchColor = () => {
    dispatch(changeColor(color));
  };
  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <br />
      <button className="btn btn-secondary" onClick={() => switchColor(color)}>
        Change Color
      </button>
    </div>
  );
}
