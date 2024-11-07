/* Inserted in <Outlet /> on browser route: /resume */

import React from 'react';

const Resume = () => {
  // Link to resume.pdf file
  const resumeLink = "path-to-your-resume.pdf";

  return (
    <main className="container">
    <section id="resume">
      <section>
        <h2>Resume</h2>
        <a href={resumeLink}>Download My Resume</a>
      </section>
      <section>
        <h3>Proficiencies:</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML/CSS</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
      </section>
    </section>
    </main>
  );
};

export default Resume;