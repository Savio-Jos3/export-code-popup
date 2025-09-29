// src/components/Checkbox.jsx - FINAL VERSION USING PNG TICK

import React from 'react';
import '../styles/Checkbox.css';
import CheckmarkTick from '../assets/tick.png'; // <-- IMPORT IS CORRECT

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
        {/* --- CRITICAL FIX: Replaced <svg> with <img> for PNG Tick --- */}
        <img 
          src={CheckmarkTick} 
          alt="Checkmark" 
          className="checkmark-icon" 
        />
      </div>
      
      {/* The label text */}
      <span className="checkbox-label">{label}</span>
    </label>
  );
}

export default Checkbox;