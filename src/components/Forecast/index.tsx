import React from 'react';
import './Forecast.style.css';

import { Card } from '../Card';

export function Forecast() {
  return (
    <div className="forecast-container">
      Forecast
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
