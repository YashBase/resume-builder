  import React, { useState } from 'react';
  import './App.css';
  import Header from './components/Header';
  import ResumeForm from './components/ResumeForm';
  import ResumePreview from './components/ResumePreview';

  function App() {
    const [resumeData, setResumeData] = useState({
      name: '',
      education: '',
      workExperience: '',
      skills: '',
      projects: ''
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setResumeData({
        ...resumeData,
        [name]: value,
      });
    };

    return (
      <div className="App">
        <Header />
        <div className="container">
          <ResumeForm resumeData={resumeData} handleInputChange={handleInputChange} />
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
    );
  }

  export default App;
