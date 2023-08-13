/* eslint-disable react/prop-types */
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import "./details.css";
import "./form.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function PersonalDetails({ onChange, defaultValues }) {
  const [active, setActive] = useState(false);
  const icon = active ? faAngleUp : faAngleDown;

  return (
    <div className="details">
      <div className="title">
        <h2>
          <span>
            <FontAwesomeIcon icon={faPerson} />
          </span>
          Personal Details
        </h2>
        <FontAwesomeIcon icon={icon} onClick={() => setActive(!active)} />
      </div>
      {active ? (
        <div className="inputs">
          <Input
            label="Full Name"
            htmlFor="name"
            value={defaultValues.fullName}
            onChange={(e) => onChange(e, "fullName")}
          />
          <Input
            label="Email"
            htmlFor="email"
            type="email"
            value={defaultValues.email}
            onChange={(e) => onChange(e, "email")}
          />
          <Input
            label="Phone"
            htmlFor="phone"
            type="tel"
            value={defaultValues.phone}
            onChange={(e) => onChange(e, "phone")}
          />
          <Input
            label="Location"
            htmlFor="location"
            value={defaultValues.location}
            onChange={(e) => onChange(e, "location")}
          />
        </div>
      ) : null}
    </div>
  );
}
