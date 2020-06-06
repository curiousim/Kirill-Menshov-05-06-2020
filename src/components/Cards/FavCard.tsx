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
import { useToasts } from 'react-toast-notifications';

interface Props {
  favorite: Favorite;
}

export function FavCard({ favorite }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const [forecast, setForecast] = useState<FavoriteForecast | {}>({});

  const showFahrenheit = useSelector(getShowInFahrenheit);

  const { addToast } = useToasts();

  useEffect(() => {
    setIsLoading(true);
    axios({
      url: `https://dataservice.accuweather.com/currentconditions/v1/${favorite.id}`,
      method: 'get',
      params: {
        apikey: process.env.REACT_APP_ACCU_KEY,
        language: 'en-us',
      },
    })
      .then((res) => {
        setForecast(res.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        addToast(
          `Error while fetching forecast for ${favorite.city}: ${error.message}`,
          {
            appearance: 'warning',
            autoDismiss: true,
          }
        );
      });
    return () => {
      setForecast({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          color="var(--colorBlack)"
          content="No data. Please try again."
        />
      )}
    </div>
  );
}
