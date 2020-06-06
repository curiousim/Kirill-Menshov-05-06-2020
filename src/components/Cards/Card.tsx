import React from 'react';
import './Card.style.scss';
import { ForecastModel } from '../../models/forecast';
import { useSelector } from 'react-redux';
import { getShowInFahrenheit } from '../../store/app.reducer';
import { cToFahr } from '../../utils';

interface Props {
  forecast: ForecastModel;
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
      <span className="card-date">
        {date.toLocaleDateString(undefined, { weekday: 'long' })}
      </span>
      <div className="card-row">
        <img
          alt={forecast.Day.IconPhrase}
          width="70px"
          src={require(`../../assets/${forecast.Day.Icon}.svg`)}
        />
        <span className={'card-temp'}>{tempDay}&deg;</span>
      </div>
      <div className="card-row">
        <img
          alt={forecast.Night.IconPhrase}
          width="70px"
          src={require(`../../assets/${forecast.Night.Icon}.svg`)}
        />
        <span className={'card-temp'}>{tempNight}&deg;</span>
      </div>
    </div>
  );
}
