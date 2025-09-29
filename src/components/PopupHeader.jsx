// src/components/PopupHeader.jsx - UPDATED STRUCTURE

import React from 'react';
import '../styles/PopupHeader.css';

const PopupHeader = ({ onClose }) => {
  return (
    <div className="popup-header-row">
      
      {/* NEW: Wrapper for the Title and Description (The 390x53 block) */}
      <div className="popup-title-description-container">
        <h2 className="popup-title">Code Export</h2>
        <p className="popup-description">
          Manage how you download your website's code.
        </p>
      </div>

      {/* Close Button remains separate for alignment */}
      <button className="close-button" onClick={onClose}>
        {/* SVG for the 'X' icon (22x22) */}
        <svg
          width="22" 
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

export default PopupHeader;