import React from 'react';
import './HeadBar.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getShowInFahrenheit, setFahrenheit } from '../../store/app.reducer';

export function TempSwitch() {
  const dispatch = useDispatch();

  const showInFahrenheit = useSelector(getShowInFahrenheit);

  const setShowInFahrenheit = () => dispatch(setFahrenheit(true));

  const setShowInCelsius = () => dispatch(setFahrenheit(false));

  return (
    <div className="hbar-temp">
      <span
        className={showInFahrenheit ? 'temp' : 'temp-selected'}
        onClick={setShowInCelsius}
      >
        C&deg;
      </span>
      /
      <span
        className={showInFahrenheit ? 'temp-selected' : 'temp'}
        onClick={setShowInFahrenheit}
      >
        F&deg;
      </span>
    </div>
  );
}
