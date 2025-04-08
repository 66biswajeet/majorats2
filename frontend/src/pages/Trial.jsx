// import React from 'react';
// import { ArrowRight, Upload, FileText, BarChart, Users } from 'lucide-react';

// // Define styling
// const styles = {
//   container: `flex flex-col md:flex-row min-h-screen bg-white`,
//   leftPanel: `w-full md:w-2/5 lg:w-1/3 bg-[#134074] sticky top-0 h-screen flex flex-col justify-center items-center p-8`,
//   rightPanel: `w-full md:w-3/5 lg:w-2/3 p-8 bg-[#eef4ed] min-h-screen`,
//   logo: `text-[#eef4ed] font-bold text-3xl mb-6`,
//   illustration: `w-full max-w-md my-8`,
//   tagline: `text-[#eef4ed] text-xl md:text-2xl font-medium text-center mb-4`,
//   description: `text-[#eef4ed] text-center mb-8`,
//   title: `text-4xl font-bold text-[#134074] mb-6`,
//   subtitle: `text-2xl font-semibold text-[#13315c] mb-4`,
//   paragraph: `text-[#0b2545] mb-6 leading-relaxed`,
//   card: `bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-[#134074]`,
//   cardTitle: `text-xl font-bold text-[#134074] mb-3 flex items-center`,
//   cardIcon: `mr-3 text-[#134074]`,
//   featureList: `space-y-4 mb-8`,
//   featureItem: `flex items-start`,
//   featureNumber: `flex items-center justify-center w-8 h-8 rounded-full bg-[#8da9c4] text-white font-bold mr-4 flex-shrink-0`,
//   featureText: `text-[#0b2545]`,
//   button: `bg-[#134074] hover:bg-[#13315c] text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center`,
//   buttonIcon: `ml-2`,
//   startButton: `bg-[#13315c] hover:bg-[#0b2545] text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300 inline-flex items-center mt-4`
// };

// const ResumeSVG = () => (
//   <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect x="100" y="50" width="300" height="300" rx="10" fill="#8da9c4" />
//     <rect x="130" y="30" width="240" height="320" rx="10" fill="#eef4ed" />
//     <rect x="150" y="80" width="200" height="20" rx="5" fill="#134074" />
//     <rect x="150" y="120" width="150" height="10" rx="5" fill="#13315c" />
//     <rect x="150" y="140" width="180" height="10" rx="5" fill="#13315c" />
//     <rect x="150" y="160" width="160" height="10" rx="5" fill="#13315c" />
//     <rect x="150" y="190" width="200" height="10" rx="5" fill="#13315c" />
//     <rect x="150" y="210" width="180" height="10" rx="5" fill="#13315c" />
//     <rect x="150" y="230" width="190" height="10" rx="5" fill="#13315c" />
//     <rect x="150" y="260" width="100" height="10" rx="5" fill="#134074" />
//     <rect x="150" y="280" width="180" height="10" rx="5" fill="#13315c" />
//     <rect x="150" y="300" width="160" height="10" rx="5" fill="#13315c" />
//     <circle cx="320" cy="290" r="40" fill="#134074" opacity="0.2" />
//     <path d="M320 260L340 295H300L320 260Z" fill="#134074" />
//   </svg>
// );

// const Trial = () => {
//   return (
//     <div className={styles.container}>
//       {/* Left Panel - Sticky */}
//       <div className={styles.leftPanel}>
//         <div className={styles.logo}>ResumeMatch AI</div>
//         <ResumeSVG />
//         <h2 className={styles.tagline}>Smart Resume Parsing Powered by Gemini AI</h2>
//         <p className={styles.description}>
//           Find the perfect candidate match in seconds, not hours
//         </p>
//       </div>

//       {/* Right Panel - Scrollable */}
//       <div className={styles.rightPanel}>
//         <h1 className={styles.title}>AI-Powered Resume Parser</h1>
        
//         <p className={styles.paragraph}>
//           ResumeMatch AI helps recruiters quickly identify the best candidates by analyzing 
//           multiple resumes against job descriptions using advanced AI technology. Our tool
//           calculates ATS scores for each resume, arranging them in order of relevance so you 
//           can focus on interviewing the right candidates.
//         </p>

