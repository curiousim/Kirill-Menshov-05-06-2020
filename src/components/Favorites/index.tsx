import React from 'react';
import './Forecast.style.css';

import { useSelector } from 'react-redux';
import { getFavorites } from '../../store/app.reducer';
import { Favorite } from '../../models/favorite';

export function FavoritesComponent() {
  const favorites = useSelector(getFavorites) as Favorite[];

  return <div className="forecast-container"></div>;
}
