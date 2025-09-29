// src/components/Checkbox.jsx
import React from 'react';
import '../styles/Checkbox.css'; // Import its dedicated CSS

// This component receives:
//   - label: The text displayed next to the checkbox.
//   - checked: A boolean indicating if the checkbox is checked.
//   - onChange: A function to call when the checkbox is toggled.
const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden-checkbox" // Hide the default browser checkbox
      />
      {/* This div is our custom-styled checkbox */}
      <div className={`custom-checkbox ${checked ? 'checked' : ''}`}>
        {/* Simple SVG for the checkmark icon */}
        {checked && (
          <svg
            className="checkmark-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;