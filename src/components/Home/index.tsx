import React from 'react';
import './Home.style.scss';
import { useSelector } from 'react-redux';
import { getForecast } from '../../store/app.reducer';
import { ForecastModel } from '../../models/forecast';
import { BigCard } from '../Cards';
import { Forecast } from '../Forecast';

export function Home() {
  const forecast = useSelector(getForecast) as ForecastModel[];

  const todaysForecast = forecast[0];
  return (
    <div className="home-container">
      <div className="current">
        <BigCard
          temp={todaysForecast.Temperature.Maximum.Value}
          city={'Tel Aviv'}
        />
        <div className="icon-container">
          <img
            alt={todaysForecast.Day.IconPhrase}
            width="320rem"
            src={require(`../../assets/${todaysForecast.Day.Icon}.svg`)}
          />
        </div>
      </div>
      <Forecast forecast={forecast} />
    </div>
  );
}