//         <div className={styles.card}>
//           <h3 className={styles.cardTitle}>
//             <BarChart className={styles.cardIcon} size={24} />
//             Why Use ResumeMatch AI?
//           </h3>
//           <ul className={styles.featureList}>
//             <li className={styles.featureItem}>
//               <span className={styles.featureNumber}>1</span>
//               <span className={styles.featureText}>
//                 <strong>Save Time:</strong> Process dozens of resumes simultaneously instead of manual review
//               </span>
//             </li>
//             <li className={styles.featureItem}>
//               <span className={styles.featureNumber}>2</span>
//               <span className={styles.featureText}>
//                 <strong>Improve Quality:</strong> Gemini AI analyzes semantic matches beyond simple keyword matching
//               </span>
//             </li>
//             <li className={styles.featureItem}>
//               <span className={styles.featureNumber}>3</span>
//               <span className={styles.featureText}>
//                 <strong>Reduce Bias:</strong> Focus on skills and qualifications with objective scoring
//               </span>
//             </li>
//             <li className={styles.featureItem}>
//               <span className={styles.featureNumber}>4</span>
//               <span className={styles.featureText}>
//                 <strong>Easy to Use:</strong> Simple upload interface with detailed scoring reports
//               </span>
//             </li>
//           </ul>
//         </div>

//         <h2 className={styles.subtitle}>How It Works</h2>
        
//         <div className={styles.card}>
//           <h3 className={styles.cardTitle}>
//             <FileText className={styles.cardIcon} size={24} />
//             Simple 3-Step Process
//           </h3>
//           <ul className={styles.featureList}>
//             <li className={styles.featureItem}>
//               <span className={styles.featureNumber}>1</span>
//               <span className={styles.featureText}>
//                 <strong>Upload Job Description:</strong> Start by uploading the job description document
//               </span>
//             </li>
//             <li className={styles.featureItem}>
//               <span className={styles.featureNumber}>2</span>
//               <span className={styles.featureText}>
//                 <strong>Upload Resumes:</strong> Add multiple candidate resumes to be analyzed
//               </span>
//             </li>
//             <li className={styles.featureItem}>
//               <span className={styles.featureNumber}>3</span>
//               <span className={styles.featureText}>
//                 <strong>Review Results:</strong> Get instant ATS scores and rankings to make informed decisions
//               </span>
//             </li>
//           </ul>
//         </div>

//         <div className="flex flex-col items-center my-12">
//           <button className={styles.startButton}>
//             Start Parsing Resumes <ArrowRight className={styles.buttonIcon} size={24} />
//           </button>
          
//           <div className="mt-8">
//             <a href="/cover-letter-generator" className={styles.button}>
//               Try Our Cover Letter Generator <ArrowRight className={styles.buttonIcon} size={20} />
//             </a>
//           </div>
//         </div>

//         <div className={styles.card}>
//           <h3 className={styles.cardTitle}>
//             <Users className={styles.cardIcon} size={24} />
//             Built for Recruiters
//           </h3>
//           <p className={styles.paragraph}>
//             Our Resume Parser is designed specifically for recruiting professionals who need to
//             efficiently process large volumes of applications. Click on any candidate in the 
//             results to view their complete resume and detailed match analysis.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trial;


import React from 'react';
import styled from 'styled-components';
import { ArrowRight, Upload, FileText, BarChart, Users } from 'lucide-react';

// Styled Components
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: white;
`;

const LeftPanel = styled.div`
  width: 40%;
  background-color: #134074;
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const RightPanel = styled.div`
  width: 60%;
  padding: 2rem;
  background-color: #eef4ed;
  min-height: 100vh;
  overflow-y: auto;
`;

const Logo = styled.div`
  color: #eef4ed;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Illustration = styled.div`
  width: 100%;
  max-width: 24rem;
  margin: 2rem 0;
`;

const Tagline = styled.h2`
  color: #eef4ed;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #eef4ed;
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: #134074;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #13315c;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  color: #0b2545;
  margin-bottom: 1.5rem;
  line-height: 1.625;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-left: 4px solid #134074;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #134074;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
`;

const CardIcon = styled.span`
  margin-right: 0.75rem;
  color: #134074;
`;

const FeatureList = styled.ul`
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const FeatureNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: #8da9c4;
  color: white;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  color: #0b2545;
`;

const Button = styled.button`
  background-color: #134074;
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    background-color: #13315c;
  }
`;

const ButtonIcon = styled.span`
  margin-left: 0.5rem;
