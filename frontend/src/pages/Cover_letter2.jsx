// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { chatSession } from "../gen-ai/Gemini";
// import Cl_prompt from '../prompts/Cl_prompt';
// import pdfToText from "react-pdftotext";
// import DOMPurify from "dompurify"; 
// import { FaSpinner } from 'react-icons/fa';
// import { FaDownload } from "react-icons/fa";
// // Styled Components

// const Button = styled.button`
// margin: 30px;
// position: relative;
// left: 44%;
// background-color: var(--primary-color);
// color: var(--fifth-color);
// padding: 10px 20px;
// border: none;
// border-radius: 4px;
// font-size: 16px;
// cursor: pointer;
// transition: background-color 0.3s ease;

// &:hover {
//   background-color: var(--secondary-color);
// }
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   color: var(--third-color);
//   background-color: var(--fifth-color);
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// const Title = styled.h2`
//   color: var(--primary-color);
//   text-align: center;
//   margin-bottom: 2rem;
//   font-size: 2.5rem;
  
//   @media (max-width: 768px) {
//     font-size: 1.8rem;
//   }
// `;

// const InputSection = styled.div`
//   margin-bottom: 1.5rem;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-weight: bold;
//   color: var(--secondary-color);
//   font-size: 1.1rem;
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   min-height: 150px;
//   padding: 1rem;
//   border: 2px solid var(--fourth-color);
//   border-radius: 5px;
//   font-size: 1rem;
//   resize: vertical;
//   transition: border-color 0.3s;
//   background-color: white;
  
//   &:focus {
//     border-color: var(--secondary-color);
//     outline: none;
//   }
// `;

// const FileInput = styled.div`
//   position: relative;
//   margin-bottom: 1.5rem;
  
//   input[type="file"] {
//     display: none;
//   }
// `;

// const FileLabel = styled.label`
//   display: inline-block;
//   padding: 0.8rem 1.5rem;
//   background-color: var(--fourth-color);
//   color: var(--third-color);
//   border-radius: 5px;
//   cursor: pointer;
//   font-weight: bold;
//   transition: background-color 0.3s;
  
//   &:hover {
//     background-color: var(--secondary-color);
//     color: white;
//   }
// `;

// const FileName = styled.span`
//   margin-left: 1rem;
//   font-style: italic;
//   color: var(--secondary-color);
// `;

// const GenerateButton = styled.button`
//   display: block;
//   width: 100%;
//   max-width: 300px;
//   margin: 2rem auto;
//   padding: 1rem;
//   background-color: var(--primary-color);
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 1.2rem;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s, transform 0.2s;
  
//   &:hover {
//     background-color: var(--secondary-color);
//     transform: translateY(-2px);
//   }
  
//   &:disabled {
//     background-color: var(--fourth-color);
//     cursor: not-allowed;
//     transform: none;
//   }
// `;

// const SpinnerIcon = styled(FaSpinner)`
//   animation: spin 1s linear infinite;
//   margin-left: 10px;
  
//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `;

// const ResultSection = styled.div`
//   margin-top: 2rem;
//   padding: 2rem;
//   background-color: white;
//   border-radius: 5px;
//   border-left: 5px solid var(--primary-color);
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const ResultTitle = styled.h3`
//   color: var(--primary-color);
//   margin-bottom: 1rem;
//   padding-bottom: 0.5rem;
//   border-bottom: 2px solid var(--fourth-color);
// `;

// const CoverLetterContent = styled.div`
//   line-height: 1.2;
//   font-size: 1.1rem;
//   /* white-space: pre-line; */
  
//   p {
//     margin-bottom: 1rem;
//   }
// `;

// const Cover_letter2 = () => {
//   const [response, setResponse] = useState('');
//   const [jd, setJd] = useState("");
//   const [resume, setResume] = useState(null);
//   const [extra, setExtra] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [fileName, setFileName] = useState("");

//   const handleJDChange = (event) => {
//     setJd(event.target.value);
//   };
  
//   const handleEChange = (event) => {
//     setExtra(event.target.value);
//   };

//   const handleResumeUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file || file.type !== "application/pdf") {
//       alert("Please upload a valid PDF file.");
//       return;
//     }

//     setFileName(file.name);
    
//     try {
//       const text = await pdfToText(file);
//       setResume(text);
//     } catch (error) {
//       console.error("Failed to extract text:", error);
//       alert("Failed to extract text from PDF. Please try another file.");
//     }
//   };

