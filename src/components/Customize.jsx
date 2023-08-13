/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./details.css";
import {
  faAngleDown,
  faAngleUp,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Input from "./Input";

export default function Customize(props) {
  const [active, setActive] = useState(false);
  const icon = active ? faAngleUp : faAngleDown;

  return (
    <div className="customize">
      <div className="color details">
        <div className="title">
          <h2>
            {" "}
            <span>
              <FontAwesomeIcon icon={faDroplet} />
            </span>
            Colors
          </h2>
          <FontAwesomeIcon icon={icon} onClick={() => setActive(!active)} />
        </div>

        {active ? (
          <div className="colors">
            <Input
              label="Personal Background Color"
              type="color"
              htmlFor="personal-bgColor"
              className="color"
              onChange={(e) =>
                props.onChangeHandler(e, "personalBackgroundColor")
              }
              value={props.colors.personalBackgroundColor}
            />
            <Input
              label="Personal Text Color"
              type="color"
              htmlFor="personal-textColor"
              className="color"
              onChange={(e) => props.onChangeHandler(e, "personalTextColor")}
              value={props.colors.personalTextColor}
            />
            <Input
              label="Sections Background Color"
              type="color"
              htmlFor="sections-bgColor"
              className="color"
              onChange={(e) =>
                props.onChangeHandler(e, "sectionsBackgroundColor")
              }
              value={props.colors.sectionsBackgroundColor}
            />
            <Input
              label="Sections Text Color"
              type="color"
              htmlFor="sections-textColor"
              className="color"
              onChange={(e) => props.onChangeHandler(e, "sectionsTextColor")}
              value={props.colors.sectionsTextColor}
            />
            <Input
              label="Line Color"
              type="color"
              htmlFor="line-color"
              className="color"
              onChange={(e) => props.onChangeHandler(e, "lineColor")}
              value={props.colors.lineColor}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
