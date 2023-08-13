/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./resume.css";

export default function Resume(props) {
  return (
    <div
      className="resume"
      style={{
        backgroundColor: props.style.sectionsBackgroundColor,
        color: props.style.sectionsTextColor,
      }}
    >
      <div
        className="personal-infos"
        style={{
          backgroundColor: props.style.personalBackgroundColor,
          color: props.style.personalTextColor,
        }}
      >
        <h1>{props.name}</h1>
        <div className="contact">
          <div className="info">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>{props.email}</span>
          </div>
          <div className="info">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>{props.phone}</span>
          </div>
          <div className="info">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <span>{props.location}</span>
          </div>
        </div>
      </div>
      <div className="sections">
        <div className="educations section">
          <div className="title">
            <h2>Education</h2>
            <div
              className="line"
              style={{ borderColor: props.style.lineColor }}
            ></div>
          </div>

          {props.education.map((element) => {
            return (
              <div className="element" key={element.id}>
                <div className="time">
                  <p>
                    {element.startDate} - {element.endDate}
                  </p>
                  <p>{element.location}</p>
                </div>
                <div className="infos">
                  <p className="uni">{element.school}</p>
                  <p>{element.degree}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="experiences section">
          <div className="title">
            <h2>Experience</h2>
            <div
              className="line"
              style={{ borderColor: props.style.lineColor }}
            ></div>
          </div>

          {props.experience.map((element) => {
            return (
              <div className="element" key={element.id}>
                <div className="time">
                  <p>
                    {element.startDate} - {element.endDate}
                  </p>
                  <p>{element.location}</p>
                </div>
                <div className="infos">
                  <p className="uni">{element.companyName}</p>
                  <p>{element.position}</p>
                  <p className="description">{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
