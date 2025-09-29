// src/components/TabContent.jsx - UPDATED TO USE CHECKBOX COMPONENT

import React from 'react';
import Checkbox from './Checkbox'; // <--- IMPORT THE NEW COMPONENT
import '../styles/TabContent.css';

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
          {/* Title/Zipped Tag (RETAINED) */}
          <h3 className="tab-content-title">
            {/* SVG placeholder for icon */}
            <svg className="tab-content-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M2.5 4v16h19V4h-19zm17 2v12h-15V6h15z"/></svg> 
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
          {/* Title/Zipped Tag (RETAINED) */}
          <h3 className="tab-content-title">
            {/* SVG placeholder for icon */}
            <svg className="tab-content-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"/></svg> 
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