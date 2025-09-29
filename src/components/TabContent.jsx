// src/components/TabContent.jsx - FINAL VERSION WITH PNG ICONS

import React from 'react';
import Checkbox from './Checkbox'; 
import '../styles/TabContent.css';

// Importing the PNG assets for the project icons
import HtmlCssIcon from '../assets/react.png'; 
import NextJsIcon from '../assets/NextJS.png';   


const TabContent = ({ activeTab }) => {
  // Mock state for checkboxes (replace with actual state management later)
  const [checkboxState, setCheckboxState] = React.useState({
    htmlAssets: true,
    htmlCustom: true,
    nextAppDir: true,
    nextAssets: true,
    nextCustom: true,
  });

  const handleCheckboxChange = (event) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };
  
  // Define content for each tab
  const tabContents = {
    html_css: (
      <>
        {/* --- INNER BLACK FRAME (.tab-content-container) --- */}
        <div className="tab-content-container">
          {/* Title/Zipped Tag */}
          <h3 className="tab-content-title">
            {/* --- FIX: Replaced SVG with <img> for HTML/CSS Icon --- */}
            <img src={HtmlCssIcon} alt="HTML/CSS Icon" className="tab-content-icon" />
            Export as HTML & CSS Project
            <span className="zipped-tag">Zipped</span>
          </h3>

          <div className="checkbox-group">
            <Checkbox 
              label="Include assets locally (images, styles, fonts, etc.)"
              name="htmlAssets"
              checked={checkboxState.htmlAssets}
              onChange={handleCheckboxChange}
            />
            <Checkbox 
              label="Include custom code"
              name="htmlCustom"
              checked={checkboxState.htmlCustom}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        {/* --- DOWNLOAD BUTTON (OUTSIDE FRAME) --- */}
        <div className="download-button-wrapper">
          <button className="download-button">Download HTML CSS Project</button>
        </div>
      </>
    ),
    next_js: (
      <>
        {/* --- INNER BLACK FRAME (.tab-content-container) --- */}
        <div className="tab-content-container">
          {/* Title/Zipped Tag */}
          <h3 className="tab-content-title">
            {/* --- FIX: Replaced SVG with <img> for Next JS Icon --- */}
            <img src={NextJsIcon} alt="Next JS Icon" className="tab-content-icon" />
            Export as Next JS Project
            <span className="zipped-tag">Zipped</span>
          </h3>

          <div className="checkbox-group">
            <Checkbox 
              label="Use `app` directory (NextJS v13+)"
              name="nextAppDir"
              checked={checkboxState.nextAppDir}
              onChange={handleCheckboxChange}
            />
            <Checkbox 
              label="Include assets locally (images, styles, fonts, etc.)"
              name="nextAssets"
              checked={checkboxState.nextAssets}
              onChange={handleCheckboxChange}
            />
            <Checkbox 
              label="Include custom code"
              name="nextCustom"
              checked={checkboxState.nextCustom}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        {/* --- DOWNLOAD BUTTON (OUTSIDE FRAME) --- */}
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
