/* eslint-disable react/prop-types */
import Input from "./Input";
import uniqid from "uniqid";
import { useState } from "react";
import "./form.css";

export default function EducationForm({ clickHandler, cancelHandler }) {
  const [infos, setInfos] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    id: uniqid(),
  });

  const onChangeHandler = (e, key) => {
    setInfos({ ...infos, [key]: e.target.value });
  };
  return (
    <div className="inputs">
      <Input
        label="School"
        id="school"
        onChange={(e) => onChangeHandler(e, "school")}
        placeHolder="School"
      />
      <Input
        label="Degree"
        id="degree"
        onChange={(e) => onChangeHandler(e, "degree")}
        placeHolder="Degree"
      />
      <div className="date">
        <Input
          label="Start Date"
          id="startDate"
          onChange={(e) => onChangeHandler(e, "startDate")}
          placeHolder="Start Date"
        />
        <Input
          label="End Date"
          id="endDate"
          onChange={(e) => onChangeHandler(e, "endDate")}
          placeHolder="End Date"
        />
      </div>
      <Input
        label="Location"
        id="location"
        onChange={(e) => onChangeHandler(e, "location")}
        placeHolder="Location"
      />

      <div className="buttons">
        <button
          className="save"
          onClick={() => {
            clickHandler(infos);
          }}
        >
          Save
        </button>
        <button className="cancel" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
}
