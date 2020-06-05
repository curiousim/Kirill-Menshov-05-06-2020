import React from 'react';
import './Card.style.scss';
import { useSelector } from 'react-redux';
import { getShowInFahrenheit } from '../../store/app.reducer';
import { cToFahr } from '../../utils';
import { AddFavorite } from '../AddFavorite/AddFavorite';

interface Props {
  city: string;
  iconPhrase?: string;
  iconId?: number;
  temp?: number;
}

export function BigCard({ iconPhrase, iconId, temp, city }: Props) {
  const showFahrenheit = useSelector(getShowInFahrenheit);

  const renderCity = () => (
    <div className="city">
      {city} <AddFavorite />
    </div>
  );

  const renderCurrentWeather = () => (
    <div className="current">
      <h1>{showFahrenheit && temp ? cToFahr(temp) : temp}&deg;</h1>
      <img
        alt={iconPhrase}
        width="100px"
        src={require(`../../assets/${iconId}.svg`)}
      />
      <h4>{iconPhrase}</h4>
    </div>
  );

  return (
    <div className="big-card">
      {renderCity()}
      {renderCurrentWeather()}
    </div>
  );
}
