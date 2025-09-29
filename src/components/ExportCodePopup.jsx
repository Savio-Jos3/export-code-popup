// src/components/ExportCodePopup.jsx - UPDATED JSX

import React, { useState, useRef, useEffect } from 'react';
import PopupHeader from './PopupHeader';
import TabNavigation from './TabNavigation';
import TabContent from './TabContent';
import '../styles/ExportCodePopup.css';
import '../styles/Frame2Wrapper.css'; // <-- ADD THIS IMPORT


// Define tab data for the component
const TABS = [
  { id: 'html_css', label: 'HTML & CSS' },
  { id: 'next_js', label: 'Next JS' },
];

function ExportCodePopup({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const popupRef = useRef(null);

  // Effect to close popup when clicking outside of it
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="export-code-popup-container" ref={popupRef}>
        
        <PopupHeader onClose={onClose} />
        
        {/* --- START OF FRAME 2 WRAPPER --- */}
        <div className="frame-2-wrapper">
          <TabNavigation tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
          <TabContent activeTab={activeTab} />
        </div>
        {/* --- END OF FRAME 2 WRAPPER --- */}
        
      </div>
    </div>
  );
}

export default ExportCodePopup;