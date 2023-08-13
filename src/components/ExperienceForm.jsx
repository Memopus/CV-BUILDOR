/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "./Input";
import "./form.css";
import uniqid from "uniqid";

export default function ExperienceForm(props) {
  const [experience, setExperience] = useState({ id: uniqid() });

  const changeHandler = (e, key) => {
    setExperience({ ...experience, [key]: e.target.value });
  };

  return (
    <div className="inputs">
      <Input
        label="Company Name"
        id="companyName"
        htmlFor="companyName"
        onChange={(e) => changeHandler(e, "companyName")}
        placeHolder="Company Name"
      />
      <Input
        label="Position"
        id="position"
        htmlFor="position"
        onChange={(e) => changeHandler(e, "position")}
        placeHolder="Position"
      />
      <div className="date">
        <Input
          label="Start Date"
          id="startDate"
          onChange={(e) => changeHandler(e, "startDate")}
          placeHolder="Start Date"
        />
        <Input
          label="End Date"
          id="endDate"
          onChange={(e) => changeHandler(e, "endDate")}
          placeHolder="End Date"
        />
      </div>
      <Input
        label="Location"
        id="location"
        onChange={(e) => changeHandler(e, "location")}
        placeHolder="Location"
      />
      <div className="description">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          onChange={(e) => changeHandler(e, "description")}
          placeholder="Description"
        ></textarea>
      </div>

      <div className="buttons">
        <button className="save" onClick={() => props.saveHandler(experience)}>
          Save
        </button>
        <button className="cancel" onClick={props.cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
}
