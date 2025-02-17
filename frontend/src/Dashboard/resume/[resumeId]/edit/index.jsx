// import React, { useEffect, useState, useCallback, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { useUser } from "@clerk/clerk-react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// import ResumeTemplate1 from "../../../../pages/ResumeTemplate1";
// import ResumeTemplate2 from "../../../../pages/ResumeTemplate2";
// import CandidateInfo from "./CandidateInfo";
// import EditResume2 from "./EditResume2";
// import ResumeSummaryInput from "./Summary";
// import ExperienceInput from "./Experience";
// import EducationInput from "./Education";
// import SkillsInput from "../../../Skills";
// import Dummy from "../../../../pages/Dummy";
// import Achievement from "./Achievement";
// import Projects from "./Projects";

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: minmax(0, 50%) minmax(0, 50%);

//   padding: 2rem;
//   /* max-width: 1200px; */
//   margin: 0 auto;
//   width: 100%;
//   box-sizing: border-box;
// `;

// const Container2 = styled.div`
//   font-family: Arial, sans-serif;
//   max-width: 600px;
//   margin: 0 auto;
// `;

// const Section = styled.div`
//   margin-bottom: 10px;
// `;

// const Question = styled.div`
//   background-color: #8da9c4;
//   color: #134074;
//   padding: 15px;
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Answer = styled.div`
//   background-color: #eef4ed;
//   padding: 15px;
//   display: ${(props) => (props.isOpen ? "block" : "none")};
// `;

// const Head = styled.div`
//   color: var(--secondary-color);
//   font-size: large;
//   font-weight: bold;
//   background-color: var(--fifth-color);
//   width: 40%;
//   text-align: center;
//   border-top-right-radius: 50px;
//   border-bottom-right-radius: 50px;
//   margin-top: 15px;
// `;

// const LeftContent = styled.div`
//   background-color: #f0f0f0;
//   padding: 20px;
//   border-radius: 8px;
//   text-align: center;
// `;

// const DocTitle = styled.div`
//   color: var(--secondary-color);
//   font-size: large;
//   font-weight: bold;
// `;
// const Docpara = styled.div`
//   color: var(--fourth-color);
//   font-size: small;
//   font-weight: 500;
//   margin: 20px 0;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   font-size: 14px;
//   margin-bottom: 5px;
//   color: var(--third-color);
// `;

// const StyledInput = styled.input`
//   padding: 10px;
//   border: 1px solid var(--fourth-color);
//   border-radius: 4px;
//   font-size: 16px;
//   color: var(--third-color);
//   background-color: var(--fifth-color);
//   transition: border-color 0.3s ease;

//   &:focus {
//     outline: none;
//     border-color: var(--primary-color);
//   }
// `;

// const Button = styled.button`
//   background-color: var(--primary-color);
//   color: var(--fifth-color);
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: var(--secondary-color);
//   }
// `;

// const RightContent = styled.div``;

// const EditResume = () => {
//   const [openSection, setOpenSection] = useState(null);
//   const [isResumeUpdated, setIsResumeUpdated] = useState(false);
//   const { user } = useUser();
//   const [resumes, setResumes] = useState([]);
//   const [selectedResume, setSelectedResume] = useState(null); // State for the filtered resume
//   const { resumeId } = useParams();

//   const handleResumeUpdated = () => {
//     setIsResumeUpdated(true);
//   };

//   const toggleSection = (index) => {
//     setOpenSection(openSection === index ? null : index);
//   };

//   // const handleEditResumes = async (section) => {
//   //   const resumeData = {
//   //     resumeId: resumeId,
//   //     candidateName: candidateName,
//   //     candidateEmail: candidateEmail,
//   //     candidateAddress: candidateAddress,
//   //     candidateNumber: candidateNumber,
//   //     summary: summary,
//   //     summaryHeading: "Summary",
//   //   };

//   //   let dataToUpdate = {};
//   //   if (section === "summary") {
//   //     dataToUpdate = summaryData;
//   //   } else if (section === "candidateInfo") {
//   //     dataToUpdate = resumeData;
//   //   }

