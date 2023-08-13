/* eslint-disable react/prop-types */
import "./details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faPlus,
  faTrash,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import exampleData from "../data";

export default function Experience(props) {
  const [active, setActive] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [experiences, setExperiences] = useState(
    exampleData.sections.experiences
  );

  const icon = active ? faAngleUp : faAngleDown;

  const cancelHandler = () => {
    setShowForm(false);
  };

  const deleteHandler = (id) => {
    const experienceCopy = experiences.slice();
    experienceCopy.filter((element) => element.id !== id);
    setExperiences(experienceCopy.filter((element) => element.id !== id));
  };

  const saveHandler = (obj) => {
    setExperiences([...experiences, obj]);
    setShowForm(false);
  };

  return (
    <div className="details experience">
      <div className="title">
        <h2>
          <span>
            <FontAwesomeIcon icon={faUserTie} />
          </span>
          Experience
        </h2>
        <FontAwesomeIcon icon={icon} onClick={() => setActive(!active)} />
      </div>

      {active &&
        showForm === false &&
        experiences.map((experience) => {
          return (
            <div key={experience.id} className="elements">
              <h4>{experience.companyName}</h4>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  deleteHandler(experience.id);
                  props.clickHandler(
                    experiences.filter(
                      (element) => element.id !== experience.id
                    )
                  );
                }}
              />
            </div>
          );
        })}

      {active && showForm === false && (
        <div className="add">
          <button className="addBtn" onClick={() => setShowForm(!showForm)}>
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            Add Experience
          </button>
        </div>
      )}

      {active && showForm && (
        <ExperienceForm
          cancelHandler={cancelHandler}
          saveHandler={(obj) => {
            saveHandler(obj);
            props.clickHandler([...experiences, obj]);
          }}
        />
      )}
    </div>
  );
}
