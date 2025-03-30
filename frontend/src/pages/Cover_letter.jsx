// import React, { useState } from 'react';
// import { chatSession } from "../gen-ai/Gemini";
// import Cl_prompt from '../prompts/Cl_prompt';
// import pdfToText from "react-pdftotext";
// import DOMPurify from "dompurify"; 

//  const Cover_letter = () => {
//     const [response, setResponse] = useState('');
//     const [jd, setJd] = useState("");
//     const [resume, setResume] = useState(null);
//     const [extra, setExtra] = useState("");

//     const handleJDChange = (event) => {
//         setJd(event.target.value);
//     };
//     const handleEChange = (event) => {
//       setExtra(event.target.value);
//   };

//     // const handleResumeUpload = (event) => {
//     //     const file = event.target.files[0];
//     //     if (file && file.type === "application/pdf") {
//     //         setResume(file);
//     //     } else {
//     //         alert("Please upload a valid PDF file");
//     //     }
//     // };

//     const handleResumeUpload = async (event) => {
//         const file = event.target.files[0];
//         if (!file || file.type !== "application/pdf") {
//           alert("Please upload a valid PDF file.");
//           return;
//         }
    
//         try {
//           const text = await pdfToText(file);
//           setResume(text);
         
//         } catch (error) {
//           console.error("Failed to extract text:", error);
//         }
//       };
    

//     const Cletter = async () => {
//         const Clresponse = await chatSession.sendMessage(Cl_prompt(jd, resume, extra));
//         setResponse(Clresponse.response.text());
//     };

//     const formatResponse = (text) => {
//       return DOMPurify.sanitize(text);
//     };

//     return (
//         <div>
//             <h2>Generate Cover Letter</h2>
//             <div>
//                 <label>Job Description:</label>
//                 <textarea value={jd} onChange={handleJDChange} placeholder="Enter job description here..." rows={4} />
//             </div>
//             <div>
//                 <label>Upload Resume (PDF):</label>
//                 <input type="file" accept="application/pdf" onChange={handleResumeUpload} />
//             </div>

//             {/* make extra */}
//             <div>
//                 <label>Extra information:</label>
//                 <textarea value={extra} onChange={handleEChange} placeholder="Enter any other relevant information such as achievements or skills not mentioned in resume." rows={4} />
//             </div>

//             <button onClick={Cletter}>Generate Cover Letter</button>
//             <div>
//                 <h3>Generated Cover Letter:</h3>
//                 {/* <p>{response}</p> */}
//                 {response && (
                    
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html: formatResponse(response),
//                         }}
//                       />
                    
//                   )}

//             </div>
//         </div>
//     );
// };

// export default Cover_letter;



import React from 'react';
import { ArrowRight, FileText, Sparkles, Upload, FileQuestion } from 'lucide-react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

// Color scheme
const theme = {
  primaryColor: '#134074',
  secondaryColor: '#13315c',
  thirdColor: '#0b2545',
  fourthColor: '#8da9c4',
  fifthColor: '#eef4ed',
};

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const NavBar = styled.nav`
  background-color: ${theme.primaryColor};
  color: ${theme.fifthColor};
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: none;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  transition: color 0.2s;
  
  &:hover {
    color: ${theme.fourthColor};
  }
`;

const HeroSection = styled.div`
  background: linear-gradient(to bottom right, ${theme.secondaryColor}, ${theme.thirdColor});
  color: ${theme.fifthColor};
  padding: 4rem 1rem;
`;

const HeroContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

const PrimaryButton = styled.button`
  background-color: ${theme.fourthColor};
  color: ${theme.thirdColor};
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${theme.fifthColor};
    transform: scale(1.05);
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${theme.primaryColor};
  color: ${theme.fifthColor};
  
  
  &:hover {
    background-color: ${theme.thirdColor};
  }
`;

const HeroImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const CoverLetterImageWrapper = styled.div`
  position: relative;
  height: 16rem;
  width: 100%;
  max-width: 28rem;
`;

const BackPlate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${theme.fourthColor};
  border-radius: 0.5rem;
  transform: rotate(3deg);
`;

const FrontPlate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${theme.fifthColor};
  border-radius: 0.5rem;
  transform: rotate(-3deg);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const CoverLetterImage = styled.img`
  max-height: 100%;
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
`;

const Section = styled.section`
  padding: 4rem 1rem;
`;

const FeaturesSection = styled(Section)`
  background-color: ${theme.fifthColor};
`;

const SectionContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  color: ${theme.primaryColor};
  margin-bottom: 3rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  background-color: ${theme.primaryColor};
  padding: 0.75rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.thirdColor};
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: #4B5563;
`;

const HowItWorksSection = styled(Section)`
  background-color: white;
`;

const StepsContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  position: relative;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StepNumber = styled.div`
  flex-shrink: 0;
  background-color: ${theme.secondaryColor};
  color: ${theme.fifthColor};
  border-radius: 9999px;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.125rem;
  z-index: 10;
`;