//   //   try {
//   //     const response = await fetch(
//   //       `http://localhost:5000/api/new-resume/${user.id}`,
//   //       {
//   //         method: "PUT",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify({ resumeData }),
//   //       }
//   //     );

//   //     if (!response.ok) {
//   //       throw new Error("Failed to edit resume");
//   //     }

//   //     console.log(resumeData);
//   //     console.log(summaryData);
//   //     setCandidateName("");
//   //     setCandidateEmail("");
//   //     setCandidateAddress("");
//   //     setCandidateNumber("");
//   //     setSummary("");

//   //     // navigate(`/dashboard/resume/${resumeData.resumeId}/edit`);
//   //   } catch (error) {
//   //     console.error("Error editing resume:", error);
//   //   }
//   // };

//   const fetchResumes = async () => {
//     if (!user) return;

//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_BACKEND_URL}/api/new-resume/${user.id}`
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch resumes");
//       }

//       const data = await response.json();
//       setResumes(data); // Update the state with the fetched resumes
//     } catch (error) {
//       console.error("Error fetching resumes:", error);
//     }
//   };

//   useEffect(() => {
//     fetchResumes(); // Fetch resumes when the component mounts
//   }, [user]);

//   useEffect(() => {
//     if (resumes.length > 0) {
//       const resume = resumes.find((r) => r.resumeId === resumeId);
//       setSelectedResume(resume);
//     }
//   }, [resumes, resumeId]);

//   // console.log(selectedResume.candidateName);

//   const handleInputChange = useCallback(
//     (setter) => (event) => {
//       setter(event.target.value);
//     },
//     []
//   );

//   const renderResumePreview = () => {
//     if (selectedResume.resumeName.length <= 0) {
//       return (
//         <div>
//           <Head>Resume Preview</Head>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <Head>Resume Preview</Head>
//           <ResumeTemplate1 />
//         </div>
//       );
//     }
//   };
//   useEffect(() => {
//     if (selectedResume?.CandidateInfo) {
//       setIsResumeUpdated(true);
//     }
//   }, [selectedResume]);
//   return (
//     <>
//       {/* {selectedResume ? (
//         <ResumeCard key={selectedResume.resumeId}>
//           <h3>{selectedResume.resumeName}</h3>
//           <p>
//             Created at: {new Date(selectedResume.createdAt).toLocaleString()}
//           </p>
//         </ResumeCard>
//       ) : (
//         <p>Loading resume data or no resume found...</p>
//       )} */}

//       <Container>
//         {selectedResume ? (
//           <LeftContent key={selectedResume.resumeId}>
//             <DocTitle>{selectedResume.resumeName}</DocTitle>
//             <Docpara>
//               This is where you can add controls, forms, or other content.
//             </Docpara>
//             {/* <InputContainer>
//               <Label htmlFor="candidateName">Candidate Name:</Label>
//               <StyledInput
//                 id="candidateName"
//                 type="text"
//                 placeholder="Enter Candidate Name"
//                 value={candidateName}
//                 onChange={handleInputChange(setCandidateName)}
//               />
//             </InputContainer>

//             <InputContainer>
//               <Label htmlFor="candidateEmail">Candidate Email:</Label>
//               <StyledInput
//                 id="candidateEmail"
//                 type="email"
//                 placeholder="Enter Candidate Email"
//                 value={candidateEmail}
//                 onChange={handleInputChange(setCandidateEmail)}
//               />
//             </InputContainer>

//             <InputContainer>
//               <Label htmlFor="candidateAddress">Candidate Address:</Label>
//               <StyledInput
//                 id="candidateAddress"
//                 type="text"
//                 placeholder="Enter Candidate Address"
//                 value={candidateAddress}
//                 onChange={(e) => setCandidateAddress(e.target.value)}
//               />
//             </InputContainer>

