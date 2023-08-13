/* eslint-disable react/prop-types */
import "./details.css";
import {
  faAngleDown,
  faAngleUp,
  faTrash,
  faGraduationCap,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EducationForm from "./EducationForm";
import exampleData from "../data";

export default function Education(props) {
  const [active, setActive] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [education, setEducation] = useState(exampleData.sections.educations);
  const icon = active ? faAngleUp : faAngleDown;

  const handleClick = () => {
    setActive(!active);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const saveHandler = (obj) => {
    setEducation((prevEduc) => [...prevEduc, obj]);
    setShowForm(false);
  };

  const cancelHandler = () => {
    setShowForm(false);
  };

  const deleteHandler = (id) => {
    const educationCopy = [...education];

    setEducation(educationCopy.filter((element) => element.id !== id));
  };

  return (
    <div className="education details">
      <div className="title">
        <h2>
          <span>
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
          Education
        </h2>
        <FontAwesomeIcon icon={icon} onClick={handleClick} />
      </div>

      {active &&
        showForm === false &&
        education.map((element) => {
          return (
            <div key={element.id} className="elements">
              <h4>{element.school}</h4>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  deleteHandler(element.id);
                  props.clickHandler(
                    education.filter((item) => item.id !== element.id)
                  );
                }}
              />
            </div>
          );
        })}

      {active && showForm === false && (
        <div className="add">
          <button className="addBtn" onClick={showFormHandler}>
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            Add Education
          </button>
        </div>
      )}
      {showForm && active && (
        <EducationForm
          clickHandler={(obj) => {
            saveHandler(obj);
            props.clickHandler([...education, obj]);
          }}
          cancelHandler={cancelHandler}
        />
      )}
    </div>
  );
}
