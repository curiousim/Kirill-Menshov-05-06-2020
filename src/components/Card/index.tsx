import React from 'react';
import './Card.style.css';
import { Forecast } from '../../models/forecast';
import { useSelector } from 'react-redux';
import { getShowInFahrenheit } from '../../store/app.reducer';
import { cToFahr } from '../../utils';

interface Props {
  forecast: Forecast;
}

export function Card({ forecast }: Props) {
  const showFahrenheit = useSelector(getShowInFahrenheit);

  const date = new Date(forecast.Date);

  const tempDay = showFahrenheit
    ? cToFahr(forecast.Temperature.Maximum.Value)
    : forecast.Temperature.Maximum.Value;

  const tempNight = showFahrenheit
    ? cToFahr(forecast.Temperature.Minimum.Value)
    : forecast.Temperature.Minimum.Value;

  return (
    <div className="card-container">
      {date.toDateString()}
      <div className="card-row">
        <img
          alt={forecast.Day.IconPhrase}
          width="50px"
          src={require(`../../assets/${forecast.Day.Icon}.svg`)}
        />
        <p>{tempDay}</p>
      </div>
      <div className="card-row">
        <img
          alt={forecast.Night.IconPhrase}
          width="50px"
          src={require(`../../assets/${forecast.Night.Icon}.svg`)}
        />
        <p>{tempNight}</p>
      </div>
    </div>
  );
}
