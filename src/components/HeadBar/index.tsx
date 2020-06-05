import React from 'react';
import './HeadBar.style.scss';
import { TempSwitch } from './TempSwitch';
import { WindowSwitch } from './WIndowSwitch';
import { Logo } from '../../assets/logo';
import { Input } from '../Input';

export function HeadBar() {
  return (
    <nav className="hbar-container">
      <div className="hbar-logo">
        <Logo />
      </div>
      <div>
        <Input />
      </div>
      <div className="hbar-controls">
        <WindowSwitch />
        <TempSwitch />
      </div>
    </nav>
  );
}
