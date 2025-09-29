// src/components/TabNavigation.jsx
import React from 'react';
import '../styles/TabNavigation.css'; // Import its dedicated CSS

// This component will receive:
//   - activeTab: a string ('html' or 'nextjs') indicating which tab is currently selected
//   - onTabChange: a function to call when a tab button is clicked, to update the activeTab state
const TabNavigation = ({ activeTab, onTabChange }) => {
  return (
    <div className="tab-navigation">
      <button
        // Apply 'active' class if activeTab is 'html'
        className={`tab-button ${activeTab === 'html' ? 'active' : ''}`}
        onClick={() => onTabChange('html')}
      >
        HTML & CSS
      </button>
      <button
        // Apply 'active' class if activeTab is 'nextjs'
        className={`tab-button ${activeTab === 'nextjs' ? 'active' : ''}`}
        onClick={() => onTabChange('nextjs')}
      >
        Next JS
      </button>
    </div>
  );
};

export default TabNavigation;