import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useResumeContext } from "../systems/ResumeContext";
import pdfToText from "react-pdftotext";
import { chatSession } from "../gen-ai/Gemini";
import JdPrompt from "../prompts/JdPrompt";
import styled from "styled-components";
import { Upload } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
`;

const Subcont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
`;
const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const TextareaContainer = styled.div`
  flex: 1;
  position: relative;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #8da9c4;
  resize: none;
  transition: all 0.2s ease;
  color: #0b2545;
  background: white;

  &::placeholder {
    color: #8da9c4;
  }

  &:focus {
    outline: none;
    border-color: #134074;
    box-shadow: 0 0 0 2px rgba(19, 64, 116, 0.2);
  }
`;

const UploadContainer = styled.div`
  width: 320px;
  position: relative;
`;

const UploadLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 1rem;
  border: 2px dashed #8da9c4;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;

  &:hover {
    border-color: #134074;

    svg {
      color: #134074;
    }

    ${({ theme }) => theme.mainText} {
      color: #134074;
    }
  }
`;

const UploadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

const UploadIcon = styled(Upload)`
  width: 4rem;
  height: 4rem;
  color: #8da9c4;
  transition: color 0.2s ease;
`;

const MainText = styled.span`
  color: #13315c;
  font-size: 1.125rem;
  font-weight: 500;
  transition: color 0.2s ease;
`;

const SubText = styled.span`
  color: #8da9c4;
  font-size: 0.875rem;
`;

const FileSize = styled.span`
  color: #8da9c4;
  font-size: 0.75rem;
`;

const HiddenInput = styled.input`
  display: none;
`;

const InputContainer = styled.div`
  display: flex;
  width: 80%;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 60%;
  height: 100px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const UploadButton = styled.input`
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ResumeStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 80%;
`;

const ResumeItem = styled.div`
  padding: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #007bff;
    color: white;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  border-radius: 10px;
  position: relative;
  margin-top: 25px;
`;

const PdfViewer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  /* justify-content: center;
  align-items: center; */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  z-index: 10;
`;

const ResultsContainer = styled.div`
  width: 80%;
  margin-top: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ResultItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #e3f2fd;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoadingMessage = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #007bff;
`;

const ParserPart2 = () => {
  const { setPrompt2 } = useResumeContext();
  const [prompt1, setPrompt1] = useState("");
  const [resumes, setResumes] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <Container>
      <Title>Job Description & Resume Parser</Title>
      <Subcont>
        <FlexContainer>
          <TextareaContainer>
            <StyledTextarea
              placeholder="Enter Job Description"
              value={prompt1}
              onChange={handleJDChange}
            />
          </TextareaContainer>

          <UploadContainer>
            <UploadLabel htmlFor="file-upload">
              <UploadContent>
                <UploadIcon />
                <MainText>Upload PDF</MainText>
                <SubText>
                  Click to upload
                  <br />
                  or
                  <br />
                  drag and drop
                </SubText>
                <FileSize>Maximum file size: 10MB</FileSize>
              </UploadContent>
              <HiddenInput
                id="file-upload"
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
              />
            </UploadLabel>
          </UploadContainer>
        </FlexContainer>
      </Subcont>
      <Button onClick={processResumes}>
        {loading ? "Processing..." : "Process Resumes"}
      </Button>

      <ResumeStack>
        {resumes.map(({ file }, index) => (
          <ResumeItem key={index} onClick={() => setSelectedFile(file)}>
            {file.name}
          </ResumeItem>
        ))}
      </ResumeStack>
      {selectedFile && (
        <ModalOverlay onClick={() => setSelectedFile(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedFile(null)}>X</CloseButton>
            <PdfViewer>
              <Document file={URL.createObjectURL(selectedFile)}>
                <Page
                  pageNumber={1}
                  renderTextLayer={false}
                  width={window.innerWidth * 0.85}
                />
              </Document>
            </PdfViewer>
          </ModalContent>
        </ModalOverlay>
      )}
      <ResultsContainer>
        <h3>Sorted Results</h3>
        {results.map((res, index) => (
          <ResultItem key={index}>
            <span>{res.fileName}</span>
            <span>Score: {res.respo}</span>
          </ResultItem>
        ))}
      </ResultsContainer>
    </Container>
  );
};

export default ParserPart2;
