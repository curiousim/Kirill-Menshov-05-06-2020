import React from 'react';
import './HeadBar.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setShow, getCurrentShow } from '../../store/app.reducer';

export function WindowSwitch() {
  const dispatch = useDispatch();

  const currentShowComponent = useSelector(getCurrentShow);

  const setShowHome = () => dispatch(setShow('home'));

  const setShowFavorites = () => dispatch(setShow('favorites'));

  return (
    <div className="hbar-temp">
      <span
        className={currentShowComponent === 'home' ? 'temp-selected' : 'temp'}
        onClick={setShowHome}
      >
        Home
      </span>
      /
      <span
        className={
          currentShowComponent === 'favorites' ? 'temp-selected' : 'temp'
        }
        onClick={setShowFavorites}
      >
        Favorites
      </span>
    </div>
  );
}
