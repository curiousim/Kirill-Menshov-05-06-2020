import React from 'react';
import './HeadBar.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setShow, getCurrentShow } from '../../store/app.reducer';

export function WindowSwitch() {
  const dispatch = useDispatch();

  const currentShowComponent = useSelector(getCurrentShow);

  const setShowHome = () => dispatch(setShow('home'));

  const setShowFavorites = () => dispatch(setShow('favorites'));

  return (
    <div className="hbar-controls">
      <button
        className={
          currentShowComponent === 'home' ? 'selected-screen' : 'screen'
        }
        onClick={setShowHome}
      >
        Home
      </button>
      |
      <button
        className={
          currentShowComponent === 'favorites' ? 'selected-screen' : 'screen'
        }
        onClick={setShowFavorites}
      >
        Favorites
      </button>
    </div>
  );
}