`;

const StartButton = styled(Button)`
  background-color: #13315c;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  margin-top: 1rem;
  
  &:hover {
    background-color: #0b2545;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
`;


const LinkButton = styled.a`
  background-color: #134074;
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin-top: 1rem;
  margin-bottom: 2rem;
  
  &:hover {
    background-color: #13315c;
  }
`;

const Trial = () => {
  return (
    <Container>
      {/* Left Panel - Sticky */}
      <LeftPanel>
        <Logo>ResumeParser</Logo>
        <Illustration>
          <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          
            <rect x="100" y="50" width="300" height="300" rx="10" fill="#8da9c4" />
            <rect x="130" y="30" width="240" height="320" rx="10" fill="#eef4ed" />
            <rect x="150" y="80" width="200" height="20" rx="5" fill="#134074" />
            <rect x="150" y="120" width="150" height="10" rx="5" fill="#13315c" />
            <rect x="150" y="140" width="180" height="10" rx="5" fill="#13315c" />
            <rect x="150" y="160" width="160" height="10" rx="5" fill="#13315c" />
            <rect x="150" y="190" width="200" height="10" rx="5" fill="#13315c" />
            <rect x="150" y="210" width="180" height="10" rx="5" fill="#13315c" />
            <rect x="150" y="230" width="190" height="10" rx="5" fill="#13315c" />
            <rect x="150" y="260" width="100" height="10" rx="5" fill="#134074" />
            <rect x="150" y="280" width="180" height="10" rx="5" fill="#13315c" />
            <rect x="150" y="300" width="160" height="10" rx="5" fill="#13315c" />
            <circle cx="320" cy="290" r="40" fill="#134074" opacity="0.2" />
            <path d="M320 260L340 295H300L320 260Z" fill="#134074" />
          </svg>
          
        </Illustration>
        <Tagline>Smart Resume Parsing Powered by Gemini AI</Tagline>
        <Description>
          Find the perfect candidate match in seconds, not hours
        </Description>
      </LeftPanel>

      {/* Right Panel - Scrollable */}
      <RightPanel>
        <Title>AI-Powered Resume Parser</Title>
        
        <Paragraph>
          ResumeMatch AI helps recruiters quickly identify the best candidates by analyzing 
          multiple resumes against job descriptions using advanced AI technology. Our tool
          calculates ATS scores for each resume, arranging them in order of relevance so you 
          can focus on interviewing the right candidates.
        </Paragraph>

        <LinkButton href="/cover-letter-generator">
            Try Our Cover Letter Generator <ButtonIcon><ArrowRight size={20} /></ButtonIcon>
          </LinkButton>

        <Card>
          <CardTitle>
            <CardIcon><BarChart size={24} /></CardIcon>
            Why Use ResumeMatch AI?
          </CardTitle>
          <FeatureList>
            <FeatureItem>
              <FeatureNumber>1</FeatureNumber>
              <FeatureText>
                <strong>Save Time:</strong> Process dozens of resumes simultaneously instead of manual review
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureNumber>2</FeatureNumber>
              <FeatureText>
                <strong>Improve Quality:</strong> Gemini AI analyzes semantic matches beyond simple keyword matching
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureNumber>3</FeatureNumber>
              <FeatureText>
                <strong>Reduce Bias:</strong> Focus on skills and qualifications with objective scoring
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureNumber>4</FeatureNumber>
              <FeatureText>
                <strong>Easy to Use:</strong> Simple upload interface with detailed scoring reports
              </FeatureText>
            </FeatureItem>
          </FeatureList>
        </Card>

        <Subtitle>How It Works</Subtitle>
        
        <Card>
          <CardTitle>
            <CardIcon><FileText size={24} /></CardIcon>
            Simple 3-Step Process
          </CardTitle>
          <FeatureList>
            <FeatureItem>
              <FeatureNumber>1</FeatureNumber>
              <FeatureText>
                <strong>Upload Job Description:</strong> Start by uploading the job description document
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureNumber>2</FeatureNumber>
              <FeatureText>
                <strong>Upload Resumes:</strong> Add multiple candidate resumes to be analyzed
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureNumber>3</FeatureNumber>
              <FeatureText>
                <strong>Review Results:</strong> Get instant ATS scores and rankings to make informed decisions
              </FeatureText>
            </FeatureItem>
          </FeatureList>
        </Card>

        <ButtonContainer>
          <StartButton>
            Start Parsing Resumes <ButtonIcon><ArrowRight size={24} /></ButtonIcon>
          </StartButton>
          
          {/* <LinkButton href="/cover-letter-generator">
            Try Our Cover Letter Generator <ButtonIcon><ArrowRight size={20} /></ButtonIcon>
          </LinkButton> */}
        </ButtonContainer>

        <Card>
          <CardTitle>
            <CardIcon><Users size={24} /></CardIcon>
            Built for Recruiters
          </CardTitle>
          <Paragraph>
            Our Resume Parser is designed specifically for recruiting professionals who need to
            efficiently process large volumes of applications. Click on any candidate in the 
            results to view their complete resume and detailed match analysis.
          </Paragraph>
        </Card>
      </RightPanel>
    </Container>
  );
};

export default Trial;
