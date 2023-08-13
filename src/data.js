import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 123-456-7890",
    location: "New York, USA",
  },

  sections: {
    educations: [
      {
        degree: "Bachelor's in Computer Science",
        school: "University of Example",
        location: "Los Angeles, USA",
        startDate: "08/2015",
        endDate: "06/2019",
        id: uniqid(),
      },
      {
        degree: "Master's in Business Administration",
        school: "Harvard Business School",
        location: "Boston, USA",
        startDate: "09/2019",
        endDate: "05/2021",
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Tech Innovators Inc.",
        position: "Software Engineer",
        location: "San Francisco, USA",
        description:
          "Developed cutting-edge software solutions for global clients. Collaborated with cross-functional teams to deliver high-quality products.",
        startDate: "07/2021",
        endDate: "present",
        id: uniqid(),
      },
      {
        companyName: "Global Consulting Group",
        position: "Management Consultant",
        location: "London, UK",
        description:
          "Provided strategic guidance to clients in various industries. Led workshops and analyzed data to drive business growth.",
        startDate: "01/2019",
        endDate: "06/2021",
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;
