import React from 'react';
import './Forecast.style.css';

import { Card } from '../Card';
import { useSelector } from 'react-redux';
import { getForecast } from '../../store/app.reducer';
import { Forecast } from '../../models/forecast';
import { ForecastHeader } from './Header';

export function DailyForecast() {
  const forecast = useSelector(getForecast) as Forecast[];

  const todaysForecast = forecast[0];

  return (
    <div className="forecast-container">
      <ForecastHeader
        iconId={todaysForecast.Day.Icon}
        iconPhrase={todaysForecast.Day.IconPhrase}
        temp={todaysForecast.Temperature.Maximum.Value}
      />
      <div className="cards">
        {forecast.map((day: Forecast) => (
          <Card key={day.Date} forecast={day} />
        ))}
      </div>
    </div>
  );
}
