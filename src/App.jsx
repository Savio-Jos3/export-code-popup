// src/App.jsx
import React, { useState } from 'react';
import ExportCodePopup from './components/ExportCodePopup';
import ExportButton from './components/ExportButton';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'var(--app-bg)',
        color: 'var(--text-primary-on-light)' // This won't be visible without other text, but good to keep
      }}
    >
      <ExportButton onClick={handleOpenPopup} />

      <ExportCodePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default App;