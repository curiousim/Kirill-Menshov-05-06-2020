import React, { useEffect } from 'react';
import './Home.style.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  getForecast,
  getCityId,
  getIsLoading,
  setAppIsLoading,
  setForecast,
  getCityName,
} from '../../store/app.reducer';
import { ForecastModel } from '../../models/forecast';
import { BigCard } from '../Cards';
import { Forecast } from '../Forecast';
import axios, { AxiosResponse } from 'axios';
import { Loading } from '../Loading';
import { Placeholder } from '../Placeholder';
import { useToasts } from 'react-toast-notifications';
import { useGeolocation } from '../../hooks/useGeolocation';

export function Home() {
  const dispatch = useDispatch();

  const forecast = useSelector(getForecast) as ForecastModel[];

  const todaysForecast = forecast[0];

  const isLoading = useSelector(getIsLoading);

  const cityId = useSelector(getCityId);

  const cityName = useSelector(getCityName);

  const { addToast } = useToasts();

  useGeolocation();

  useEffect(() => {
    dispatch(setAppIsLoading(true));
    axios({
      url: `https://https://wearolo.herokuapp.com/api/forecasts/v1/daily/5day/${cityId}`,
      method: 'get',
      params: {
        apikey: process.env.REACT_APP_ACCU_KEY,
        language: 'en-us',
        details: false,
        metric: true,
      },
    })
      .then((res: AxiosResponse) => {
        dispatch(setForecast(res.data.DailyForecasts));
        dispatch(setAppIsLoading(false));
      })
      .catch((error) => {
        dispatch(setAppIsLoading(false));
        addToast(`Error while fetching forecast: ${error.message}`, {
          appearance: 'warning',
          autoDismiss: true,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityId]);

  function renderComponent() {
    return (
      <>
        <div className="current">
          <BigCard
            temp={todaysForecast.Temperature.Maximum.Value}
            city={cityName}
          />
          <div className="icon-container">
            <img
              alt={todaysForecast.Day.IconPhrase}
              width="320rem"
              src={require(`../../assets/${todaysForecast.Day.Icon}.svg`)}
            />
          </div>
        </div>
        <Forecast forecast={forecast} />
      </>
    );
  }

  return (
    <div className="home-container">
      {isLoading ? (
        <Loading width="50rem" height="50rem" />
      ) : forecast.length ? (
        renderComponent()
      ) : (
        <Placeholder
          width="50rem"
          height="50rem"
          color="var(--colorWhite)"
          content="No forecast to show. Please enter a city."
        />
      )}
    </div>
  );
}
