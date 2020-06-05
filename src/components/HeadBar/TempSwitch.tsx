import React from 'react';
import './HeadBar.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getShowInFahrenheit, setFahrenheit } from '../../store/app.reducer';

export function TempSwitch() {
  const dispatch = useDispatch();

  const showInFahrenheit = useSelector(getShowInFahrenheit);

  const toggleFahrenheit = () =>
    showInFahrenheit
      ? dispatch(setFahrenheit(false))
      : dispatch(setFahrenheit(true));

  return (
    <button className="hbar-temp" onClick={toggleFahrenheit}>
      {showInFahrenheit ? <span>F&deg;</span> : <span>C&deg;</span>}
    </button>
  );
}
