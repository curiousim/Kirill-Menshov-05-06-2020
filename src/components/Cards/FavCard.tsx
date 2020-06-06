import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Favorite } from '../../models/favorite';
import { BigCard } from './BigCard';
import { FavoriteForecast } from '../../models/favForecast';
import { Spinner } from '../Spinner';
import { useSelector } from 'react-redux';
import { getShowInFahrenheit } from '../../store/app.reducer';
import { cToFahr } from '../../utils';
import { AddFavorite } from '../AddFavorite/AddFavorite';

interface Props {
  favorite: Favorite;
}

export function FavCard({ favorite }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const [forecast, setForecast] = useState<FavoriteForecast | {}>({});

  const showFahrenheit = useSelector(getShowInFahrenheit);

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios({
  //     url: `http://dataservice.accuweather.com/currentconditions/v1/${favorite.id}`,
  //     method: 'get',
  //     params: {
  //       apikey: '1EU24RLGj7iLDBCueRlAb5l26LOwusoH',
  //       language: 'en-us',
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //     setForecast(res.data[0]);
  //     setIsLoading(false);
  //   });
  //   return () => {
  //     setForecast({});
  //   };
  // }, []);

  const renderCard = () => (
    <div className="fav-card">
      <div className="card-add-fav">
        <AddFavorite customId={215854} />
      </div>
      <span className="fav-city">{/* favorite.city */}Tel Aviv</span>
      <span className="fav-temp">
        {/* {showFahrenheit && forecast
          ? cToFahr((forecast as FavoriteForecast).Temperature.Metric.Value)
          : (forecast as FavoriteForecast).Temperature.Metric.Value} */}
        28&deg;
      </span>
      <span className="fav-text">Very Sunny</span>
    </div>
  );

  // return <>{isLoading ? <Spinner size={10} /> : renderCard()}</>;

  return <>{renderCard()}</>;
}
