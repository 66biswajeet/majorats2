import React from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { ResumeProvider } from "../src/systems/ResumeContext";
import { JdProvider } from "./systems/JdContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ats_resume from "./pages/Ats_resume";
import Ats_score from "./pages/Ats_score";
import Ats_meter from "./pages/Ats_meter";
import Home from "./pages/Home";
import New_resume from "./pages/New_resume";

import { Navigate } from "react-router-dom";

import "./App.css";
import { useUser } from "@clerk/clerk-react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EditResume from "./Dashboard/resume/[resumeId]/edit/index";
import Summary from "./Dashboard/resume/[resumeId]/edit/Summary";
import EditResume2 from "./Dashboard/resume/[resumeId]/edit/EditResume2";
import ResumeTemplate from "./pages/ResumeTemplate1";
import Download from "./Dashboard/resume/[resumeId]/edit/Download";
import AllTemplates from "./pages/All_templates";
import Parser from "./pages/Parser";
import ParserUi from "./pages/ParserUi";
import ParserPart2 from "./pages/Parserpart2";
import Cover_letter from "./pages/Cover_letter";
import Cover_letter2 from "./pages/Cover_letter2";
import Trial from "./pages/Trial";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <ResumeProvider>
          <JdProvider>
            <Routes>
            <Route path="/trial" element={<Trial />} /> 
              {/* <Route path="/parser" element={<Parser />} /> */}
              
              <Route path="/auth/login/resume5" element={<AllTemplates />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<Signup />} />
              <Route path="/" element={<Home />} />
              <Route path="/parserpart2" element={<ProtectedRoute>
                    <ParserPart2 />
                  </ProtectedRoute>} />
              <Route path="/parserUi" element={<ProtectedRoute>
                    <ParserUi />
                  </ProtectedRoute>} />
              <Route path="/cletter" element={
                <ProtectedRoute>
                    <Cover_letter />
                  </ProtectedRoute>} />
              <Route path="/cletter2" element={
                <ProtectedRoute>
                    <Cover_letter2 />
                  </ProtectedRoute>} />
              <Route
                path="/new_resume"
                element={
                  <ProtectedRoute>
                    <New_resume />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/ats/resume"
                element={
                  <ProtectedRoute>
                    <Ats_resume />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ats/score"
                element={
                  <ProtectedRoute>
                    <Ats_score />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ats/meter"
                element={
                  <ProtectedRoute>
                    <Ats_meter />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/resume/:resumeId/edit"
                element={<EditResume />}
              />
              <Route
                path="/dashboard/resume/:resumeId/edit/summary"
                element={<Summary />}
              />
              <Route
                path="/dashboard/resume/:resumeId/edit/download"
                element={<Download />}
              />
            </Routes>
          </JdProvider>
        </ResumeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