//             <Button onClick={handleEditResumes}>Save</Button>
//              <Link
//               to={`/dashboard/resume/${selectedResume.resumeId}/edit/summary`}
//             >
//               <Button>Next</Button>
//             </Link>
//             */}
//             <Container2>
//               <Section>
//                 <Question onClick={() => toggleSection(0)}>
//                   <h4>Add Candidate Basic Details</h4>
//                   <h2>{openSection === 0 ? "-" : "+"}</h2>
//                 </Question>
//                 <Answer isOpen={openSection === 0}>
//                   <CandidateInfo
//                   // onResumeUpdated={handleResumeUpdated}
//                   // candidateName={candidateName}
//                   // candidateEmail={candidateEmail}
//                   // candidateAddress={candidateAddress}
//                   // setCandidateName={setCandidateName} // Pass the setter
//                   // setCandidateEmail={setCandidateEmail} // Pass the setter
//                   // setCandidateAddress={setCandidateAddress} // Pass the setter
//                   // handleEditResumes={handleEditResumes}
//                   // selectedResumeId={selectedResume.resumeId} // Pass the selected resume ID
//                   />
//                 </Answer>
//               </Section>
//               <Section>
//                 <Question onClick={() => toggleSection(1)}>
//                   <h4> Add Candidate Summary</h4>
//                   <h2>{openSection === 1 ? "-" : "+"}</h2>
//                 </Question>
//                 <Answer isOpen={openSection === 1}>
//                   <ResumeSummaryInput
//                   // summary={summary}
//                   // setSummary={setSummary}
//                   // handleEditResumes={handleEditResumes}
//                   />
//                 </Answer>
//               </Section>
//               <Section>
//                 <Question onClick={() => toggleSection(2)}>
//                   <h4> Add Experience</h4>
//                   <h2>{openSection === 2 ? "-" : "+"}</h2>
//                 </Question>
//                 <Answer isOpen={openSection === 2}>
//                   <ExperienceInput
//                   // summary={summary}
//                   // setSummary={setSummary}
//                   // handleEditResumes={handleEditResumes}
//                   />
//                 </Answer>
//               </Section>
//               <Section>
//                 <Question onClick={() => toggleSection(3)}>
//                   <h4> Add Education</h4>
//                   <h2>{openSection === 3 ? "-" : "+"}</h2>
//                 </Question>
//                 <Answer isOpen={openSection === 3}>
//                   <EducationInput
//                   // summary={summary}
//                   // setSummary={setSummary}
//                   // handleEditResumes={handleEditResumes}
//                   />
//                 </Answer>
//               </Section>

//               <Section>
//                 <Question onClick={() => toggleSection(4)}>
//                   <h4> Add Projects</h4>
//                   <h2>{openSection === 4 ? "-" : "+"}</h2>
//                 </Question>
//                 <Answer isOpen={openSection === 4}>
//                   <Projects
//                   // summary={summary}
//                   // setSummary={setSummary}
//                   // handleEditResumes={handleEditResumes}
//                   />
//                 </Answer>
//               </Section>

//               <Section>
//                 <Question onClick={() => toggleSection(5)}>
//                   <h4>Add Skills</h4>
//                   <h2>{openSection === 5 ? "-" : "+"}</h2>
//                 </Question>
//                 <Answer isOpen={openSection === 5}>
//                   <SkillsInput />
//                 </Answer>
//               </Section>
//               <Section>
//                 <Question onClick={() => toggleSection(6)}>
//                   <h4>Add Achievements</h4>
//                   <h2>{openSection === 6 ? "-" : "+"}</h2>
//                 </Question>
//                 <Answer isOpen={openSection === 6}>
//                   <Achievement />
//                 </Answer>
//               </Section>
//             </Container2>
//           </LeftContent>
//         ) : (
//           <p>Loading resume data....</p>
//         )}

//         <RightContent>
//           {" "}
//           <Head>Resume Preview</Head>
//           <ResumeTemplate1 />
//           {/* <ResumeTemplate1 /> */}
//           <Link to={`/dashboard/resume/${resumeId}/edit/download`}>
//             <Button>Download</Button>
//           </Link>
//         </RightContent>
//       </Container>
//     </>
//   );
// };

