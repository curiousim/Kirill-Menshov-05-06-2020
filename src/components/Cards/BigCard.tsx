import React from 'react';
import './Card.style.css';
import { useSelector } from 'react-redux';
import { getShowInFahrenheit } from '../../store/app.reducer';
import { cToFahr } from '../../utils';
import { AddFavorite } from '../AddFavorite/AddFavorite';

interface Props {
  iconPhrase: string;
  iconId: number;
  temp: number;
  city: string;
  isLoading?: boolean;
}

export function BigCard({ iconPhrase, iconId, temp, city, isLoading }: Props) {
  const showFahrenheit = useSelector(getShowInFahrenheit);

  const renderCity = () => (
    <div className="city">
      {city} <AddFavorite />
    </div>
  );

  const renderCurrentWeather = () => (
    <div className="current">
      <h1>{showFahrenheit ? cToFahr(temp) : temp}&deg;</h1>
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
      {!isLoading && renderCurrentWeather()}
    </div>
  );
}