const StepLine = styled.div`
  display: none;
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  height: 100%;
  width: 0.125rem;
  background-color: ${theme.fourthColor};
  z-index: -10;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const StepContent = styled.div`
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    margin-left: 1.5rem;
    margin-top: 0;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.thirdColor};
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  color: #4B5563;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  
`;

const Footer = styled.footer`
  background-color: ${theme.thirdColor};
  color: ${theme.fifthColor};
  padding: 2rem 1rem;
`;

const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

const Copyright = styled.p`
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const FooterLink = styled.a`
  &:hover {
    color: ${theme.fourthColor};
  }
`;



const Cover_letter = () => {
  // const handleGetStarted = () => {
  //   console.log('Redirecting to cover letter generator...');
  //   // In a real app, you would use React Router here
  //   // history.push('/generator');
  //   navigate('/cletter2');
  // };

  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Redirect to the cover letter generator page
    navigate('/cletter2');
  };
  

  return (
    <Container>
      {/* Navigation */}
      {/* <NavBar>
        <NavContainer>
          <Logo>
            <FileText className="h-6 w-6" />
            <LogoText>CoverCraft AI</LogoText>
          </Logo>
          <NavLinks>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#about">About</NavLink>
          </NavLinks>
        </NavContainer>
      </NavBar> */}

      {/* Hero Section */}
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>
              Craft Perfect Cover Letters in Minutes
            </HeroTitle>
            <HeroDescription>
              Leverage the power of Gemini AI to create personalized, professional cover letters 
              tailored to your resume and desired job.
            </HeroDescription>
            <PrimaryButton onClick={handleGetStarted}>
              <span>Create Your Cover Letter</span>
              <ArrowRight className="h-5 w-5" />
            </PrimaryButton>
          </HeroContent>
          <HeroImageContainer>
            <CoverLetterImageWrapper>
              <BackPlate />
              <FrontPlate>
                <CoverLetterImage 
                  //src="/api/placeholder/400/320" 
                  src="https://www.livecareer.com/lcapp/uploads/2023/10/Packed-with-the-latest-features.png"
                  alt="Sample cover letter" 
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </FrontPlate>
            </CoverLetterImageWrapper>
          </HeroImageContainer>
        </HeroContainer>
      </HeroSection>

      {/* Features */}
      <FeaturesSection id="features">
        <SectionContainer>
          <SectionTitle>Powerful Features</SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <IconWrapper>
                <Sparkles className="h-8 w-8" style={{ color: theme.fifthColor }} />
              </IconWrapper>
              <FeatureTitle>AI-Powered</FeatureTitle>
              <FeatureDescription>
                Our cover letter generator uses Gemini AI to create tailored, professional content that highlights your strengths.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <IconWrapper>
                <Upload className="h-8 w-8" style={{ color: theme.fifthColor }} />
              </IconWrapper>
              <FeatureTitle>Resume Analysis</FeatureTitle>
              <FeatureDescription>
                Upload your resume and job description to generate a perfectly matched cover letter that emphasizes relevant experience.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <IconWrapper>
                <FileQuestion className="h-8 w-8" style={{ color: theme.fifthColor }} />
              </IconWrapper>
              <FeatureTitle>Customizable</FeatureTitle>
              <FeatureDescription>
                Add personal touches and additional information to create a unique cover letter that stands out to employers.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </SectionContainer>
      </FeaturesSection>

      {/* How It Works */}
      <HowItWorksSection id="how-it-works">
        <SectionContainer>
          <SectionTitle>How It Works</SectionTitle>
          <StepsContainer>
            <StepItem>
              <StepNumber>1</StepNumber>
              <StepLine />
              <StepContent>
                <StepTitle>Upload Your Information</StepTitle>
                <StepDescription>
                  Submit your resume and the job description you're applying for. You can also add any additional details you'd like to include.
                </StepDescription>
              </StepContent>
            </StepItem>
            <StepItem>
              <StepNumber>2</StepNumber>
              <StepLine />
              <StepContent>
                <StepTitle>AI Analysis</StepTitle>
                <StepDescription>
                  Our system analyzes your resume and the job requirements, identifying key skills and experiences to highlight.
                </StepDescription>
              </StepContent>
            </StepItem>
            <StepItem>
              <StepNumber>3</StepNumber>
              <StepContent>
                <StepTitle>Generate & Customize</StepTitle>
                <StepDescription>
                  Review your AI-generated cover letter, make any desired edits, and download the final version ready for submission.
                </StepDescription>
              </StepContent>
            </StepItem>
          </StepsContainer>
          <ButtonContainer>
            <SecondaryButton onClick={handleGetStarted}>
              <span>Get Started Now</span>
              <ArrowRight className="h-5 w-5" />
            </SecondaryButton>
          </ButtonContainer>
        </SectionContainer>
      </HowItWorksSection>

      {/* Footer */}
      {/* <Footer>
        <FooterContainer>
          <Copyright>© 2025 CoverCraft AI. All rights reserved.</Copyright>
          <FooterLinks>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </FooterLinks>
        </FooterContainer>
      </Footer> */}
    </Container>
  );
};

export default Cover_letter;
