// src/components/TabContent.jsx
import React, { useState } from 'react'; // We need useState for checkbox states
import Checkbox from './Checkbox'; // Import our new Checkbox component
import '../styles/TabContent.css'; // Import its dedicated CSS

// This component receives the 'activeTab' string from its parent
const TabContent = ({ activeTab }) => {
  // State for the checkboxes for the HTML & CSS tab
  const [htmlOptions, setHtmlOptions] = useState({
    includeAssets: true,
    includeCustomCode: false,
  });

  // State for the checkboxes for the Next JS tab
  const [nextJsOptions, setNextJsOptions] = useState({
    useAppDirectory: true,
    includeAssets: true,
    includeCustomCode: true,
  });

  // Function to handle changes for HTML & CSS checkboxes
  const handleHtmlOptionChange = (option) => {
    setHtmlOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  // Function to handle changes for Next JS checkboxes
  const handleNextJsOptionChange = (option) => {
    setNextJsOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  // Function to handle download button click (for demonstration)
  const handleDownload = () => {
    alert(`Downloading ${activeTab === 'html' ? 'HTML & CSS' : 'Next JS'} Project!`);
    if (activeTab === 'html') {
      console.log('HTML Options:', htmlOptions);
    } else {
      console.log('Next JS Options:', nextJsOptions);
    }
    // In a real app, you'd trigger a file download here based on options
  };

  return (
    <div className="tab-content-container">
      {activeTab === 'html' && (
        <div className="tab-pane">
          <h3 className="export-title">
            {/* HTML5 icon from https://simpleicons.org/ (visually estimated) */}
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="tab-content-icon">
              <title>HTML5</title>
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zm19.58 2.336L12 3.684l-8.916-1.348-.37 4.704h2.152l.254-2.923 6.88-1.92.002.002 6.942 1.92-.093 1.171h-12.72L5.857 14h6.066l-.68 8.01L18.41 14h2.152l-.37-4.704h-12.72l-.254-2.923 6.943-1.92.002.002 6.88 1.92.254 2.923z"/>
            </svg>
            Export as HTML & CSS Project
            <span className="zipped-tag">Zipped</span>
          </h3>
          <div className="checkbox-options">
            <Checkbox
              label="Include assets locally (images, styles, fonts, etc.)"
              checked={htmlOptions.includeAssets}
              onChange={() => handleHtmlOptionChange('includeAssets')}
            />
            <Checkbox
              label="Include custom code"
              checked={htmlOptions.includeCustomCode}
              onChange={() => handleHtmlOptionChange('includeCustomCode')}
            />
          </div>
          <button className="download-button" onClick={handleDownload}>
            Download HTML CSS Project
          </button>
        </div>
      )}

      {activeTab === 'nextjs' && (
        <div className="tab-pane">
          <h3 className="export-title">
            {/* Gear icon from https://feathericons.com/ (visually estimated) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tab-content-icon">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            Export as Next JS Project
            <span className="zipped-tag">Zipped</span>
          </h3>
          <div className="checkbox-options">
            <Checkbox
              label="Use 'app' directory (NextJS v13+)"
              checked={nextJsOptions.useAppDirectory}
              onChange={() => handleNextJsOptionChange('useAppDirectory')}
            />
            <Checkbox
              label="Include assets locally (images, styles, fonts, etc.)"
              checked={nextJsOptions.includeAssets}
              onChange={() => handleNextJsOptionChange('includeAssets')}
            />
            <Checkbox
              label="Include custom code"
              checked={nextJsOptions.includeCustomCode}
              onChange={() => handleNextJsOptionChange('includeCustomCode')}
            />
          </div>
          <button className="download-button" onClick={handleDownload}>
            Download Next JS Project
          </button>
        </div>
      )}
    </div>
  );
};

export default TabContent;