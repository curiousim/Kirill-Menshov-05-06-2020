import React from 'react';
import './Card.style.scss';
import { useSelector } from 'react-redux';
import { getShowInFahrenheit } from '../../store/app.reducer';
import { cToFahr } from '../../utils';
import { AddFavorite } from '../AddFavorite/AddFavorite';

interface Props {
  city: string;
  temp: number;
}

export function BigCard({ temp, city }: Props) {
  const showFahrenheit = useSelector(getShowInFahrenheit);

  return (
    <div className="big-card">
      <div className="card-add-fav">
        <AddFavorite />
      </div>
      <span className="bigcard-temp">
        {showFahrenheit && temp ? cToFahr(temp) : temp}&deg;
      </span>
      <span className="bigcard-city">{city}</span>
    </div>
  );
}
