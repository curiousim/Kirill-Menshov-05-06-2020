import React from 'react';
import './Forecast.style.css';

import { Card } from '../Card';
import { useSelector } from 'react-redux';
import { getForecast } from '../../store/app.reducer';
import { Forecast } from '../../models/forecast';

export function DailyForecast() {
  const forecast = useSelector(getForecast) as Forecast[];
  return (
    <div className="forecast-container">
      Forecast
      <div className="cards">
        {forecast.map((day: Forecast) => (
          <Card key={day.Date} forecast={day} />
        ))}
      </div>
    </div>
  );
}
