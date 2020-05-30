import React from 'react';
import './Forecast.style.css';
import { useSelector } from 'react-redux';
import { getShowInFahrenheit } from '../../store/app.reducer';
import { cToFahr } from '../../utils';

interface Props {
  iconPhrase: string;
  iconId: number;
  temp: number;
}

export function ForecastHeader({ iconPhrase, iconId, temp }: Props) {
  const showFahrenheit = useSelector(getShowInFahrenheit);

  const renderCurrentWeather = () => (
    <div className="current">
      <img
        alt={iconPhrase}
        width="100px"
        src={require(`../../assets/${iconId}.svg`)}
      />
      <div>
        <h1>{showFahrenheit ? cToFahr(temp) : temp}&deg;</h1>
        <h4>{iconPhrase}</h4>
      </div>
    </div>
  );
  return <div className="forecast-header">{renderCurrentWeather()}</div>;
}
