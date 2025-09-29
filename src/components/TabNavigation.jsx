// src/components/TabNavigation.jsx
import React from 'react';
import '../styles/TabNavigation.css'; // Import its dedicated CSS

// This component will receive:
//   - activeTab: a string ('html' or 'nextjs') indicating which tab is currently selected
//   - onTabChange: a function to call when a tab button is clicked, to update the activeTab state
function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          // --- CRITICAL FIX AREA ---
          onClick={() => onTabChange(tab.id)} // <--- MUST pass tab.id to the setter
        >
          {/* No span, so text is directly here */}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabNavigation;