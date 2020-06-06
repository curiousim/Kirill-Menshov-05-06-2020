import React from 'react';
import './Favorites.style.scss';

import { useSelector } from 'react-redux';
import { getFavorites } from '../../store/app.reducer';
import { Favorite } from '../../models/favorite';
import { FavCard } from '../Cards/FavCard';

export function FavoritesComponent() {
  const favorites = useSelector(getFavorites) as Favorite[];

  function renderFavorites() {
    return favorites.map((fav: Favorite) => <FavCard favorite={fav} />);
  }

  return <div className="favorites-container">{renderFavorites()}</div>;
}
