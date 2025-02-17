import React from "react";
import styled, { keyframes } from "styled-components";
import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

// Modified scan animation
const scanAnimation = keyframes`
  0% {
    top: -5%;
  }
  50% {
    top: 90%;
  }
  100% {
    top: -5%;
  }
`;

const ResumeContainer = styled.div`
  /* position: relative; */
  position: sticky;
  top: 90px;
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #1a365d 0%, #2a4365 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ResumeImage = styled.div`
  width: 70%;
  height: 85%;
  background: white;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden; // Added to contain scanner
`;

// Updated Scanner styling
const Scanner = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #48bb78 50%,
    transparent 100%
  );
  box-shadow: 0 0 10px 2px rgba(72, 187, 120, 0.5);
  animation: ${scanAnimation} 5s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(72, 187, 120, 0.2) 50%,
      transparent 100%
    );
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a202c;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
  color: #4a5568;
`;

const CheckIcon = styled(CheckCircle)`
  color: #48bb78;
  flex-shrink: 0;
`;

const DummyResume = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 1.5rem; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative; // Added for proper stacking
`;

const Line = styled.div`
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  width: ${(props) => props.width};
`;

// Added highlight effect for lines
const highlightAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;

const HighlightedLine = styled(Line)`
  animation: ${highlightAnimation} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const glowAnimation = keyframes`
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
`;
const HighlightedText = styled.span`
  color: #3d52a0;
  background: linear-gradient(to right, #3d52a0, #5a6db5, #8da9c4);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  animation: ${glowAnimation} 6s linear infinite;
`;

// button code
const StyledButton = styled.button`
  font-size: 17px;
  padding: 1em 2.7em;
  font-weight: 500;
  background: #1f2937;
  color: white;
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 0.6em;
  cursor: pointer;
  transition: transform 0.2s;
  width: 250px;

  &:active {
    transform: scale(0.97);
  }

  &:hover .transition {
    width: 14em;
    height: 14em;
  }
`;

const Gradient = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 0.6em;
  margin-top: -0.25em;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3)
  );
`;

const Label = styled.span`
  position: relative;
  top: -1px;
  font: 50px;
  text-decoration: none;
  text-align: center;
`;

const TransitionEffect = styled.span`
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 500ms;
  background-color: rgba(16, 185, 129, 0.6);
  border-radius: 9999px;
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Scanner2 = () => {
  return (
    <Container>
      <ResumeContainer>
        <ResumeImage>
          <DummyResume>
            {/* <HighlightedLine width="60%" delay="0" />
            <HighlightedLine width="80%" delay="0.2" />
            <HighlightedLine width="40%" delay="0.4" />
            <HighlightedLine width="70%" delay="0.6" />
            <HighlightedLine width="50%" delay="0.8" />
            <HighlightedLine width="65%" delay="1" />
            <HighlightedLine width="75%" delay="1.2" /> */}
            <img
              src="https://cdn.create.microsoft.com/catalog-assets/en-us/1138bdc2-5b51-4800-816d-fcf90d7e6af9/thumbnails/600/creative-teaching-resume-purple-whimsical-1-1-c199c9a6eb4e.webp"
              alt="Resume template"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </DummyResume>
          <Scanner />
        </ResumeImage>
      </ResumeContainer>

      <Content>
        <Title>
          Select the best candidate for your organization with{" "}
          <HighlightedText>Resumate's</HighlightedText>
          <br />
          Apllicant Tracking System
        </Title>

        <FeatureList>
          <FeatureItem>
            <CheckIcon size={24} />
            <span>
              Upload multiple resumes and a job description to instantly assess
              how well each candidate matches the role.
            </span>
          </FeatureItem>
          <FeatureItem>
            <CheckIcon size={24} />
            <span>
              Leverage AI-powered ATS scoring to rank candidates based on
              relevance, skills, and keywords—eliminating manual review.
            </span>
          </FeatureItem>
          <FeatureItem>
            <CheckIcon size={24} />
            <span>
              Save time by getting a shortlist of the best-fit applicants,
              ensuring you focus only on the most qualified candidates.
            </span>
          </FeatureItem>
        </FeatureList>
        <StyledButton as={Link} to="/parserpart2">
          <TransitionEffect className="transition" />
          <Gradient className="gradient" />
          <Label>Select Resumes</Label>
        </StyledButton>
      </Content>
    </Container>
  );
};

export default Scanner2;