//   const Cletter = async () => {
//     if (!jd.trim() || !resume) {
//       alert("Please provide both a job description and upload a resume.");
//       return;
//     }
    
//     setIsLoading(true);
//     try {
//       const Clresponse = await chatSession.sendMessage(Cl_prompt(jd, resume, extra));
//       setResponse(Clresponse.response.text());
//     } catch (error) {
//       console.error("Error generating cover letter:", error);
//       alert("An error occurred while generating the cover letter. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const formatResponse = (text) => {
//     return DOMPurify.sanitize(text);
//   };

//   const handleClick = () => {
//     window.print();
//   };

//   return (
//     <Container>
//       <Title id="no-print">Cover Letter Generator</Title>
      
//       <InputSection id="no-print">
//         <Label htmlFor="jobDescription">Job Description:</Label>
//         <TextArea 
//           id="jobDescription"
//           value={jd} 
//           onChange={handleJDChange} 
//           placeholder="Paste the job description here..." 
//           rows={6} 
//         />
//       </InputSection>
      
//       <InputSection id="no-print">
//         <Label>Resume:</Label>
//         <FileInput>
//           <FileLabel htmlFor="resumeUpload">
//             {fileName ? "Change Resume" : "Upload Resume (PDF)"}
//           </FileLabel>
//           <input 
//             id="resumeUpload"
//             type="file" 
//             accept="application/pdf" 
//             onChange={handleResumeUpload} 
//           />
//           {fileName && <FileName>{fileName}</FileName>}
//         </FileInput>
//       </InputSection>

//       <InputSection id="no-print">
//         <Label htmlFor="extraInfo">Additional Information:</Label>
//         <TextArea 
//           id="extraInfo"
//           value={extra} 
//           onChange={handleEChange} 
//           placeholder="Enter any other relevant information such as achievements or skills not mentioned in your resume." 
//           rows={4} 
//         />
//       </InputSection>

//       <GenerateButton id="no-print"
//         onClick={Cletter} 
//         disabled={isLoading || !jd.trim() || !resume}
//       >
//         {isLoading ? 'Generating...' : 'Generate Cover Letter'} 
//         {isLoading && <SpinnerIcon />}
//       </GenerateButton>
      
//       {response && (
//         <ResultSection>
//           <ResultTitle id="no-print">Your Cover Letter</ResultTitle>
//           <CoverLetterContent 
//             dangerouslySetInnerHTML={{
//               __html: formatResponse(response),
//             }}
//           />
//           <Button id="no-print" onClick={handleClick}>
//               <FaDownload /> Download
//             </Button>
//         </ResultSection>
//       )}
      
//     </Container>
//   );
// };

// export default Cover_letter2;


import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { chatSession } from "../gen-ai/Gemini";
import Cl_prompt from '../prompts/Cl_prompt';
import pdfToText from "react-pdftotext";
import DOMPurify from "dompurify"; 
import { FaSpinner, FaDownload } from 'react-icons/fa';

// Global print styles
const GlobalStyle = createGlobalStyle`
  @media print {
    @page {
      size: A4;
      margin: 20mm 25mm;
    }
    
    body {
      background: white;
    }
    
    #no-print {
      display: none !important;
    }
    
    .print-only {
      display: block !important;
    }
  }
`;

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--third-color);
  background-color: var(--fifth-color);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media print {
    max-width: 100%;
    padding: 0;
    margin: 0;
    background-color: white;
    box-shadow: none;
    border-radius: 0;
  }
`;

const Title = styled.h2`
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const InputSection = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: var(--secondary-color);
  font-size: 1.1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 1rem;
  border: 2px solid var(--fourth-color);
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s;
  background-color: white;
  
  &:focus {
    border-color: var(--secondary-color);
    outline: none;
  }
`;

const FileInput = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  
  input[type="file"] {
    display: none;
  }
`;

const FileLabel = styled.label`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: var(--fourth-color);
  color: var(--third-color);
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: var(--secondary-color);
    color: white;
  }
`;

const FileName = styled.span`
  margin-left: 1rem;
  font-style: italic;
  color: var(--secondary-color);
`;

const GenerateButton = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: var(--fourth-color);
    cursor: not-allowed;
    transform: none;
  }
`;

const DownloadButton = styled.button`
  margin: 30px;
  position: relative;
  left: 44%;
  background-color: var(--primary-color);
  color: var(--fifth-color);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    left: 30%;
  }
