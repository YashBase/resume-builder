import React from 'react';

function ResumePreview({ resumeData }) {
  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <div>
      <p><strong>Name:</strong> {resumeData.name}</p>
        <p><strong>Education:</strong> {resumeData.education}</p>
        <p><strong>Work Experience:</strong> {resumeData.workExperience}</p>
        <p><strong>Skills:</strong> {resumeData.skills}</p>
        <p><strong>Projects:</strong> {resumeData.projects}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
