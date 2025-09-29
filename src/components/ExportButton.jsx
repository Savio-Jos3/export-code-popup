// src/components/ExportButton.jsx
import React from 'react';
import '../styles/ExportButton.css';

const ExportButton = ({ onClick }) => {
  return (
    <button className="export-trigger-button" onClick={onClick}>
      {/* CHANGE THIS LINE: from "Open Export Code Popup" to "EXPORT CODE" */}
      EXPORT CODE 
    </button>
  );
};

export default ExportButton;