// src/components/Checkbox.jsx

import React from 'react';
import '../styles/Checkbox.css';

function Checkbox({ label, checked, onChange, name }) {
  return (
    <label className="checkbox-container">
      <input 
        type="checkbox" 
        className="hidden-checkbox" 
        checked={checked} 
        onChange={onChange}
        name={name}
      />
      
      {/* The visible custom box */}
      <div className="custom-checkbox">
        {/* The Checkmark SVG (visible when 'checked') */}
        <svg 
          className="checkmark-icon" 
          viewBox="0 0 24 24"
        >
          {/* Path for the checkmark (simple checkmark SVG path) */}
          <path fill="currentColor" d="M9.64 18.06l-4.24-4.24 1.41-1.41 2.83 2.83 6.36-6.36 1.41 1.41-7.77 7.78z"/>
        </svg>
      </div>
      
      {/* The label text */}
      <span className="checkbox-label">{label}</span>
    </label>
  );
}

export default Checkbox;