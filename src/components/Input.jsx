/* eslint-disable react/prop-types */
import { useState } from "react";
import "./input.css";

export default function Input({
  label,
  htmlFor,
  type = "text",
  onChange = null,
  value,
  placeHolder,
}) {
  const [color, setColor] = useState(value);

  const onChangeHandler = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className={type === "color" ? "input-color" : "input"}>
      <label htmlFor={htmlFor}>{label} : </label>
      <input
        type={type}
        id={htmlFor}
        onChange={
          type === "color"
            ? (e) => {
                onChangeHandler(e);
                onChange(e);
              }
            : onChange
        }
        value={type === "color" ? color : value}
        placeholder={placeHolder}
      />
    </div>
  );
}
