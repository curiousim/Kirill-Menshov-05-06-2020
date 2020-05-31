import React, { useState } from 'react';
import axios from 'axios';
import { Favorite } from '../../models/favorite';
import { BigCard } from './BigCard';
import { FavoriteForecast } from '../../models/favForecast';

interface Props {
  favorite: Favorite;
}

export function FavCard({ favorite }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const [forecast, setForecast] = useState<FavoriteForecast | {}>({});

  async function fetchForecast() {}

  return (
    <>
      <div />
    </>
  );
}
