import React from 'react';
import './HeadBar.style.css';

export function HeadBar() {
  return (
    <nav className="hbar-container">
      <div className="hbar-logo">Weather App</div>
      <div className="hbar-controls">
        <div className="hbar-temp">C&deg; / F&deg;</div>
        <div className="hbar-nav">Home/Favorites</div>
      </div>
    </nav>
  );
}
