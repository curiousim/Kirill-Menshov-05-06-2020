import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Favorite } from '../../models/favorite';
import { BigCard } from './BigCard';
import { FavoriteForecast } from '../../models/favForecast';
import { Spinner } from '../Spinner';

interface Props {
  favorite: Favorite;
}

export function FavCard({ favorite }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const [forecast, setForecast] = useState<FavoriteForecast | {}>({});

  useEffect(() => {
    setIsLoading(true);
    axios({
      url: `http://dataservice.accuweather.com/currentconditions/v1/${favorite.id}`,
      method: 'get',
      params: {
        apikey: '1EU24RLGj7iLDBCueRlAb5l26LOwusoH',
        language: 'en-us',
      },
    }).then((res) => {
      console.log(res);
      setForecast(res.data[0]);
      setIsLoading(false);
    });
    return () => {
      setForecast({});
    };
  }, []);

  const renderCard = () => (
    <BigCard
      city={favorite.city}
      iconId={(forecast as FavoriteForecast).WeatherIcon}
      iconPhrase={(forecast as FavoriteForecast).WeatherText}
      temp={(forecast as FavoriteForecast).Temperature.Metric.Value}
    />
  );

  return <>{isLoading ? <Spinner size={10} /> : renderCard()}</>;
}
