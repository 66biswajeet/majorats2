const suggestion_prompt = (resume, jd) => {
    return `Task: Analyze the resume content provided below and suggest detailed, specific improvements that would enhance its alignment with the given job description (JD). Your suggestions should aim to improve its score in an Applicant Tracking System (ATS). The suggestions should be practical, tailored to the role described in the JD, and help the candidate better match the expectations in terms of skills, experience, keywords, and achievements.
  
  Resume:
  ${resume}
  
  Job Description:
  ${jd}
  
  Instructions:
  - Your output should be structured using <div class="suggestions"> tags only.
  - Only provide **resume content suggestions** that would improve ATS score based on the JD.
  - You may suggest keyword additions, formatting changes, skill emphasis, role-specific experience, project tweaks, or summary modifications.
  - Do NOT rewrite the resume completely. Instead, suggest clear and focused improvements.
  - Use bullet points (<li>) for individual suggestions.
  - If something is already well-aligned, mention it positively.
  
  Output Format:
  <div class="suggestions">
  
    <ul>
      <li>Suggestion 1 based on the job description</li>
      <li>Suggestion 2 for improving the skill match</li>
      <li>Suggestion 3 for making the summary more relevant</li>
      <!-- Add more suggestions as needed -->
    </ul>
  </div>
  
  Note: Do not output anything else beyond the <div class="suggestions"> block.
  `;
  };
  
  export default suggestion_prompt;
  