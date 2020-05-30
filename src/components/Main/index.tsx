import React from 'react';
import { Input } from '../Input';
import { DailyForecast } from '../Forecast';
import './Main.style.css';

export function Main() {
  return (
    <section className="main-container">
      <Input />
      <DailyForecast />
    </section>
  );
}
