import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ResumeForm({ resumeData, handleInputChange }) {
  return (
    <div className="resume-form">
      <h2>Enter Your Details</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            value={resumeData.name} 
            onChange={handleInputChange} 
            placeholder="Enter your name" 
          />
        </Form.Group>

        <Form.Group controlId="formEducation">
          <Form.Label>Education</Form.Label>
          <Form.Control 
            type="text" 
            name="education" 
            value={resumeData.education} 
            onChange={handleInputChange} 
            placeholder="Enter your education" 
          />
        </Form.Group>

        <Form.Group controlId="formWorkExperience">
          <Form.Label>Work Experience</Form.Label>
          <Form.Control 
            type="text" 
            name="workExperience" 
            value={resumeData.workExperience} 
            onChange={handleInputChange} 
            placeholder="Enter your work experience" 
          />
        </Form.Group>

        <Form.Group controlId="formSkills">
          <Form.Label>Skills</Form.Label>
          <Form.Control 
            type="text" 
            name="skills" 
            value={resumeData.skills} 
            onChange={handleInputChange} 
            placeholder="Enter your skills" 
          />
        </Form.Group>

        <Form.Group controlId="formProjects">
          <Form.Label>Projects</Form.Label>
          <Form.Control 
            type="text" 
            name="projects" 
            value={resumeData.projects} 
            onChange={handleInputChange} 
            placeholder="Enter your projects" 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Details
        </Button>
      </Form>
    </div>
  );
}

export default ResumeForm;
