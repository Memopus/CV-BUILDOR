import "./App.css";
import Resume from "./components/Resume";
import PersonalDetails from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { useState } from "react";
import exampleData from "./data";
import Customize from "./components/Customize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract, faTools } from "@fortawesome/free-solid-svg-icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [education, setEducation] = useState(exampleData.sections.educations);
  const [experiences, setExperiences] = useState(
    exampleData.sections.experiences
  );
  const [content, setContent] = useState(true);
  const [customize, setCustomize] = useState(false);
  const [colors, setColors] = useState({
    personalBackgroundColor: "#3a45df",
    personalTextColor: "#ffffff",
    sectionsTextColor: "black",
    sectionsBackgroundColor: "#f1f1f1",
    lineColor: "black",
  });

  const customizeOnChange = (e, key) => {
    setColors({ ...colors, [key]: e.target.value });
  };

  const educationHandler = (edu) => {
    setEducation(edu);
  };
  const experienceHandler = (exp) => {
    setExperiences(exp);
  };

  const downloadPdf = () => {
    const resume = document.querySelector(".resume");

    html2canvas(resume).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, width, height);
      doc.save("cv.pdf");
    });
  };

  return (
    <div className="container">
      <div className="resume-details">
        <div className="settings">
          <div
            className="content"
            style={content ? { backgroundColor: "white" } : null}
            onClick={() => {
              setContent(true);
              setCustomize(false);
            }}
          >
            <FontAwesomeIcon icon={faFileContract} />
            <h3>Content</h3>
          </div>

          <div
            className="customize"
            style={customize ? { backgroundColor: "white" } : null}
            onClick={() => {
              setCustomize(true);
              setContent(false);
            }}
          >
            <FontAwesomeIcon icon={faTools} />
            <h3>Customize</h3>
          </div>
        </div>
        {content ? (
          <div className="content-container">
            <PersonalDetails
              onChange={(e, key) =>
                setPersonalInfo({ ...personalInfo, [key]: e.target.value })
              }
              defaultValues={personalInfo}
            />
            <Education clickHandler={(edu) => educationHandler(edu)} />
            <Experience clickHandler={(exp) => experienceHandler(exp)} />
            <div className="download">
              <button onClick={downloadPdf} className="download-btn">
                Download
              </button>
            </div>
          </div>
        ) : null}

        {customize ? (
          <Customize onChangeHandler={customizeOnChange} colors={colors} />
        ) : null}
      </div>
      <div className="resume-container">
        <Resume
          name={personalInfo.fullName}
          location={personalInfo.location}
          email={personalInfo.email}
          phone={personalInfo.phone}
          education={education}
          experience={experiences}
          style={colors}
        />
      </div>
    </div>
  );
}

export default App;
