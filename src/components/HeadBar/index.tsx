import React from 'react';
import './HeadBar.style.css';
import { TempSwitch } from './TempSwitch';
import { WindowSwitch } from './WIndowSwitch';

export function HeadBar() {
  return (
    <nav className="hbar-container">
      <div className="hbar-logo">Weather App</div>
      <div className="hbar-controls">
        <TempSwitch />
        <WindowSwitch />
      </div>
    </nav>
  );
}
