import React from 'react';
import './Forecast.style.scss';

import { Card } from '../Cards';
import { ForecastModel } from '../../models/forecast';

interface Props {
  forecast: ForecastModel[];
}

export function Forecast({ forecast }: Props) {
  return (
    <div className="forecast-container">
      {forecast.map((day: ForecastModel) => (
        <Card key={day.Date} forecast={day} />
      ))}
    </div>
  );
}