// export default EditResume;

import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ResumeTemplate1 from "../../../../pages/ResumeTemplate1";
import CandidateInfo from "./CandidateInfo";
import ResumeSummaryInput from "./Summary";
import ExperienceInput from "./Experience";
import EducationInput from "./Education";
import SkillsInput from "../../../Skills";
import Achievement from "./Achievement";
import Projects from "./Projects";

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 50%) minmax(0, 50%);
  padding: 2rem;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

const Container2 = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
`;

const Head = styled.div`
  color: var(--secondary-color);
  font-size: large;
  font-weight: bold;
  background-color: var(--fifth-color);
  width: 40%;
  text-align: center;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  margin-top: 15px;
`;

const LeftContent = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const DocTitle = styled.div`
  color: var(--secondary-color);
  font-size: large;
  font-weight: bold;
`;

const Docpara = styled.div`
  color: var(--fourth-color);
  font-size: small;
  font-weight: 500;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--fifth-color);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 10px;

  &:hover {
    background-color: var(--secondary-color);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ProgressIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProgressDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--primary-color)" : "#ccc"};
  margin: 0 5px;
  cursor: pointer;
`;

const SectionTitle = styled.h3`
  color: var(--secondary-color);
  margin-bottom: 20px;
`;

const RightContent = styled.div``;

const EditResume = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isResumeUpdated, setIsResumeUpdated] = useState(false);
  const { user } = useUser();
  const [resumes, setResumes] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);
  const { resumeId } = useParams();

  const steps = [
    { title: "Basic Details", component: <CandidateInfo /> },
    { title: "Professional Summary", component: <ResumeSummaryInput /> },
    { title: "Experience", component: <ExperienceInput /> },
    { title: "Education", component: <EducationInput /> },
    { title: "Projects", component: <Projects /> },
    { title: "Skills", component: <SkillsInput /> },
    { title: "Achievements", component: <Achievement /> },
  ];

  const handleResumeUpdated = () => {
    setIsResumeUpdated(true);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const jumpToStep = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
    }
  };

  const fetchResumes = async () => {
    if (!user) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/new-resume/${user.id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch resumes");
      }

      const data = await response.json();
      setResumes(data);
    } catch (error) {
      console.error("Error fetching resumes:", error);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, [user]);

  useEffect(() => {
    if (resumes.length > 0) {
      const resume = resumes.find((r) => r.resumeId === resumeId);
      setSelectedResume(resume);
    }
  }, [resumes, resumeId]);

  useEffect(() => {
    if (selectedResume?.CandidateInfo) {
      setIsResumeUpdated(true);
    }
  }, [selectedResume]);

  return (
    <>
      <Container>
        {selectedResume ? (
          <LeftContent key={selectedResume.resumeId}>
            <DocTitle>{selectedResume.resumeName}</DocTitle>
            <Docpara>
              Complete your resume by filling out the forms below. Navigate
              through the sections using the next and previous buttons.
            </Docpara>

            <Container2>
              <ProgressIndicator>
                {steps.map((step, index) => (
                  <ProgressDot
                    key={index}
                    active={index === currentStep}
                    onClick={() => jumpToStep(index)}
                    title={step.title}
                  />
                ))}
              </ProgressIndicator>

              <SectionTitle>{steps[currentStep].title}</SectionTitle>

              {steps[currentStep].component}

              <NavigationButtons>
                <Button onClick={handlePrevious} disabled={currentStep === 0}>
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                >
                  Next
                </Button>
              </NavigationButtons>
            </Container2>
          </LeftContent>
        ) : (
          <p>Loading resume data....</p>
        )}

        <RightContent>
          <Head>Resume Preview</Head>
          <ResumeTemplate1 />
          <Link to={`/dashboard/resume/${resumeId}/edit/download`}>
            <Button>Download</Button>
          </Link>
        </RightContent>
      </Container>
    </>
  );
};

export default EditResume;
