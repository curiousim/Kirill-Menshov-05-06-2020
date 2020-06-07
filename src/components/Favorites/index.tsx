import React from 'react';
import './Favorites.style.scss';

import { useSelector } from 'react-redux';
import { getFavorites } from '../../store/app.reducer';
import { Favorite } from '../../models/favorite';
import { FavCard } from '../Cards/FavCard';
import { Placeholder } from '../Placeholder';

export function FavoritesComponent() {
  const favorites = useSelector(getFavorites) as Favorite[];

  function renderFavorites() {
    return favorites.map((fav: Favorite) => (
      <FavCard key={fav.id} favorite={fav} />
    ));
  }

  function renderPlaceholder() {
    return (
      <Placeholder
        width="100%"
        height="50rem"
        color="var(--colorWhite)"
        content="No favorites saved yet."
      />
    );
  }

  return (
    <div className="favorites-container">
      {favorites.length ? renderFavorites() : renderPlaceholder()}
    </div>
  );
}
