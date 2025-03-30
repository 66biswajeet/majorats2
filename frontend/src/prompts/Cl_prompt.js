const Cl_prompt = (jd, resume, extra) => {
    
  
    return `Generate a professional and compelling cover letter based on the given resume: (${resume}), job description:(${jd}). The cover letter should:
    1. Be concise and professional: Avoid jargon and overly casual language.  Maintain a formal tone suitable for a job application.

2. Highlight relevant skills and experience: Focus on the skills and experiences from the resume that directly align with the requirements and responsibilities outlined in the job description.  Quantify achievements whenever possible (e.g., "Improved model accuracy by 15%").  Don't just list skills; demonstrate them with brief examples.

3. Showcase soft skills: Incorporate examples that demonstrate soft skills like communication, teamwork, problem-solving, adaptability, and leadership.  Connect these skills to the job requirements.  For example, instead of saying "I have good teamwork skills," say "In my team project to develop the AI-Powered Resume Builder, I effectively collaborated with team members to..."

4. Express enthusiasm and fit: Convey genuine interest in the specific company and the role.  Research the company and mention something specific that resonates with you (e.g., their mission, a recent project, their culture).  Explain why you are a good fit for their team and their values.

5. Demonstrate understanding of the company's needs: Show that you understand the challenges the company is trying to solve and how your skills can contribute to their success.  Tailor your letter to each specific job application.

6. Include a strong closing:  Reiterate your interest and express your desire for an interview.  Thank the hiring manager for their time and consideration.

7. Avoid directly repeating the resume: The cover letter should complement the resume, not just rehash the same information.  Provide context and stories that illustrate your qualifications.

8. Be tailored to the specific job: Do not generate a generic cover letter.  The letter MUST be customized to the provided job description.

9. Also take into consideration (${extra})

Use the following format:
<p><strong>[Your Name]</strong><br>
            [Your Address] <br>
            [City, State, ZIP] <br>
            [Your Phone Number] <br>
            [Your Email Address] <br>
            </p>
            <p>
            [Date]</p>

            <p><strong>Hiring Manager</strong><br>
            [Company Name] <br>
            [Company Address] <br>
            [City, State, ZIP]</p>

            <p>Dear Hiring Manager,</p>

            <p>[Opening paragraph: Introduce yourself, your academic background, and the role you're applying for. 
            Briefly mention why you’re excited about the opportunity and how your skills align with the company’s mission.]</p>

            <p>[Middle paragraph(s): Provide specific examples of your technical skills and experiences relevant to the job. 
            Instead of restating your resume, highlight a project, internship, or experience that showcases your problem-solving abilities, teamwork, or leadership. 
            Discuss how these experiences prepared you for this role.]</p>

            <p>[Closing paragraph: Express enthusiasm for the company, how you believe you can contribute, 
            and your eagerness to discuss your application further in an interview.]</p>

            <p>Warm regards,</p>

            <p><strong>[Your Name]</strong><br>
            [Your LinkedIn Profile or Portfolio Website]</p>
    `;
  };
  
  export default Cl_prompt;
  