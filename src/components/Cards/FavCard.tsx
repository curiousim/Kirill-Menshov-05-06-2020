import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Favorite } from '../../models/favorite';
import { FavoriteForecast } from '../../models/favForecast';
import { useSelector } from 'react-redux';
import { getShowInFahrenheit } from '../../store/app.reducer';
import { cToFahr } from '../../utils';
import { AddFavorite } from '../AddFavorite/AddFavorite';
import { Loading } from '../Loading';
import { Placeholder } from '../Placeholder';

interface Props {
  favorite: Favorite;
}

export function FavCard({ favorite }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const [forecast, setForecast] = useState<FavoriteForecast | {}>({});

  const showFahrenheit = useSelector(getShowInFahrenheit);

  useEffect(() => {
    setIsLoading(true);
    axios({
      url: `http://dataservice.accuweather.com/currentconditions/v1/${favorite.id}`,
      method: 'get',
      params: {
        apikey: process.env.REACT_APP_ACCU_KEY,
        language: 'en-us',
      },
    })
      .then((res) => {
        console.log(res);
        setForecast(res.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
    return () => {
      setForecast({});
    };
  }, []);

  function renderCard() {
    return (
      <div className="fav-card">
        <div className="card-add-fav">
          <AddFavorite customId={favorite.id} />
        </div>
        <span className="fav-city">{favorite.city}</span>
        <span className="fav-temp">
          {showFahrenheit && Object.keys(forecast).length
            ? cToFahr((forecast as FavoriteForecast).Temperature.Metric.Value)
            : (forecast as FavoriteForecast).Temperature.Metric.Value}
        </span>
        <span className="fav-text">
          {(forecast as FavoriteForecast).WeatherText}
        </span>
      </div>
    );
  }

  return (
    <div className="fav-card">
      {isLoading ? (
        <Loading width="19rem" height="27rem" />
      ) : Object.keys(forecast).length ? (
        renderCard()
      ) : (
        <Placeholder
          width="19rem"
          height="27rem"
          content="No data. Please try again."
        />
      )}
    </div>
  );
}
