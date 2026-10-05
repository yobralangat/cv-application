// src/App.jsx
import { PersonalInfo } from './components/personalInfo.jsx';
import { Education } from './components/education.jsx';
import { WorkExperience } from './components/workExperience.jsx';
import './App.css';
import './index.css';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="screen-title">CV Builder</h1>
        <h1 className="print-title">Curriculum Vitae</h1>
        <p className="instruction-text">Fill out the forms below to generate your resume</p>
        <button type="button" className="print-btn" onClick={handlePrint}>
          📄 Download / Print CV
        </button>
      </header>

      <main>
        <PersonalInfo />
        <Education />
        <WorkExperience />
      </main>
    </div>
  );
}