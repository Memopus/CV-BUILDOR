/* eslint-disable react/prop-types */
export default function Element(props) {
  return (
    <div className="education">
      <div className="time">
        <p>
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.location}</p>
      </div>
      <div className="school">
        <p className="uni">{props.school ? props.school : props.companyName}</p>
        <p>{props.location ? props.location : props.description}</p>
      </div>
    </div>
  );
}
