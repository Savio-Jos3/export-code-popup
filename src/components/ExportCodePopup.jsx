// src/components/ExportCodePopup.jsx - UPDATED JSX

import React, { useState, useRef, useEffect } from 'react';
import PopupHeader from './PopupHeader';
import TabNavigation from './TabNavigation';
import TabContent from './TabContent';
import '../styles/ExportCodePopup.css';

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
        
        {/* The PopupHeader now includes the "Code Export" title AND 
            the "Manage how you download..." description text, as well as the Close Button. */}
        <PopupHeader onClose={onClose} />
        
        {/* Tab Navigation (SegmentPicker) - Frame 2 starts here */}
        <TabNavigation tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
        
        {/* Tab Content and Download Button */}
        <TabContent activeTab={activeTab} />
        
      </div>
    </div>
  );
}

export default ExportCodePopup;