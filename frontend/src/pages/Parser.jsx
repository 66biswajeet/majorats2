import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useResumeContext } from "../systems/ResumeContext";
import pdfToText from "react-pdftotext";
import { chatSession } from "../gen-ai/Gemini";
import JdPrompt from "../prompts/JdPrompt";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Parser = () => {
  const { setPrompt2 } = useResumeContext();
  const [prompt1, setPrompt1] = useState("");
  const [resumes, setResumes] = useState([]);
  const [results, setResults] = useState([]);

  const handleJDChange = (event) => {
    setPrompt1(event.target.value);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }

    try {
      const text = await pdfToText(file);
      setResumes((prev) => [...prev, { file, text }]);
      setPrompt2((prev) => [...prev, { fileName: file.name, text }]);
    } catch (error) {
      console.error("Failed to extract text:", error);
    }
  };

  const processResumes = async () => {
    let responses = [];
    for (const { file, text } of resumes) {
      const Jdresponse = await chatSession.sendMessage(JdPrompt(prompt1, text));
      responses.push({
        fileName: file.name,
        respo: JSON.parse(Jdresponse.response.text()),
      });
    }

    responses.sort((a, b) => b.respo - a.respo);
    setResults(responses);
  };

  console.log(results);

  //   const processResumes = async () => {
  //     let responses = [];

  //     for (const { file, text } of resumes) {
  //       try {
  //         const Jdresponse = await chatSession.sendMessage(
  //           JdPrompt(prompt1, text)
  //         );
  //         const responseText = await Jdresponse.text(); // ✅ Await the response text
  //         console.log(`Raw API Response for ${file.name}:`, responseText); // Debugging

  //         let parsedResponse;
  //         try {
  //           parsedResponse = JSON.parse(responseText); // ✅ Parse response text
  //         } catch (error) {
  //           console.error(`JSON Parsing Error for ${file.name}:`, responseText);
  //           continue; // Skip this resume if parsing fails
  //         }

  //         const score = parsedResponse.score || 0; // ✅ Ensure score exists
  //         responses.push({ fileName: file.name, respo: score });
  //       } catch (error) {
  //         console.error(`Error processing resume: ${file.name}`, error);
  //       }
  //     }

  //     console.log("Responses before sorting:", responses); // Debugging

  //     responses.sort((a, b) => b.respo - a.respo); // ✅ Correct sorting

  //     setResults(responses);
  //     console.log("Sorted Results:", responses); // ✅ Log after updating state
  //   };

  return (
    <div className="container">
      <h2>Job Description & Resume Parser</h2>

      {/* Job Description Input */}
      <textarea
        placeholder="Enter Job Description"
        value={prompt1}
        onChange={handleJDChange}
      />

      {/* File Upload */}
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />

      <button onClick={processResumes}>Process Resumes</button>
      <h3>Sorted Results:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>
            {res.fileName}: {res.respo}
          </li>
        ))}
      </ul>

      {/* Display PDFs */}
      {resumes.map(({ file }, index) => (
        <div key={index}>
          <p>{file.name}</p>
          <Document file={URL.createObjectURL(file)}>
            <Page pageNumber={1} renderTextLayer={false} />
          </Document>
        </div>
      ))}

      {/* Process Button */}

      {/* Display Results */}
    </div>
  );
};

export default Parser;