`;

const SpinnerIcon = styled(FaSpinner)`
  animation: spin 1s linear infinite;
  margin-left: 10px;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ResultSection = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: white;
  border-radius: 5px;
  border-left: 5px solid var(--primary-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media print {
    margin: 0;
    padding: 0;
    border-left: none;
    box-shadow: none;
    border-radius: 0;
  }
`;

const ResultTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--fourth-color);
`;

const CoverLetterContent = styled.div`
  line-height: 1.5;
  font-size: 1.1rem;
  
  p {
    margin-bottom: 1rem;
  }
  
  @media print {
    font-size: 12pt;
    line-height: 1.6;
    color: black;
    
    h1, h2, h3, h4 {
      margin-top: 12pt;
      margin-bottom: 6pt;
    }
    
    p {
      margin-bottom: 6pt;
      page-break-inside: avoid;
    }
  }
`;

// A4 specific styling for printed content
const A4Container = styled.div`
  display: none;
  
  @media print {
    display: block;
    width: 210mm;
    min-height: 297mm;
    padding: 0;
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
  }
`;

const Cover_letter2 = () => {
  const [response, setResponse] = useState('');
  const [jd, setJd] = useState("");
  const [resume, setResume] = useState(null);
  const [extra, setExtra] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleJDChange = (event) => {
    setJd(event.target.value);
  };
  
  const handleEChange = (event) => {
    setExtra(event.target.value);
  };

  const handleResumeUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }

    setFileName(file.name);
    
    try {
      const text = await pdfToText(file);
      setResume(text);
    } catch (error) {
      console.error("Failed to extract text:", error);
      alert("Failed to extract text from PDF. Please try another file.");
    }
  };

  const Cletter = async () => {
    if (!jd.trim() || !resume) {
      alert("Please provide both a job description and upload a resume.");
      return;
    }
    
    setIsLoading(true);
    try {
      const Clresponse = await chatSession.sendMessage(Cl_prompt(jd, resume, extra));
      setResponse(Clresponse.response.text());
    } catch (error) {
      console.error("Error generating cover letter:", error);
      alert("An error occurred while generating the cover letter. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatResponse = (text) => {
    return DOMPurify.sanitize(text);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title id="no-print">Cover Letter Generator</Title>
        
        <InputSection id="no-print">
          <Label htmlFor="jobDescription">Job Description:</Label>
          <TextArea 
            id="jobDescription"
            value={jd} 
            onChange={handleJDChange} 
            placeholder="Paste the job description here..." 
            rows={6} 
          />
        </InputSection>
        
        <InputSection id="no-print">
          <Label>Resume:</Label>
          <FileInput>
            <FileLabel htmlFor="resumeUpload">
              {fileName ? "Change Resume" : "Upload Resume (PDF)"}
            </FileLabel>
            <input 
              id="resumeUpload"
              type="file" 
              accept="application/pdf" 
              onChange={handleResumeUpload} 
            />
            {fileName && <FileName>{fileName}</FileName>}
          </FileInput>
        </InputSection>

        <InputSection id="no-print">
          <Label htmlFor="extraInfo">Additional Information:</Label>
          <TextArea 
            id="extraInfo"
            value={extra} 
            onChange={handleEChange} 
            placeholder="Enter any other relevant information such as achievements or skills not mentioned in your resume." 
            rows={4} 
          />
        </InputSection>

        <GenerateButton 
          id="no-print"
          onClick={Cletter} 
          disabled={isLoading || !jd.trim() || !resume}
        >
          {isLoading ? 'Generating...' : 'Generate Cover Letter'} 
          {isLoading && <SpinnerIcon />}
        </GenerateButton>
        
        {response && (
          <>
            <ResultSection id="no-print">
              <ResultTitle id="no-print">Your Cover Letter</ResultTitle>
              <CoverLetterContent
                dangerouslySetInnerHTML={{
                  __html: formatResponse(response),
                }}
              />
              <DownloadButton id="no-print" onClick={handlePrint}>
                <FaDownload /> Download
              </DownloadButton>
            </ResultSection>
            
            {/* A4 optimized version that only shows when printing */}
            <A4Container className="print-only">
              <CoverLetterContent
                dangerouslySetInnerHTML={{
                  __html: formatResponse(response),
                }}
              />
            </A4Container>
          </>
        )}
      </Container>
    </>
  );
};

export default Cover_letter2;






