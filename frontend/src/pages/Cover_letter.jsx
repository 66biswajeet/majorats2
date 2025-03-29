import React, { useState } from 'react';
import { chatSession } from "../gen-ai/Gemini";
import Cl_prompt from '../prompts/Cl_prompt';
import pdfToText from "react-pdftotext";
import DOMPurify from "dompurify"; 

 const Cover_letter = () => {
    const [response, setResponse] = useState('');
    const [jd, setJd] = useState("");
    const [resume, setResume] = useState(null);
    const [extra, setExtra] = useState("");

    const handleJDChange = (event) => {
        setJd(event.target.value);
    };
    const handleEChange = (event) => {
      setExtra(event.target.value);
  };

    // const handleResumeUpload = (event) => {
    //     const file = event.target.files[0];
    //     if (file && file.type === "application/pdf") {
    //         setResume(file);
    //     } else {
    //         alert("Please upload a valid PDF file");
    //     }
    // };

    const handleResumeUpload = async (event) => {
        const file = event.target.files[0];
        if (!file || file.type !== "application/pdf") {
          alert("Please upload a valid PDF file.");
          return;
        }
    
        try {
          const text = await pdfToText(file);
          setResume(text);
         
        } catch (error) {
          console.error("Failed to extract text:", error);
        }
      };
    

    const Cletter = async () => {
        const Clresponse = await chatSession.sendMessage(Cl_prompt(jd, resume, extra));
        setResponse(Clresponse.response.text());
    };

    const formatResponse = (text) => {
      return DOMPurify.sanitize(text);
    };

    return (
        <div>
            <h2>Generate Cover Letter</h2>
            <div>
                <label>Job Description:</label>
                <textarea value={jd} onChange={handleJDChange} placeholder="Enter job description here..." rows={4} />
            </div>
            <div>
                <label>Upload Resume (PDF):</label>
                <input type="file" accept="application/pdf" onChange={handleResumeUpload} />
            </div>

            {/* make extra */}
            <div>
                <label>Extra information:</label>
                <textarea value={extra} onChange={handleEChange} placeholder="Enter any other relevant information such as achievements or skills not mentioned in resume." rows={4} />
            </div>

            <button onClick={Cletter}>Generate Cover Letter</button>
            <div>
                <h3>Generated Cover Letter:</h3>
                {/* <p>{response}</p> */}
                {response && (
                    
                      <div
                        dangerouslySetInnerHTML={{
                          __html: formatResponse(response),
                        }}
                      />
                    
                  )}

            </div>
        </div>
    );
};

export default Cover_letter;
