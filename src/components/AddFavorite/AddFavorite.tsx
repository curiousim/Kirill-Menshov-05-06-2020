import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFavorites,
  getCityId,
  addToFavorite,
  removeFavorite,
} from '../../store/app.reducer';

export function AddFavorite() {
  const dispatch = useDispatch();

  const favoritesArr = useSelector(getFavorites);

  const cityId = useSelector(getCityId);

  function isAddedToFavs() {
    const isInArr = favoritesArr.filter((city) => city.id === cityId);

    return isInArr.length > 0;
  }

  function handleClick() {
    isAddedToFavs() ? dispatch(removeFavorite()) : dispatch(addToFavorite());
  }

  return (
    <div style={{ padding: '1rem' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        style={{ cursor: 'pointer' }}
        onClick={handleClick}
      >
        <path
          fill={isAddedToFavs() ? 'var(--colorRed)' : 'var(--colorWhite)'}
          fillRule="evenodd"
          d="M12.012 5.572l-1.087-1.087a5.5 5.5 0 10-7.778 7.778l8.839 8.839.002-.002.026.026 8.839-8.839a5.5 5.5 0 10-7.778-7.778l-1.063 1.063zm-.024 12.7l4.936-4.937 1.45-1.4h.002l1.063-1.062a3.5 3.5 0 10-4.95-4.95L12.013 8.4l-.007-.007h-.001L9.511 5.9a3.5 3.5 0 10-4.95 4.95l2.54 2.54.001-.003 4.886 4.886z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
