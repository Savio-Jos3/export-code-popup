// src/components/TabContent.jsx - UPDATED STRUCTURE

import React from 'react';
import '../styles/TabContent.css'; // Make sure this CSS file is used

const TabContent = ({ activeTab }) => {
  // Define content for each tab
  const tabContents = {
    html_css: (
      <>
        {/* --- START OF INNER BLACK FRAME --- */}
        <div className="tab-content-container">
          <h3 className="tab-content-title">
            <svg /* ... SVG for HTML/CSS icon ... */ >...</svg>
            Export as HTML & CSS Project
            <span className="zipped-tag">Zipped</span>
          </h3>

          <div className="checkbox-group">
            <label className="checkbox-container">
              <input type="checkbox" className="hidden-checkbox" checked readOnly />
              <div className="custom-checkbox">
                {/* Checkmark SVG */}
                <svg className="checkmark-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9.64 18.06l-4.24-4.24 1.41-1.41 2.83 2.83 6.36-6.36 1.41 1.41-7.77 7.78z"/>
                </svg>
              </div>
              <span className="checkbox-label">Include assets locally (images, styles, fonts, etc.)</span>
            </label>
            <label className="checkbox-container">
              <input type="checkbox" className="hidden-checkbox" checked readOnly />
              <div className="custom-checkbox">
                {/* Checkmark SVG */}
                <svg className="checkmark-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9.64 18.06l-4.24-4.24 1.41-1.41 2.83 2.83 6.36-6.36 1.41 1.41-7.77 7.78z"/>
                </svg>
              </div>
              <span className="checkbox-label">Include custom code</span>
            </label>
          </div>
        </div>
        {/* --- END OF INNER BLACK FRAME --- */}

        {/* Download Button is outside the inner black frame, as per Figma */}
        <div className="download-button-wrapper">
          <button className="download-button">Download HTML CSS Project</button>
        </div>
      </>
    ),
    next_js: (
      <>
        {/* --- START OF INNER BLACK FRAME --- */}
        <div className="tab-content-container">
          <h3 className="tab-content-title">
            <svg /* ... SVG for Next.js icon ... */ >...</svg>
            Export as Next JS Project
            <span className="zipped-tag">Zipped</span>
          </h3>

          <div className="checkbox-group">
            <label className="checkbox-container">
              <input type="checkbox" className="hidden-checkbox" checked readOnly />
              <div className="custom-checkbox">
                {/* Checkmark SVG */}
                <svg className="checkmark-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9.64 18.06l-4.24-4.24 1.41-1.41 2.83 2.83 6.36-6.36 1.41 1.41-7.77 7.78z"/>
                </svg>
              </div>
              <span className="checkbox-label">Use `app` directory (NextJS v13+)</span>
            </label>
            <label className="checkbox-container">
              <input type="checkbox" className="hidden-checkbox" checked readOnly />
              <div className="custom-checkbox">
                {/* Checkmark SVG */}
                <svg className="checkmark-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9.64 18.06l-4.24-4.24 1.41-1.41 2.83 2.83 6.36-6.36 1.41 1.41-7.77 7.78z"/>
                </svg>
              </div>
              <span className="checkbox-label">Include assets locally (images, styles, fonts, etc.)</span>
            </label>
            <label className="checkbox-container">
              <input type="checkbox" className="hidden-checkbox" checked readOnly />
              <div className="custom-checkbox">
                {/* Checkmark SVG */}
                <svg className="checkmark-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9.64 18.06l-4.24-4.24 1.41-1.41 2.83 2.83 6.36-6.36 1.41 1.41-7.77 7.78z"/>
                </svg>
              </div>
              <span className="checkbox-label">Include custom code</span>
            </label>
          </div>
        </div>
        {/* --- END OF INNER BLACK FRAME --- */}

        {/* Download Button is outside the inner black frame, as per Figma */}
        <div className="download-button-wrapper">
          <button className="download-button">Download Next JS Project</button>
        </div>
      </>
    ),
  };

  return (
    <div className="tab-content">
      {tabContents[activeTab]}
    </div>
  );
};

export default TabContent;